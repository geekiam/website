const process = require('process')

const { query, Client } = require('faunadb')
const collection = require('./collection')

const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async (event) => {
    const data = JSON.parse(event.body)

    const item = {
        data,
    }

    return client
        .query(query.Create(query.Collection(collection.name), item))
        .then((response) => {
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        })
        .catch((error) => {
            console.log('error', error)
            /* Error! return the error with statusCode 400 */
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}
