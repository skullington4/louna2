import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function AddCollectionsForm(dropdowned) {  

  const [file, setFile] = useState()
  const [title, setTitle] = useState("")
  const [dropdown, setDropdown] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function getDropdown() {
        const result = await axios.get(`/api/collections`)
        console.log(result)
        setDropdown(result.data)
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

    await axios.post("/api/collections", formData, { headers: {'Content-Type': 'multipart/form-data'}})

    navigate("/")
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="flex flex-col items-center justify-center">

        <form onSubmit={submit} style={{width:650}} className="flex flex-col space-y-5 px-5 py-14">
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title'></input>
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <select>
            {finalDrop}
          </select>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}
