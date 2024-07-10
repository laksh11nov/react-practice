import { useState, useEffect } from "react";
import axios from "axios";

function ContactList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://668e2259bf9912d4c92cebe6.mockapi.io/users")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://668e2259bf9912d4c92cebe6.mockapi.io/users/${id}`)
      .then(() => setItems(items.filter((item) => item.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="contactList">
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-2 bg-secondary p-1 px-2 rounded text-light d-flex justify-content-between align-items-center"
        >
          <span className="h6 m-0">
            {item.name} : {item.number}
          </span>
          <div>
            <button className="btn btn-warning m-1" ><i className="fa-solid fa-edit text-light"></i></button>
            <button className="btn btn-danger m-1" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash text-light"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
