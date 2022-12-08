//import testData from "./testData.json"

export async function fetchGitHubData(userName: string) {
    //TODO comment out for testing
    const results = await fetch(`https://api.github.com/users/${userName}`)

    if (results.status === 200) {
        return results.json()
    }

    //TODO delete this when using live data
    // const results = testData

    return results
}
