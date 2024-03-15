import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const createClient = async(req:Request, res:Response)=>{
    const {name, successorId} = req.body
    const client = await prisma.client.create({
        data:{
            name:name,
            successorId:successorId
        }
    })
    res.status(201).json({
        msg:"client created",
        client
    })
}

export const getAllClients = async(req:Request, res:Response)=>{
    const clients = await prisma.client.findMany()
    res.status(200).json({clients})
}

export const createComment = async(req:Request ,res:Response)=>{
    const {text ,cId} = req.body
    const comment = await prisma.comment.create({
        data:{
            text:text,
            parentId:cId
        }
    })
    res.status(201).json({
        msg:"commented on comment",
        comment
    })
}

export const getAllCommentOfComments = async(req:Request,res:Response)=>{
    const commentId = req.body.commentId
    const comment = await prisma.comment.findFirst({
        where:{
            id:commentId
        },select:{
            children:true
        }
    })
    res.status(200).json({
        comment
    })
}
export const getAllComment = async(req:Request ,res:Response)=>{
    const comments = await prisma.comment.findMany()
    res.status(201).json({
        comments
    })
}