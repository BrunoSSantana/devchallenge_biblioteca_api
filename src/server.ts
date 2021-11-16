import express from 'express'
import 'reflect-metadata'
import { routes } from './routes'
import './data'

const server = express()

server.use(routes)

server.listen(3003, () => console.log('🚀🔥'))