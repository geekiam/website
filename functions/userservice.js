const axios = require('axios')

exports.handler = (event, context, callback) => {
    const userName = event.queryStringParameters.name
    const API_ENDPOINT = 'https://api.github.com'
    const send = (body) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body),
        })
    }
    const getUserDetail = () => {
        let url = `${API_ENDPOINT}/users/${userName}`
        console.log(url)
        axios({
            method: 'GET',
            url: url,
            headers: {
                Authorization: `token ${process.env.GRIDSOME_GITHUB_TOKEN}`,
            },
        })
            .then((res) => send(res))
            .catch((err) => send(err))
    }

    // Make sure method is GET
    if (event.httpMethod === 'GET') {
        // Run
        getUserDetail()
    }
}

/*exports.handler = async (event, context) => {
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
}*/
