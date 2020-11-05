const fetch = require('node-fetch')

exports.handler = (event, context, callback) => {
    const github_api_url = `https://api.github.com/users`

    if (event.httpMethod === 'GET') {
        getUserDetail(event.queryStringParameters.name)
    }

    function getUserDetail(username) {
        fetch(`${github_api_url}/${username}`, {
            headers: {
                Authorization: `token ${process.env.GRIDSOME_GITHUB_TOKEN}`,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                let details = {
                    avatar: response.avatar_url,
                    profile_url: response.html_url,
                    fullName: response.name,
                    followers: response.followers,
                    biography: response.bio,
                    repositories: response.public_repos,
                    location: response.location,
                    blog_link: response.blog,
                    twitter_username: response.twitter_username,
                }
                send(details)
            })
    }

    function send(body) {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body),
        })
    }
}
