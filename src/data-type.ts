import { testData } from "./testData"

export type DataType = {
    name: string
    login: string | null
    avatar_url?: string | null
    created_at?: string | null
    bio?: string | null
    public_repos?: number | null
    followers?: number | null
    following?: number | null
    location?: string | null
    blog?: string | null
    twitter_username?: string | null
    html_url?: string | null
}

export const fetchData = () => {
    return Promise.resolve(testData)
}
