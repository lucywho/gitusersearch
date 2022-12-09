import React, { useEffect, useState } from "react"
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
    const [darkMode, toggleDarkMode] = useState<Boolean>(false)

    useEffect(() => {
        const userPref = window.matchMedia("(prefers-color-scheme: dark)")
        console.log(userPref.matches)
        if (userPref.matches) {
            toggleDarkMode(true)
        }
    }, [])

    function handleSubmit(userInput: string) {
        fetchData(userInput).then((res) => {
            const gitUserInfo = res
            gitUserInfo === undefined
                ? setErrorMessage("No results")
                : setErrorMessage(null)

            setData(gitUserInfo)
        })
    }

    const toggleMode = () => toggleDarkMode(!darkMode)

    return (
        <div className={`app ${darkMode ? "dark" : ""}`}>
            <div className="wrapper">
                <CardHeader darkMode={darkMode} toggleMode={toggleMode} />
                <SearchBar
                    handleSubmit={handleSubmit}
                    darkMode={darkMode}
                    errorMessage={errorMessage}
                />
                {data && (
                    <UserInfo
                        darkMode={darkMode}
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
