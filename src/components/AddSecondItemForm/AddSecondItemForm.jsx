import React, { useState } from 'react';
import axios from 'axios';

const ItemUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', selectedImage);

    axios.post('/api/items', formData)
      .then(response => {
        // Handle the response (e.g., show success message, update UI, etc.)
        console.log('Item uploaded successfully:', response.data);
      })
      .catch(error => {
        // Handle errors (e.g., show error message, etc.)
        console.error('Error uploading item:', error);
      });
  };

  return (
    <>
    
    <div>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea placeholder="Description" value={description} onChange={handleDescriptionChange}></textarea>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>

    <img src={selectedImage} />
    </>
  );
};

export default ItemUpload;