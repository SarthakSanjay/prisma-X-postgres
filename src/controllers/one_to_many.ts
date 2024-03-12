import { PrismaClient } from '@prisma/client'
import {Request, Response} from 'express'
const prisma = new PrismaClient()

export const createUser2 = async(req:Request,res:Response) =>{
    const name = req.body.name
    const user = await prisma.user2.create({
        data:{
            name:name
        }
    })
    res.status(201).json({
        msg:'created',
        user
    })
}

export const createPost = async(req:Request , res:Response)=>{
    const {text, authorId} = req.body
    const post = await prisma.post.create({
        data:{
            text:text,
            authorId:authorId
        }
    })
    res.status(201).json({
        mag:"created post",
        post
    })
}