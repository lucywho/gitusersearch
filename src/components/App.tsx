import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import testData from "../testData"
import UserInfo from "./UserInfo"
import { useState } from "react"

export default function App() {
    //const data = { testData }
    const [userName, setUserName] = useState("")

    function handleSubmit(user: string): string {
        setUserName(user)
        console.log(userName)
        return userName
    }

    return (
        <div className="app">
            <div className="wrapper">
                <CardHeader />
                <SearchBar userName={userName} handleSubmit={handleSubmit} />
                <UserInfo />
            </div>
        </div>
    )
}
