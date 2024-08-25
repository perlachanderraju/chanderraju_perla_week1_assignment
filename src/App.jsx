import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [rating,setRating]=useState("5")
  const [comments,setComments]=useState("")
  const [submittedData,setSubmittedData]=useState(null)
  const [errors,setErrors]=useState({})

  const validate = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Valid email is required";
    }

    if (!comments) {
      errors.comments = "Comments are required";
    }

    return errors;
  };


  const handleSubmit=(e)=>{
    e.preventDefault()

    const errors=validate()

    if (Object.keys(errors).length === 0) {
      const formData = {
        name,
        email,
        rating,
        comments,
      };

      setSubmittedData(formData);
      setName('');
      setEmail('');
      setRating('5');
      setComments('');
      setErrors({});
    } else {
      setErrors(errors);
    }
  
  }

  return (
    <>
    <div className='top-container'>
      <div className='feedback-container'>
        <h1 className='heading'>
          Customer FeedBack Form
        </h1>
        <form className='formSection' onClick={handleSubmit}>
          <div className="form-group">
            <label >Name</label>
            <input type="text" placeholder='enter your name..' onChange={(e)=>setName(e.target.value)} value={name}/>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label >Email</label>
            <input type="text" placeholder='enter your email..' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            {errors.comments && <p className="error">{errors.comments}</p>}
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2 className='heading'>Submitted Feedback</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Rating:</strong> {submittedData.rating}</p>
            <p><strong>Comments:</strong> {submittedData.comments}</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App