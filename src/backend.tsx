import { fetchGitHubData } from "./networkClient"
import { GitHubUser } from "./data-type"

export async function fetchData(userInput: string) {
    const json = await fetchGitHubData(userInput)

    //TODO: clean up date string

    if (!json) {
        return
    }

    const newUser: GitHubUser = {
        name: json.name,
        login: json.login,
        avatar_url: json.avatar_url,
        created_at: json.created_at,
        bio: json.bio,
        public_repos: json.public_repos,
        followers: json.followers,
        following: json.following,
        location: json.location,
        blog: json.blog,
        twitter_username: json.twitter_username,
        html_url: json.html_url,
    }

    return newUser
}
