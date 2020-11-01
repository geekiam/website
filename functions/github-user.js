import userService from './user.service'

exports.handler = async (event) => {
    const username = event.queryStringParameters.name
    let service = new userService()
    return {
        statusCode: 200,
        body: service.getUserDetail(username),
    }
}
