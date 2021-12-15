import React from 'react'

function Form({bgColor, submitData, username, email, bio, setUsername, setEmail, setBio}) {
    return (
        <>
            <form autoComplete='off'>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="userename" id="userename" className={`form-control ${bgColor}_dark`} value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" id="email" className={`form-control ${bgColor}_dark`} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio" className="form-label">Bio</label>
                    <textarea rows={7} name="bio" id="bio" className={`form-control ${bgColor}_dark`} value={bio} onChange={(e)=>{setBio(e.target.value)}} ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className={`btn ${bgColor}_dark`} onClick={submitData} />
                </div>
            </form>
        </>
    )
}

export default Form
