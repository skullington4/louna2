import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleItem from '../SingleItem/SingleItem'
import { useNavigate } from 'react-router-dom'



export default function Collections() {

const [items, setItems] = useState([])
let navigate = useNavigate();

useEffect(() => {
  async function getItems() {
    const result = await axios.get("/api/items")
    console.log(items)
    setItems(result.data)
  }
  getItems()
}, [])
  

    return (
      <>
          <h1>Collections</h1>
          <div className='singleItem'>
            {items.map(item => (
              <SingleItem   item={item} />
            ))}
          </div>
      </>
    );
  }