import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.post('/user/create', async(req,res)=>{
    const name = req.body.name
    console.log(name);
    const user = await prisma.user.create({
        data:{
            name: name
        }
    })
    res.status(201).json({
        msg:'user created',
        user
    })
})
app.get('/user',async(req,res)=>{
    const users = await prisma.user.findMany()
    res.status(200).json({users})
})

app.get('/user/profile',async(req,res)=>{
    const profile = await prisma.profile.findMany({
        select:{
            user:true
        }
    })
    res.status(200).json({profile})
})
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