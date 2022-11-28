export default function SearchBar() {
    return (
        <div className="search-bar">
            <p className="magnifier icon">Q</p>
            <input
                className="search-username"
                type="text"
                placeholder="Search GitHub username…"
            ></input>
            <div className="error-message">error here</div>

            <button className="search" onClick={() => {}}>
                Search
            </button>
        </div>
    )
}
