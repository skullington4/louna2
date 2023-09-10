
import { useEffect, useState } from 'react'
import axios from 'axios'
import CollectionCard from '../../components/CollectionCard/CollectionCard'
import { useNavigate } from 'react-router-dom'
import "./Collections.css"






export default function Collections() {

const [collections, setCollections] = useState([])
let navigate = useNavigate();

useEffect(() => {
  async function getCollections() {
    const result = await axios.get("/api/collections")
    setCollections(result.data)
  }
  getCollections()
}, [])
  

    return (
      <>
          <h1>Collections</h1>
          
          <div className="singleCollections">
            {collections.map(collection => (
              <CollectionCard  collection={collection} />
            ))}
          </div>
      </>
    );
  }