import React from 'react'

function AddContact() {
  return (
    <>
      <form action="#">
      <div className="mb-2 bg-primary p-2 rounded text-light">
                  <span className='h6 '>Add Contact</span>
                </div>
              <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Enter Number"
                    name="number"
                  />
                </div>
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                </div>
              </form>  
    </>
  )
}

export default AddContact