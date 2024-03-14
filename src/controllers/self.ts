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
