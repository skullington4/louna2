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
    <div>

        <form onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title'></input>
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}
