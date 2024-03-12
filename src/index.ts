import { PrismaClient } from '@prisma/client'
import express from 'express'
import { createUser, createUserProfile, getAllUser, getAllUserProfile } from './one-to-one/one_to_one'
import { createPost, createUser2 } from './one-to-one/one_to_many'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

//one to one relationship
app.post('/user/create',createUser)
app.get('/user',getAllUser)
app.post('/user/profile',createUserProfile)
app.get('/user/profile',getAllUserProfile)

//one to many relationship
app.post('/user2/create',createUser2)
app.post('/user/post',createPost)

const startServer = () =>{
    try {

        app.listen(4000 , ()=>{
            console.log('start listining on port 4000');
        })
    } catch (error:any) {
        console.log(error.message)
    }
}

startServer()