import "reflect-metadata";

import {Service} from "typedi";
import {GithubService} from "./github.service";
import {Repository} from "./repository";

@Service()
export class RepositoryService extends GithubService {

    async repositories(org, options?: any): Promise<Repository[]> {
        return await this.query<Repository[]>(`GET /orgs/${org}/repos`, options);
    }

    async repository(org, name, options?: any): Promise<Repository> {
        return await this.query<Repository>(`GET /repos/${org}/${name}`, options);
    }
}

