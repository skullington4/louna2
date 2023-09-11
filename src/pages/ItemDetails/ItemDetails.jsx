
import { useEffect, useState } from 'react'
import axios from 'axios'
import IndividualItemCard from '../../components/IndividualItemCard/IndividualItemCard'
import { useNavigate } from 'react-router-dom'
import { useParams, useLocation } from "react-router-dom";






export default function ItemDetails(item) {


    let collectionName = useParams();
    
    const [items, setItems] = useState([])
    
    useEffect(() => {
        async function getItems() {
            const result = await axios.get(`/api/collections/${collectionName.collection}`)

            setItems(result.data)
        }
        getItems()
    }, [])
  

    return (
        <>
            <h1>{collectionName.collection} Collection</h1>
            
          
            <div className="singleCollections">
                {items.map(item => (
                <IndividualItemCard  item={item} />
                ))}
            </div>
        </>
    );
  }