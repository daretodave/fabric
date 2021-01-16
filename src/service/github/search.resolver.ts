import {Arg, Args, Query, Resolver} from "type-graphql";
import {Service} from "typedi";
import {Injectable} from "@graphql-modules/di";
import {SearchService} from "./search.service";
import {SearchResultCode, SearchResultIssue, SearchResultUser} from "./search";
import {GithubServiceArgs} from "./github.service";

@Resolver()
@Injectable()
@Service()
export class SearchResolver {

    constructor(private readonly search: SearchService) {
    }

    @Query(returns => [SearchResultUser])
    async searchUsers(@Arg("q") query: string,
                      @Args() options: GithubServiceArgs) {
        return await this.search.users({
            q: query,
            ...options
        });
    }

    @Query(returns => [SearchResultCode])
    async searchCode(@Arg("q") query: string,
                     @Args() options: GithubServiceArgs) {
        return await this.search.code({
            q: query,
            ...options
        });
    }

    @Query(returns => [SearchResultIssue])
    async searchIssues(@Arg("q") query: string,
                     @Args() options: GithubServiceArgs) {
        return await this.search.issues({
            q: query,
            ...options
        });
    }

}