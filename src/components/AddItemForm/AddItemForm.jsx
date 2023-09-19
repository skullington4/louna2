import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddItemForm() {  

  const [file1, setFile1] = useState()
  const [file2, setFile2] = useState()
  const [file3, setFile3] = useState()
  const [file4, setFile4] = useState()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [collection, setCollection] = useState("")
  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
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
    formData.append("image", file1)
    formData.append("image", file2)
    formData.append("image", file3)
    formData.append("image", file4)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("collection", collection)
    formData.append("link1", link1)
    formData.append("link2", link2)
    
    await axios.post("/api/items", formData, { headers: {'Content-Type': 'multipart/form-data'}})

    navigate("/collections")
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile1(file)
    setFile4(file)
	}

  const fileSelected2 = event => {
    const file = event.target.files[0]
		setFile2(file)
	}

  const fileSelected3 = event => {
    const file = event.target.files[0]
		setFile3(file)
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
          <input onChange={fileSelected2} type="file" accept="image/*" required></input>
          <input onChange={fileSelected3} type="file" accept="image/*" required></input>
          <input value={link1} onChange={e => setLink1(e.target.value)} type="text" placeholder='Link1' required></input>
          <input value={link2} onChange={e => setLink2(e.target.value)} type="text" placeholder='Link2' required></input>

          <button type="submit">Submit</button>
        </form>

    </div> 
  )
}
