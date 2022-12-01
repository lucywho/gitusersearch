import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import { DataType, fetchData } from "../data-type"
import UserInfo from "./UserInfo"
import { useEffect, useState } from "react"

export default function App() {
    const [data, setData] = useState<DataType | null>(null)
    const [userName, setUserName] = useState<string>("")

    useEffect(() => {
        fetchData().then((d) => setData(d[0]))
    }, [])

    function handleSubmit(user: string): string {
        setUserName(user)

        return userName
    }

    if (userName) {
        console.log("userName: ", userName)
    }

    return (
        <div className="app">
            <div className="wrapper">
                <CardHeader />
                <SearchBar handleSubmit={handleSubmit} />
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
