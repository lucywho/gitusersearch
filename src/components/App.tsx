import { useState } from "react"
import UserInfo from "./UserInfo"
import SearchBar from "./SearchBar"
import CardHeader from "./CardHeader"
import { fetchData } from "../backend"
import { GitHubUser } from "../data-type"

export default function App() {
    const [data, setData] = useState<GitHubUser | null>()
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(
        ""
    )

    async function handleSubmit(userInput: string) {
        const gitUserInfo = await fetchData(userInput)
            .then((res) => {
                const gitUserInfo = res
                gitUserInfo === undefined
                    ? setErrorMessage("No results")
                    : setErrorMessage(null)

                setData(gitUserInfo)
                return gitUserInfo
            })
            .then((user) => {
                return user
            })

        return gitUserInfo
    }

    return (
        <div className="app">
            <div className="wrapper">
                <CardHeader />
                <SearchBar
                    handleSubmit={handleSubmit}
                    errorMessage={errorMessage}
                />
                {data && (
                    <UserInfo
                        name={data.name}
                        login={data.login}
                        avatar_url={data.avatar_url}
                        created_at={data.created_at}
                        bio={data.bio}
                        public_repos={data.public_repos}
                        followers={data.followers}
                        following={data.following}
                        location={data.location}
                        blog={data.blog}
                        twitter_username={data.twitter_username}
                        html_url={data.html_url}
                    />
                )}
            </div>
        </div>
    )
}
