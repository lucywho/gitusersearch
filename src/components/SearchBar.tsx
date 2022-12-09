import { useState } from "react"
import { ChangeEvent, FormEvent } from "react"
import SearchIcon from "../assets/magnifier.png"

type Props = {
    handleSubmit: (userInput: string) => void
    errorMessage: string | undefined | null
    darkMode: Boolean
}

export default function SearchBar({
    handleSubmit,
    errorMessage,
    darkMode,
}: Props) {
    const [userInput, setUserInput] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!userInput) {
            return null
        }
        handleSubmit(userInput)
        setUserInput("")
    }

    return (
        <div className={`search-bar ${darkMode ? "dark" : ""}`}>
            <img
                className="magnifier icon"
                src={SearchIcon}
                alt="magnifying glass"
            ></img>
            <form className="search-username" onSubmit={handleFormSubmit}>
                <input
                    className={`user-input ${darkMode ? "dark" : ""}`}
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    placeholder="Search GitHub username…"
                ></input>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}

                <button className="search">Search</button>
            </form>
        </div>
    )
}
