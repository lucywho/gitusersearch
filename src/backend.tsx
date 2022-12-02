import { fetchGitHubData } from "./networkClient"
import { GitHubUser } from "./data-type"

export async function fetchData(userInput: string) {
    //gets data from network client
    const returnData = await fetchGitHubData(userInput)

    //transform json into object
    const newUser: GitHubUser = {
        name: "lucy",
        login: "lucy",
        avatar_url: "https://avatars.githubusercontent.com/u/30469302?v=4",
        created_at: "lucy",
        bio: "lucy",
        public_repos: 1,
        followers: 3,
        following: 3,
        location: "lucy",
        blog: "lucy",
        twitter_username: "lucy",
        html_url: "lucy",
    }

    //return to handleSubmit in App
    return newUser
}
