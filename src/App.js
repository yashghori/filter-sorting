import React, { useState } from "react";
import "./style.css";
import dataObj from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(dataObj);
  const sortPrice = () => {
    const sortedStudios = data.slice().sort((a, b) => a.price - b.price);
    // console.log(sortedStudios);
    setData(sortedStudios);
  };

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here by name or price"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button onClick={sortPrice} style={{ padding: "10px" }}>
            Sort by Price
          </button>
        </div>
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.price.toString().includes(searchTerm)
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
