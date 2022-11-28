import CardHeader from "./CardHeader"
import SearchBar from "./SearchBar"
import UserInfo from "./UserInfo"

export default function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <CardHeader />
                <SearchBar />
                <UserInfo />
            </div>
        </div>
    )
}
