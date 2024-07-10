import React, { useState } from "react";

function About() {
  const [first, setfirst] = useState(10);

  const incrementCount = () => {
    if (first < 10) {
      setfirst(first + 1);
    }
  };

  const descrimentCount = () => {
    if (first > 0) {
      setfirst(first - 1);
    }
  };

  return (
    <>
      <div className="counter-section">
        <div className="container">
        <center className="h3 pt-3">Counter Section</center>
          <div className="row justify-content-center">
            <div className="col-md-6 p-4 ">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <button
                      className="btn btn-primary w-100"
                      onClick={incrementCount}
                    >
                      Increment
                    </button>
                  </li>
                  <li className="list-group-item">{first}</li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-primary w-100"
                      onClick={descrimentCount}
                    >
                      Descriment
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
