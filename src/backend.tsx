import { GitHubUser } from "./data-type"
import { fetchGitHubData } from "./networkClient"

function cleanUpDate(created: string) {
    let date = new Date(created)
    let month = date.toLocaleDateString("default", { month: "short" })
    return `${date.getDate()} ${month} ${date.getFullYear()}`
}

export async function fetchData(userInput: string) {
    const json = await fetchGitHubData(userInput)

    if (!json) {
        return
    }

    const cleanDate = cleanUpDate(json.created_at)

    const newUser: GitHubUser = {
        name: json.name,
        login: json.login,
        avatar_url: json.avatar_url,
        created_at: cleanDate,
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
