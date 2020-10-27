import axios from 'axios'

export default class userService {
    constructor() {}

    async getUserDetail(username) {
        return await axios.get(`https://api.github.com/users/${username}`)
    }
}
