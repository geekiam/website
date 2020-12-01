/* Import faunaDB sdk */
const process = require('process')

const { query, Client } = require('faunadb')

const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})
const collection = require('./collection')

exports.handler = async function (event) {
    const data = JSON.parse(event.body)
    const { id } = event

    return client
        .query(
            query.Update(
                query.Ref(query.Collection(`${collection.name}`), id),
                {
                    data,
                }
            )
        )
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}
