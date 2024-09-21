import { useState } from 'react'
import './App.css'

function App() {
  const userInformation = {
    name: "",
    password: "",
    email: "",
    gender: "",
    experience: "",
  }
  
  const [form, setForm] = useState(userInformation)
  const {name, password, email, gender, experience } = form
  
  const EventHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log(e.target.name)
  }
  
  const formbutton = (e) => {
    e.preventDefault()
    console.log(form)
  }
  
  return (
    <>
      <div className="form-container">
        <h2>React JS Form</h2>
        <form onSubmit={formbutton}>
          <label>Name </label>
          <input type="text" id="name" name="name" value={name} onChange={EventHandler} />

          <br />

          <label htmlFor="password">Password </label>
          <input type="password" id="password" name="password" value={password} onChange={EventHandler} />

          <br />

          <label>Email </label>
          <input type="email" id="email" name="email" value={email} onChange={EventHandler} />

          <br />
          

          <label>Gender </label>
          <div className="gender-container">
            <label>
              <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={EventHandler} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={EventHandler} /> Female
            </label>
          </div>

          <br />

          <label>Developer </label>
          <select id="experience" name="experience" value={experience} onChange={EventHandler}>
            <option value="experience">Frond-end Developer</option>
            <option value="backenddeveloper">Back-End Developer</option>
            <option value="mernstackdeveloper">Mern-Stack Developer</option>
            <option value="fullstackdeveloper">Full Stack Developer</option>
          </select>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
