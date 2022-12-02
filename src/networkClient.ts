import testData from "./testData.json"

export function fetchGitHubData(userName: string) {
    // console.log("username: ", userName)
    // console.log(testData)
    //real call to github goes here
    return Promise.resolve(testData)
}
