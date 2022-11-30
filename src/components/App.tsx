import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import { testData } from "../testData"
import { DataType } from "../data-type"
import UserInfo from "./UserInfo"

export default function App() {
    const data: DataType = testData[0]
    console.log("data: ", data.login)

    // const [userName, setUserName] = useState("")

    // function handleSubmit(user: string): string {
    //     setUserName(user)
    //     console.log(userName)
    //     return userName
    // }

    return (
        <div className="app">
            <div className="wrapper">
                <CardHeader />
                {/* <SearchBar userName={userName} handleSubmit={handleSubmit} /> */}
                <SearchBar />
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
            </div>
        </div>
    )
}
