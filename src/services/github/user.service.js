import axios from 'axios'

export default class userService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://geekiam.io/.netlify/functions',
        })
    }

    async getUserDetail(username) {
        return this.instance({
            method: 'GET',
            url: `/userservice?name=${username}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    }
}
