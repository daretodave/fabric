import {Inject, Service} from "typedi";
import {Octokit} from "@octokit/core";
import * as parseLinkHeader from 'parse-link-header';
import {GithubServiceSettings} from "./github.service-settings";

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

        const {
            data,
            headers
        } = await this.client.request(
            `${path}{?${Object.keys(options).join(",")}}`,
            options
        );

        if (!Array.isArray(data)) {
            return data;
        }

        const result = [...results, ...data];
        const {next} = parseLinkHeader(headers.link);

        if (next && !options.limit || result.length < options.limit) {

            return await this.query(path, {
                    ...options,
                    ...next,
                }, result);
        }

        return result.slice(0, options.limit || result.length);
    }

}



// Container.set({id: GithubService.API_TOKEN, factory: () => process.env.GHE_API_TOKEN});
// Container.set({id: GithubService.API_HOST, factory: () => process.env.GHE_API_URL});
// Container.set({
//     id: GithubService.API_LIMITS, factory: () => ({
//         RESULTS_PER_PAGE: 50,
//         RESULTS_LIMIT: 150,
//     })
// });