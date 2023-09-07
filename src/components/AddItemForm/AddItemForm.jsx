import { useState } from "react";
import axios from "axios";


import * as itemsService from '../../utilities/items-service'

export default function AddItemForm() {

    const [fullItem, setFullItem] = useState({
        title: '',
        description: '',
        file: ''
      });
    
      function handleChange(evt) {
        setFullItem({ ...fullItem, [evt.target.name]: evt.target.value });
      }
    
      async function handleSubmit(evt) {
        evt.preventDefault();
        const newFullItem = await itemsService.createItem(fullItem)

      };


    return (
      <>
        <div>This is the AddItemForm page</div>

        <div className="form-container">
            <form autoComplete="off" encType="multipart/form-data" onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={fullItem.title} onChange={handleChange} required />
                <label>Description: </label>
                <input type="text" name="description" value={fullItem.description} onChange={handleChange} required />
                <label>File: </label>
                <input type="file" name="file" value={fullItem.file} onChange={handleChange} required />
                <button type="submit" >Submit</button>
            </form>
        </div>
        
      </>
    )
}