import { PrismaClient } from '@prisma/client'
import express from 'express'
import { createUser, createUserProfile, getAllUser, getAllUserProfile } from './controllers/one_to_one'
import { createPost, createUser2, getAllPost, getAllUser2 } from './controllers/one_to_many'
import { assignCategories, combinedTweet, createCategory, createCategoryOnTweets, createTweet, getAllCategory, getAllCategoryOnTweet, getAllTweets } from './controllers/many_to_many'
import { createClient, createComment, getAllClients, getAllComment, getAllCommentOfComments } from './controllers/self'

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
app.get('/user2',getAllUser2)
app.get('/post',getAllPost)

//many to many relationships
app.post('/tweet/combo', combinedTweet)
app.post('/tweet/assign', assignCategories)
app.post('/tweet',createTweet)
app.get('/tweet',getAllTweets)
app.post('/ctg',createCategory)
app.get('/ctg',getAllCategory)
app.post('/cot',createCategoryOnTweets)
app.get('/cot',getAllCategoryOnTweet)

//self relations
app.post('/client',createClient)
app.get('/client',getAllClients)
//comment using self relations
app.post('/comment', createComment)
app.get('/comment',getAllComment)
app.get('/commentByID',getAllCommentOfComments)
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