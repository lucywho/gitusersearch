import { useState } from "react"
import { ChangeEvent, FormEvent } from "react"

type Props = {
    handleSubmit: (userInput: string) => void
    errorMessage: string | undefined | null
}

export default function SearchBar({ handleSubmit, errorMessage }: Props) {
    const [userInput, setUserInput] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleSubmit(userInput)
        setUserInput("")
    }

    return (
        <div className="search-bar">
            <img className="magnifier icon" src="" alt="magnifying glass"></img>
            <form className="search-username" onSubmit={handleFormSubmit}>
                <input
                    className="user-input"
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
