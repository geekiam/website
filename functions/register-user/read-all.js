/* Import faunaDB sdk */
const process = require('process')

const { query, Client } = require('faunadb')
const collection = require('./collection')
const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async function () {
    return client
        .query(query.Paginate(query.Match(query.Index(collection.index))))
        .then((response) => {
            const itemRefs = response.data
            // create new query out of item refs. http://bit.ly/2LG3MLg
            const getAllItemsDataQuery = itemRefs.map((ref) => {
                return query.Get(ref)
            })
            // then query the refs
            return client.query(getAllItemsDataQuery).then((ret) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify(ret),
                }
            })
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error),
            }
        })
}
