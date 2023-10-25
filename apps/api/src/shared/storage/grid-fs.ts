import { GridFSBucket, MongoClient } from 'mongodb'
import { connection } from 'mongoose'
import { createReadStream } from 'node:fs'

const client =  connection.getClient()

const db = client.db('storage')

const storage = new GridFSBucket(db, { bucketName: 'user' })

