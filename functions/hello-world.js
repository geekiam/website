exports.handler = async (event) => {
    const subject = event.path || 'World'
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    }
}
