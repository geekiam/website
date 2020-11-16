// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const Zk = require('@nuid/zk')
const apiRootUrl = 'https://auth.nuid.io'

const handler = async function (event, context) {
    let api_key = process.env.NUID_API_KEY

    if (!context.clientContext && !context.clientContext.identity) {
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({
                msg: 'No identity instance detected. Did you enable it?',
            }),
        }
    }
    const { identity, user } = context.clientContext
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ identity, user, msg: data.value }),
        }
    } catch (error) {
        // output to netlify function log
        console.log(error)
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({ msg: error.message }),
        }
    }
}

module.exports = { handler }
