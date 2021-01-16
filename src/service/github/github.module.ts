import {RepositoryResolver} from "./repository.resolver";
import {OrganizationResolver} from "./organization.resolver";
import {OrganizationService} from "./organization.service";
import {RepositoryService} from "./repository.service";
import {GithubService} from "./github.service";
import {GraphQLModule} from "@graphql-modules/core";
import {buildSchemaSync} from "type-graphql";
import {resolve} from "path";
import {GithubServiceSettings} from "./github.service-settings";
import {SearchResolver} from "./search.resolver";
import {SearchService} from "./search.service";

const resolvers = [
    RepositoryResolver,
    OrganizationResolver,
    SearchResolver
] as const

const services = [
    GithubServiceSettings,
    SearchService,
    GithubService,
    RepositoryService,
    OrganizationService
]

export const GithubModule = new GraphQLModule({
    providers: [...services, ...resolvers],
    extraSchemas: [
        buildSchemaSync({
            resolvers,
            container: ({ context }) => GithubModule.injector.getSessionInjector(context),
            emitSchemaFile: resolve(__dirname, "github.schema.gql"),
        }),
    ],
});
