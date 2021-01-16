import {Field, ObjectType} from "type-graphql";
import {Repository} from "./repository";

// @ObjectType()
// export class SearchResult {
//     @Field(type => Number)
//     total_count: number;
//     @Field(type => Boolean)
//     incomplete_results: boolean;
//     @Field(type => [SearchResultUser])
//     items: SearchResultUser[];
// }

@ObjectType()
export class SearchResultUser {
    @Field(type => String, {name: 'name'})
    login: string
    @Field(id => Number)
    id: number
    @Field(type => String)
    node_id: string
    @Field(type => String)
    avatar_url: string
    @Field(type => String)
    gravatar_id: string
    @Field(type => String)
    url: string
    @Field(type => String)
    html_url: string
    @Field(type => String)
    followers_url: string
    @Field(type => String)
    subscriptions_url: string
    @Field(type => String)
    organizations_url: string
    @Field(type => String)
    repos_url: string
    @Field(type => String)
    received_events_url: string
    @Field(type => String)
    type: string
    @Field(type => Number)
    score: number
    @Field(type => String)
    following_url: string
    @Field(type => String)
    gists_url: string
    @Field(type => String)
    starred_url: string
    @Field(type => String)
    events_url: string
    @Field(type => Boolean)
    site_admin: boolean
}

@ObjectType()
export class SearchResultCode {
    @Field(type => String)
    name: string
    @Field(type => String)
    path: string
    @Field(type => String)
    sha: string
    @Field(type => String)
    url: string
    @Field(type => String)
    git_url: string
    @Field(type => String)
    html_url: string
    @Field(type => Repository)
    repository: Repository
    @Field(type => Number)
    score: number
}

@ObjectType()
export class SearchResultIssue {
    @Field(type => String)
    url: string
    @Field(type => String)
    repository_url: string
    @Field(type => String)
    labels_url: string
    @Field(type => String)
    comments_url: string
    @Field(type => String)
    events_url: string
    @Field(type => String)
    html_url: string
    @Field(type => Number)
    id: number
    @Field(type => String)
    node_id: string
    @Field(type => Number)
    number: number
    @Field(type => String, {nullable: true})
    title: string
    @Field(type => SearchResultUser, {nullable: true})
    user: SearchResultUser
    labels: {
        id: number
        node_id: string
        url: string
        name: string
        color: string
        [k: string]: unknown
    }[]
    @Field(type => Number, {nullable: true})
    state: string
    @Field(type => String)
    assignee: string
    milestone: {
        url: string
        html_url: string
        labels_url: string
        id: number
        node_id: string
        number: number
        state: string
        title: string
        description: string
        creator: {
            login: string
            id: number
            node_id: string
            avatar_url: string
            gravatar_id: string
            url: string
            html_url: string
            followers_url: string
            following_url: string
            gists_url: string
            starred_url: string
            subscriptions_url: string
            organizations_url: string
            repos_url: string
            events_url: string
            received_events_url: string
            type: string
            site_admin: boolean
            [k: string]: unknown
        }
        open_issues: number
        closed_issues: number
        created_at: string
        updated_at: string
        closed_at: string
        due_on: string
        [k: string]: unknown
    }
    @Field(type => Number)
    comments: number
    @Field(type => String)
    created_at: string
    @Field(type => String)
    updated_at: string
    @Field(type => String)
    closed_at: string
    pull_request: {
        url: string
        html_url: string
        diff_url: string
        patch_url: string
    }
    @Field(type => String)
    body: string
    @Field(type => Number)
    score: number
    @Field(type => Boolean)
    locked: boolean
    @Field(type => String)
    author_association: string
}



export interface SearchRequest {
    q: string;
    accept?: string;
    sort?: string;
    order?: SearchRequestOrder;
    per_page?: number;
    page?:number;
    limit?:number;
}

// export type SearchRequestSort = 'follwers' | 'repositories' | 'joined';
export type SearchRequestOrder = 'asc' | 'desc';
export type SearchRequestTopic = 'code'
    | 'commits' | 'issues'
    | 'topics' | 'users'
    | 'labels' | 'repositories';
