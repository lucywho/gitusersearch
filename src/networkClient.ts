import testData from "./testData.json"

export async function fetchGitHubData(userName: string) {
    //TODO put this back for live version
    //const results = await fetch(`https://api.github.com/users/${userName}`)

    // if (results.status === 200) {
    //     return results.json()
    // }

    //TODO delete this for live version
    const results = testData

    return results
}
