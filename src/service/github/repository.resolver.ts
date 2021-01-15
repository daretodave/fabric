import {Arg, Query, Resolver} from "type-graphql";
import {Service} from "typedi";
import {RepositoryService} from "./repository.service";
import {Repository} from "./repository";
import {Injectable} from "@graphql-modules/di";

@Resolver(of => Repository)
@Injectable()
@Service()
export class RepositoryResolver {

    constructor(private readonly repos: RepositoryService) {}

    @Query(returns => [Repository])
    async repositories(@Arg("org") org: string,
                       @Arg("limit", {defaultValue: 200}) limit: number): Promise<Repository[]>   {
        return await this.repos.repositories(org, {
            limit
        });
    }

    @Query(returns => Repository)
    async repository(@Arg("org") org: string,
                     @Arg("name") name: string): Promise<Repository>   {
        return await this.repos.repository(org, name);
    }

}