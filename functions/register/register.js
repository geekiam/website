const fetch = require('node-fetch')
const Zk = require('@nuid/zk')
const apiRootUrl = 'https://auth.nuid.io'
const process = require('process')

exports.handler = async function (event, context) {
    const { identity, user } = context.clientContext
    const { username, password } = JSON.parse(event.body)
    return {
        statusCode: 200,
        body: JSON.stringify({
            identity,
            user,
            msg: await register(username, password),
        }),
    }

    async function register(username, password) {
        return `${username} - ${password} registration successful!`
    }

    async function getHeader() {
        return {
            'X-API-Key': process.env.NUID_API_KEY,
            'Content-Type': 'application/json',
        }
    }
}
