const createRoute = require('./create')
const deleteRoute = require('./delete')
const readRoute = require('./read')
const readAllRoute = require('./read-all')
const updateRoute = require('./update')
const collection = require('./collection')

exports.handler = async function (event, context) {
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
    const segments = path.split('/').filter(Boolean)

    switch (event.httpMethod) {
        case 'GET':
            if (segments.length === 0) {
                return readAllRoute.handler(event, context)
            }
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return readRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `too many segments in GET request, must be either /.netlify/functions/${collection.name} or /.netlify/functions/${collection.name}/123456`,
            }

        case 'POST':
            return createRoute.handler(event, context)
        case 'PUT':
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return updateRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `invalid segments in POST request, must be /.netlify/functions/${collection.name}/123456`,
            }

        case 'DELETE':
            if (segments.length === 1) {
                const [id] = segments
                event.id = id
                return deleteRoute.handler(event, context)
            }
            return {
                statusCode: 500,
                body: `invalid segments in DELETE request, must be /.netlify/functions/${collection.name}/123456`,
            }
        default:
            return {
                statusCode: 500,
                body:
                    'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE',
            }
    }
}
