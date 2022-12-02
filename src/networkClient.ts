export async function fetchGitHubData(userName: string) {
    const results = await fetch(`https://api.github.com/users/${userName}`)
    console.log("results: ", results)
    if (results.status === 200) {
        return results.json()
    }
    return
}
