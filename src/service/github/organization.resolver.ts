import {Arg, Query, Resolver} from "type-graphql";
import {Service} from "typedi";
import {Organization} from "./organization";
import {OrganizationService} from "./organization.service";

@Resolver(of => Organization)
@Service()
export class OrganizationResolver {

    constructor(private readonly hosts: OrganizationService) {}

    @Query(returns => [Organization])
    async organizations(@Arg("limit", {defaultValue: 200}) limit: number): Promise<Organization[]>   {
        return await this.hosts.organizations({
            limit
        });
    }

    @Query(returns => Organization)
    async organization(@Arg("name") name: string): Promise<Organization>   {
        return await this.hosts.organization(name);
    }

}