import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

export const createTweet = async (req: Request, res: Response) => {
  const title = req.body.title
  const tweet = await prisma.tweet.create({
    data:{
        title:title
    }
  })
  res.status(201).json({
    msg:'tweet created',
    tweet
  })
}
export const getAllTweets = async (req: Request, res: Response) => {
  const tweet = await prisma.tweet.findMany()
  res.status(201).json({
    tweet
  })
}

export const createCategory = async(req:Request , res:Response) =>{
    const name = req.body.name
    const category = await prisma.category.create({
        data:{
            name:name
        }
    })
    res.status(201).json({
        msg:"category created",
        category
    })
}

export const getAllCategory = async (req: Request, res: Response) => {
    const category = await prisma.category.findMany()
    res.status(201).json({
      category
    })
  }