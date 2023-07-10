import { useState } from "react";


export default function AddItemForm() {

    const [fullItem, setFullItem] = useState({
        title: '',
        description: '',
        collection: '',
        img: ''
      });
      const [error, setError] = useState('');
    
      function handleChange(evt) {
        setFullItem({ ...fullItem, [evt.target.name]: evt.target.value });
        setError('');
      }
    
      async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            
        } catch {
          setError('Missing field or something');
        }
      }
  

    return (
      <>
        <div>This is the AddItemForm page</div>

        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={credentials.email} onChange={handleChange} required />
                <label>Description: </label>
                <input type="text" name="description" value={credentials.password} onChange={handleChange} required />
                <label>File: </label>
                <input type="file" name="file" value={credentials.password} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
      

      </>
    )
}