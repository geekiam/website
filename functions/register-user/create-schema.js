#!/usr/bin/env node
const process = require('process')
let collection = require('./collection')
/* bootstrap database in your FaunaDB account - use with `netlify dev:exec <path-to-this-file>` */
const { query, Client } = require('faunadb')

const createFaunaDB = function () {
    if (!process.env.FAUNADB_SERVER_SECRET) {
        console.log('Fauna Secret Environment variable does not exist.')
        console.log('Database cannot be created.')
    }
    console.log('Create the database!')
    console.log(`A collection with the name ${collection.name} will be created`)
    const client = new Client({
        secret: process.env.FAUNADB_SERVER_SECRET,
    })

    return client
        .query(query.CreateCollection({ name: collection.name }))
        .then(() => {
            console.log(`created ${collection.name} collection`)
            return client.query(
                query.CreateIndex({
                    name: collection.index,
                    source: query.Collection(collection.name),
                    active: true,
                })
            )
        })
        .catch((error) => {
            if (
                error.requestResult.statusCode === 400 &&
                error.message === 'instance not unique'
            ) {
                console.log('DB already exists')
            }
            throw error
        })
}

createFaunaDB()
