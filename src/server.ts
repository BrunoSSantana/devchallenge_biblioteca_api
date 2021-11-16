import express from 'express'
import 'reflect-metadata'
import cors from 'cors'
import { routes } from './routes'
import './data'

const server = express()
server.use(cors())

server.use(express.json())

server.use('/api',routes)

server.listen(3003, () => console.log('🚀🔥'))