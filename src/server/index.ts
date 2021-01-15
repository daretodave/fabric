import "reflect-metadata";

import {buildSchema, emitSchemaDefinitionFile} from "type-graphql";
import {ApolloServer} from "apollo-server";
import * as path from "path";
import {join} from "path";
import {Container} from "typedi";
import {GraphQLModule} from "@graphql-modules/core";
import {GithubModule} from "../service/github/github.module";

async function bootstrap() {
    const { schema } = new GraphQLModule({
        imports: [GithubModule],
    });

    await emitSchemaDefinitionFile(path.resolve(__dirname, "../", "schema.gql"), schema);

    // Create GraphQL server
    const server = new ApolloServer({
        schema,
        tracing: true,
        playground: true,
    });

    // Start the server
    const { url } = await server.listen(3000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap().catch(error => console.error(error.details || error));