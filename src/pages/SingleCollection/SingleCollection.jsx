
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCards from '../../components/ItemCards/ItemCards'
import "./SingleCollection.css"
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';





export default function SingleCollection() {


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
            <Link to={`/collections`}>
                <div>Collections</div>
            </Link>
            <h1>{collectionName.collection} Collection</h1>
            
          
            <div className="singleCollections">
                {items.map(item => (
                <ItemCards  item={item} />
                ))}
            </div>
        </>
    );
  }