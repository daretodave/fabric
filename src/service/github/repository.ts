import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Repository {

    @Field()
    id: number
    @Field()
    node_id: string
    @Field()
    name: string
    @Field()
    full_name: string
    owner: {
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
    }
    @Field()
    private: boolean
    @Field()
    html_url: string
    @Field({nullable: true, defaultValue: ''})
    description: string
    @Field()
    fork: boolean
    @Field()
    url: string
    @Field()
    archive_url: string
    @Field()
    assignees_url: string
    @Field()
    blobs_url: string
    @Field()
    branches_url: string
    @Field()
    collaborators_url: string
    @Field()
    comments_url: string
    @Field()
    commits_url: string
    @Field()
    compare_url: string
    @Field()
    contents_url: string
    @Field()
    contributors_url: string
    @Field()
    deployments_url: string
    @Field()
    downloads_url: string
    @Field()
    events_url: string
    @Field()
    forks_url: string
    @Field()
    git_commits_url: string
    @Field()
    git_refs_url: string
    @Field()
    git_tags_url: string
    @Field()
    git_url: string
    @Field()
    issue_comment_url: string
    @Field()
    issue_events_url: string
    @Field()
    issues_url: string
    @Field()
    keys_url: string
    @Field()
    labels_url: string
    @Field()
    languages_url: string
    @Field()
    merges_url: string
    @Field()
    milestones_url: string
    @Field()
    notifications_url: string
    @Field()
    pulls_url: string
    @Field()
    releases_url: string
    @Field()
    ssh_url: string
    @Field()
    stargazers_url: string
    @Field()
    statuses_url: string
    @Field()
    subscribers_url: string
    @Field()
    subscription_url: string
    @Field()
    tags_url: string
    teams_url: string
    @Field()
    trees_url: string
    @Field()
    clone_url: string
    @Field()
    mirror_url: string
    @Field()
    hooks_url: string
    @Field()
    svn_url: string
    @Field()
    homepage: string
    @Field()
    language: string
    @Field()
    forks_count: number
    @Field()
    stargazers_count: number
    @Field()
    watchers_count: number
    @Field()
    size: number
    @Field()
    default_branch: string
    @Field()
    open_issues_count: number
    @Field()
    is_template: boolean
    @Field(returns => [String])
    topics: string[]
    @Field()
    has_issues: boolean
    @Field()
    has_projects: boolean
    @Field()
    has_wiki: boolean
    @Field()
    has_pages: boolean
    @Field()
    has_downloads: boolean
    @Field()
    archived: boolean
    @Field()
    disabled: boolean
    @Field()
    visibility: string
    @Field()
    pushed_at: string
    @Field()
    created_at: string
    @Field()
    updated_at: string
    permissions: {
        admin: boolean
        push: boolean
        pull: boolean
    }
    template_repository: {
        id: number
        node_id: string
        name: string
        full_name: string
        owner: {
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
        }
        private: boolean
        html_url: string
        description: string
        fork: boolean
        url: string
        archive_url: string
        assignees_url: string
        blobs_url: string
        branches_url: string
        collaborators_url: string
        comments_url: string
        commits_url: string
        compare_url: string
        contents_url: string
        contributors_url: string
        deployments_url: string
        downloads_url: string
        events_url: string
        forks_url: string
        git_commits_url: string
        git_refs_url: string
        git_tags_url: string
        git_url: string
        issue_comment_url: string
        issue_events_url: string
        issues_url: string
        keys_url: string
        labels_url: string
        languages_url: string
        merges_url: string
        milestones_url: string
        notifications_url: string
        pulls_url: string
        releases_url: string
        ssh_url: string
        stargazers_url: string
        statuses_url: string
        subscribers_url: string
        subscription_url: string
        tags_url: string
        teams_url: string
        trees_url: string
        clone_url: string
        mirror_url: string
        hooks_url: string
        svn_url: string
        homepage: string
        language: string
        forks: number
        forks_count: number
        stargazers_count: number
        watchers_count: number
        watchers: number
        size: number
        default_branch: string
        open_issues: number
        open_issues_count: number
        is_template: boolean
        license: {
            key: string
            name: string
            url: string
            spdx_id: string
            node_id: string
            html_url: string
            [k: string]: unknown
        }
        topics: string[]
        has_issues: boolean
        has_projects: boolean
        has_wiki: boolean
        has_pages: boolean
        has_downloads: boolean
        archived: boolean
        disabled: boolean
        visibility: string
        pushed_at: string
        created_at: string
        updated_at: string
        permissions: {
            admin: boolean
            push: boolean
            pull: boolean
        }
        allow_rebase_merge: boolean
        temp_clone_token: string
        allow_squash_merge: boolean
        delete_branch_on_merge: boolean
        allow_merge_commit: boolean
        subscribers_count: number
        network_count: number
    }
}
