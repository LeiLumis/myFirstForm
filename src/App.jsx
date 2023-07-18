import { useState } from 'react'
import './App.css'
import { SubmitButton } from './components/SubmitButton.jsx'


export default function App() {

  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState({ name: '', email: '' })
    const handleSubmit = () =>{
    setData({name, email})
    }


  return (
    <>
    <h1>My First React Form</h1>
   <form >
    <div>
      <label>Name:</label>
      <input 
      className='nameInput' 
      type="text"
      value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <label>Email:</label>
      <input 
      className='emailInput' 
      type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
    <SubmitButton handleSubmit={handleSubmit} />
    </div>
    </form>
    <div className="info">
      <span>{data.name}</span>
      <span>{data.email}</span>
    </div>
    </>
  )
}
