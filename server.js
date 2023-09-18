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

app.get(`/api/collections/:collectionName/:itemName`, async (req, res) => {
  let itemName = req.params.itemName
  const item = await prisma.items.findFirst({
    where: {
      imageName1: {
        equals: itemName
      }}
    })
    item.imageUrl1 = await getObjectSignedUrl(item.imageName1)
    item.imageUrl2 = await getObjectSignedUrl(item.imageName2)
  res.send(item)
})

app.get(`/api/collections/:collectionName`, async (req, res) => {
  let collectionName = req.params.collectionName
  const items = await prisma.items.findMany({
    where: {
      collection: {
        equals: collectionName
      }}
  })
  for (let item of items) {
    item.imageUrl1 = await getObjectSignedUrl(item.imageName1)
    item.imageUrl2 = await getObjectSignedUrl(item.imageName2)
  }
  res.send(items)
})


app.get(`/api/collections/findall`, async (req, res) => {
  const items = await prisma.items.findMany({})
  res.send(items)
})

app.post('/api/items', upload.array('image',2), async (req, res) => {
  const files = req.files
  const file1 = files[0]
  const file2 = files[1]
  console.log("This is files1: " + file1)
  const title = req.body.title
  const description = req.body.description
  const collection = req.body.collection
  const link1 = req.body.link1
  const link2 = req.body.link2
  const imageName1 = generateFileName()
  const imageName2 = generateFileName()

  const fileBuffer1 = await sharp(file1.buffer)
    .toBuffer()
  await uploadFile(fileBuffer1, imageName1, file1.mimetype)

  const fileBuffer2 = await sharp(file2.buffer)
    .toBuffer()
  await uploadFile(fileBuffer2, imageName2, file2.mimetype)

  const item = await prisma.items.create({
    data: {
      title,
      description,
      collection,
      imageName1,
      imageName2,
      link1,
      link2
    }
  })
  
  res.status(201).send(item)
})


app.delete("/api/collections/:id", async (req, res) => {
  const id = req.params.id

  const item = await prisma.items.findUnique({where: {id}}) 

  await deleteFile(item.imageName)

  await prisma.items.delete({where: {id: item.id}})
  res.send(item)
})


app.post('/api/collections', upload.single('image'), async (req, res) => {
  const file = req.file
  const title = req.body.title
  const imageName = generateFileName()

  const fileBuffer = await sharp(file.buffer)
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