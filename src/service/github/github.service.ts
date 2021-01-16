import {Inject, Service} from "typedi";
import {Octokit} from "@octokit/core";
import * as parseLinkHeader from 'parse-link-header';
import {GithubServiceSettings} from "./github.service-settings";
import {ArgsType, Field, Int} from "type-graphql";
import {Max, Min} from "class-validator";

@Service()
export class GithubService {

    private client;

    constructor(private settings: GithubServiceSettings) {
        this.client = new Octokit({
            baseUrl: settings.host,
            auth: settings.token
        });
    }

    async query<R>(path: string, parameters?: any, results: R[] = []) {
        const options: any = {
            limit: this.settings.limits.RESULTS_LIMIT,
            per_page: this.settings.limits.RESULTS_PER_PAGE,
            ...(parameters || {})
        };

        let {
            data,
            headers
        } = await this.client.request(
            `${path}{?${Object.keys(options).join(",")}}`,
            options
        );

        if (data.hasOwnProperty("items")
         && Array.isArray(data.items)) {
            data = data.items;
        }

        if (!Array.isArray(data)) {
            return data;
        }

        const result = [...results, ...data];
        const {next} = headers.link ? parseLinkHeader(headers.link) : {next: false};

        if (next && (!options.limit || result.length < options.limit)) {

            return await this.query(path, {
                    ...options,
                    ...next,
                }, result);
        }

        return result.slice(0, options.limit || result.length);
    }

}

@ArgsType()
export class GithubServiceArgs {
    @Field(type => Number, { defaultValue: 0 })
    @Min(0)
    page: number;

    @Field(type => Number, { defaultValue: 0 })
    @Min(0)
    since: number;

    @Field(type => Number, { defaultValue: 50 })
    @Min(1)
    per_page: number;

    @Field(type => Number)
    @Min(1)
    limit = 25;
}