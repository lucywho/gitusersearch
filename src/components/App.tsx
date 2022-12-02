import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import { DataType, fetchData } from "../data-type"
import UserInfo from "./UserInfo"
import { useEffect, useState } from "react"
import { testData } from "../testData"

export default function App() {
    const [data, setData] = useState<DataType | null>()
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(
        ""
    )

    // useEffect(() => {
    //     fetchData().then((d) => setData(d[0]))
    // }, [])

    function handleSubmit(userInput: string): DataType[] {
        const gitUserInfo = testData.filter(function (obj) {
            return obj.login === userInput
        })

        gitUserInfo[0] === undefined
            ? setErrorMessage("No results")
            : setErrorMessage(null)

        setData(gitUserInfo[0])

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
