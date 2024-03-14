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

export const createCategoryOnTweets = async(req:Request, res:Response)=>{
    const {tweetId,categoryId,assignedBy} = req.body
    const cot = await prisma.categoriesOnTweets.create({
        data:{
            tweetId:tweetId,
            categoryId:categoryId,
            assignedBy:assignedBy
        }
    })
    res.status(201).json({
        msg:'created',cot
    })
}

export const getAllCategoryOnTweet = async (req: Request, res: Response) => {
    const cot = await prisma.categoriesOnTweets.findMany()
    res.status(201).json({
      cot
    })
  }

export const combinedTweet = async(req:Request ,res:Response)=>{
    const {title , assignedBy , category} = req.body
   
  const tweet = await prisma.tweet.create({
    data: {
      title: title,
      categories: {
        create: [
          {
            assignedBy: assignedBy,
            assignedAt: new Date(),
            category: {
              create: {
                name: category,
              },
            },
          },
        ],
      },
    },
  })

  res.status(201).json({
    msg:"combined tweet",
    tweet
  })
}

export const assignCategories = async(req:Request , res:Response) =>{
    const {title , assignedBy} = req.body
  try {
     const tweet =  await prisma.tweet.create({
      data: {
        title: title,
        categories: {
          create: [
            {
              assignedBy:assignedBy,
              assignedAt: new Date(),
              category: {
                connect: {
                  id:1,
                },
              },
            },
            {
              assignedBy: assignedBy,
              assignedAt: new Date(),
              category: {
                connect: {
                  id:2,
                },
              },
            },
          ],
        },
      },
    })
    res.status(201).json({
      msg:'created tweet',
      tweet
    })
  } catch (error:any) {
    console.log(error.message);
  }
}