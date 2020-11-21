import fetch from 'node-fetch'

export default class UserService {
    constructor() {}

    async getUserDetail(username) {
        let user = await fetch(
            `/.netlify/functions/author-detail?name=${username}`
        )
        return await user.json()
    }
}
