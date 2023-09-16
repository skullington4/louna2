import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddItemForm() {  

  const [file, setFile] = useState()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [collection, setCollection] = useState("")
  const [dropdown, setDropdown] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function getDropdown() {
        const result = await axios.get(`/api/collections`)
        setDropdown(result.data)
        setCollection(result.data[0].title)
    }
    getDropdown()
}, [])
  let finalDrop = dropdown.map((d) => {
    return (
      <option>{d.title}</option>
    )
  })


  const submit = async event => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("collection", collection)

    await axios.post("/api/items", formData, { headers: {'Content-Type': 'multipart/form-data'}})

    navigate("/collections")
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div>

        <form onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title' required></input>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder='Description' required></input>
          <select value={collection} onChange={e => setCollection(e.target.value)} required>
          <option value="none" disabled hidden>
          </option>
            {finalDrop}
          </select>
          <input onChange={fileSelected} type="file" accept="image/*" required></input>
          <button type="submit">Submit</button>
        </form>

    </div> 
  )
}
