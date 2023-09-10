
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





export default function About() {

const [items, setItems] = useState([])
let navigate = useNavigate();

useEffect(() => {
  async function getItems() {
    const result = await axios.get("/api/items")
    setItems(result.data)
  }
  getItems()
}, [])
  

    return (
      <>
          <h1>Collections</h1>
          

      </>
    );
  }