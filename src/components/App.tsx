import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import testData from "../testData"
import UserInfo from "./UserInfo"
//import { useState } from "react"

export default function App() {
    const data = testData[0]
    console.log(data)
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
                <UserInfo props={data} />
            </div>
        </div>
    )
}
