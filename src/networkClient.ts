import testData from "./testData.json"

export async function fetchGitHubData(userName: string) {
    //TODO put this back for live version
    //const results = await fetch(`https://api.github.com/users/${userName}`)

    //TODO delete this for live version
    const results = testData

    //TODO put this back for live version
    // if (results.status === 200) {
    //     return results.json()
    // }
    return results
}
