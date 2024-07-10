import { useState } from "react";
import axios from "axios";

function AddContact({ onSave }) {
  const [item, setItem] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://668e2259bf9912d4c92cebe6.mockapi.io/users", item)
      .then((response) => onSave(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 bg-primary p-2 rounded text-light">
          <span className="h6">Add Contact</span>
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Enter Number"
            name="number"
            value={item.number}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddContact;
