import fetch from 'node-fetch'

const API_ENDPOINT = 'https://api.github.com'

exports.handler = async (event, context) => {
    const userName = event.queryStringParameters.name || 'Worldn'

    return fetch(`${API_ENDPOINT}/users/${userName}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `token ${process.env.GRIDSOME_GITHUB_TOKEN}`,
        },
    })
        .then((response) => response.json())
        .then((data) => ({
            statusCode: 200,
            body: data,
        }))
        .catch((error) => ({ statusCode: 422, body: String(error) }))
}
