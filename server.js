import express from 'express'

import multer from 'multer'
import sharp from 'sharp'
import crypto from 'crypto'

import { PrismaClient } from '@prisma/client'
import { uploadFile, deleteFile, getObjectSignedUrl } from './s3.js'

const app = express()
const prisma = new PrismaClient()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

app.get("/api/items", async (req, res) => {
  const items = await prisma.items.findMany()

  for (let item of items) {
    item.imageUrl = await getObjectSignedUrl(item.imageName)
  }
  res.send(items)
})


app.post('/api/items', upload.single('image'), async (req, res) => {
  const file = req.file
  const title = req.body.title
  const description = req.body.description
  const imageName = generateFileName()

  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer()

  await uploadFile(fileBuffer, imageName, file.mimetype)

  const item = await prisma.items.create({
    data: {
      title,
      description,
      imageName
    }
  })
  
  res.status(201).send(item)


})

app.delete("/api/items/:id", async (req, res) => {
  const id = +req.params.id
  const post = await prisma.posts.findUnique({where: {id}}) 

  await deleteFile(post.imageName)

  await prisma.posts.delete({where: {id: post.id}})
  res.send(post)
})


app.post('/api/collections', upload.single('image'), async (req, res) => {
  const file = req.file
  const title = req.body.title
  const imageName = generateFileName()

  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer()

  await uploadFile(fileBuffer, imageName, file.mimetype)

  const collection = await prisma.collections.create({
    data: {
      title,
      imageName
    }
  })

  res.status(201).send(collection)


})

app.get("/api/collections", async (req, res) => {
  const collections = await prisma.collections.findMany()

  for (let collection of collections) {
    collection.imageUrl = await getObjectSignedUrl(collection.imageName)
    
  }
  
  res.send(collections)
})


app.listen(3001, () => console.log("listening on port 3001"))