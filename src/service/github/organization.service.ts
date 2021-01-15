import "reflect-metadata";

import {Service} from "typedi";
import {Organization} from "./organization";
import {GithubService} from "./github.service";

@Service()
export class OrganizationService extends GithubService {

    async organizations(options?: any): Promise<Organization[]> {
        return await this.query<Organization>(`GET /organizations`, options);
    }

    async organization(org:string, options?: any): Promise<Organization> {
        const result = await this.query<Organization>(`GET /orgs/${org}`, options);

        return result;
    }

}

