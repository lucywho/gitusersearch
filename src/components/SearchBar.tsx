import React from "react"

// type Props = {
//     userName: string
//     handleSubmit: (args: string) => string
// }

export default function SearchBar() {
    let searchResult = ""
    return (
        <div className="search-bar">
            <p className="magnifier icon">Q</p>
            <form
                className="search-username"
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault()

                    //props.handleSubmit(searchResult)
                }}
            >
                <input
                    className="user-input"
                    type="text"
                    onChange={(event) => (searchResult = event.target.value)}
                    placeholder="Search GitHub username…"
                ></input>

                <div className="error-message">error here</div>

                <button className="search">Search</button>
            </form>
        </div>
    )
}
