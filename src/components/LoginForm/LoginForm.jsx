import { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function LoginForm({setUser}) {
  const [credentials, setCredentials] = useState({ email: "", password: "", image: null });
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate()


  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  }

  function handleImageChange(event) {
    setCredentials((prevCredentials) => ({ ...prevCredentials, image: event.target.files[0] }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", credentials.email);
      formData.append("password", credentials.password);
      formData.append("image", credentials.image);
      const { data } = await axios.post("/api/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      setUser(data);
      navigate("/Collections");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <label>Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}