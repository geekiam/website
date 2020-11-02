import axios from 'axios'

export default class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.github.com',
        })
    }

    async getUserDetail(username) {
        return this.instance({
            method: 'GET',
            url: `/users/${username}`,
            headers: {
                Authorization: `token ${process.env.GRIDSOME_GITHUB_TOKEN}`,
            },
        })
    }
}
