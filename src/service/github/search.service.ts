import "reflect-metadata";

import {Service} from "typedi";
import {GithubService} from "./github.service";
import {SearchRequestTopic, SearchRequest, SearchResultUser, SearchResultCode, SearchResultIssue} from "./search";

@Service()
export class SearchService extends GithubService {

    async search<R>(topic: SearchRequestTopic, options: SearchRequest): Promise<R[]> {
        return await this.query<R[]>(`GET /search/${topic}`, options);
    }

    async users(options: SearchRequest): Promise<SearchResultUser[]> {
        return await this.search<SearchResultUser>('users', options);
    }

    async code(options: SearchRequest): Promise<SearchResultCode[]> {
        return await this.search<SearchResultCode>('code', options);
    }

    async issues(options: SearchRequest): Promise<SearchResultIssue[]> {
        return await this.search<SearchResultIssue>('issues', options);
    }

}

