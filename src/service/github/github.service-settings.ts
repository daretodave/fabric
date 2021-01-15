import {Injectable} from "@graphql-modules/di";

@Injectable()
export class GithubServiceLimits {
    RESULTS_PER_PAGE: number;
    RESULTS_LIMIT: number;
}

@Injectable()
export class GithubServiceSettings {
    public host: string = process.env.GHE_API_URL;
    public token: string = process.env.GHE_API_TOKEN;
    public limits: GithubServiceLimits = {
        RESULTS_PER_PAGE: 50,
        RESULTS_LIMIT: 150
    }
}