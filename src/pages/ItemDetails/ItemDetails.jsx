
import { useEffect, useState } from 'react'
import axios from 'axios'
import IndividualItemCard from '../../components/IndividualItemCard/IndividualItemCard'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './ItemDetails.css'





export default function ItemDetails() {


    let paramsName = useParams();
    
    const [item, setItem] = useState([])
    
    useEffect(() => {
        async function getItem() {
            const result = await axios.get(`/api/collections/${paramsName.collection}/${paramsName.item}`)

            setItem(result.data)
        }
        getItem()
    }, [])
  

    return (
        <>
            <p className='backlinks'>
            <Link to={`/collections`}>
                <p>Collections</p>
            </Link>
            <p>{ '>\t' }</p>
            <Link to={`/collections/${item.collection}`}>
                <p>{item.collection} </p>
            </Link>
            </p>


            <h1>{item.title} Item</h1> 
            
          
            <div className="singleCollections">
                <IndividualItemCard  item={item} />
            </div>
        </>
    );
  }