import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Organization {

    @Field(type => String, {name: 'name'})
    login: string;
    @Field(id =>  Number)
    id: number
    @Field(type => String)
    node_id: string
    @Field(type => String)
    url: string
    @Field(type => String)
    repos_url: string
    @Field(type => String)
    events_url: string
    @Field(type => String)
    hooks_url: string
    @Field(type => String)
    issues_url: string
    @Field(type => String)
    members_url: string
    @Field(type => String)
    public_members_url: string
    @Field(type => String)
    avatar_url: string
    @Field(type => String)
    description: string
}

