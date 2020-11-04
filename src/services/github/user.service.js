import fetch from 'node-fetch'

export default class userService {
    constructor() {}

    async getUserDetail(username) {
        fetch(`/.netlify/functions/author-detail?name=${username}`)
            .then((res) => {
                console.log(res)
            })
            .then((res) => {
                return res
            })
    }
}
