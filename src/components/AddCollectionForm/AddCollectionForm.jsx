import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddCollectionsForm() {  

  const [file, setFile] = useState()
  const [title, setTitle] = useState("")

  const navigate = useNavigate()

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
            <option></option>
          </select>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}
