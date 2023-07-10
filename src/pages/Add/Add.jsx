import AddItemForm from '../../components/AddItemForm/AddItemForm';

import AWS from 'aws-sdk';
import { PrismaClient } from '@prisma/client';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';


 
const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion

})

// const command = new PutObjectCommand()
// await s3.send(command)

export default function Add() {


  

    return (
      <>
      
        <h2>This is the Add page</h2>
        <AddItemForm />


      </>
    );
  }