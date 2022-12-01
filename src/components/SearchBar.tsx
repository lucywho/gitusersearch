import { useState } from "react"
import { ChangeEvent, FormEvent } from "react"

type Props = {
    handleSubmit: (searchResult: string) => void
}

export default function SearchBar({ handleSubmit }: Props) {
    const [searchResult, setSearchResult] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchResult(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleSubmit(searchResult)
        setSearchResult("")
    }

    return (
        <div className="search-bar">
            <p className="magnifier icon">Q</p>
            <form className="search-username" onSubmit={handleFormSubmit}>
                <input
                    className="user-input"
                    type="text"
                    value={searchResult}
                    onChange={handleChange}
                    placeholder="Search GitHub username…"
                ></input>

                <div className="error-message">error here</div>

                <button className="search">Search</button>
            </form>
        </div>
    )
}
