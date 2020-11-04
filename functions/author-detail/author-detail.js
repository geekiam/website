const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
    try {
        const userName = event.queryStringParameters.name
        const response = await fetch(
            `https://api.github.com/users/${userName}`,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `token ${process.env.GRIDSOME_GITHUB_TOKEN}`,
                },
            }
        )
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText }
        }
        const data = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify(data),
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
