import { PrismaClient } from '@prisma/client'
import {Request, Response} from 'express'
const prisma = new PrismaClient()

export const createUser = async(req:Request,res:Response)=>{
    const name = req.body?.name
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
}

export const getAllUser = async(req:Request , res:Response)=>{
    const users = await prisma.user.findMany()
    res.status(200).json({users})
}

export const createUserProfile = async(req:Request,res:Response)=>{
    const {username , bio , userId}= req.body
    const profile = await prisma.profile.create({
        data:{
            userId:userId,
            username: username,
            bio: bio
        }
    })
    res.status(201).json({
        msg:"profile created successfully",
        profile
    })
}

export const getAllUserProfile = async(req:Request,res:Response)=>{
    const profile = await prisma.profile.findMany({
        select:{
            user:true
        }
    })
    res.status(200).json({profile})
}