import React, { useState } from "react";

function List(){
  // const [displayText, setDisplayText] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const randomData = [
    {
      name: "Diksha",
      age: 29,
    },
    {
      name: "Poonam",
      age: 29,
    },
    {
      name: "Neha",
      age: 29,
    },
    {
      name: "Mayuri",
      age: 29,
    },
    {
      name: "Dhanshree",
      age: 29,
    },
  ];

function handleFilterChange(event) {
    setFilterValue(event.target.value);
  };

function displayFilteredValue() {
    let filtered = randomData.filter((data) =>
      data.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div
      style={{
        marginLeft: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{ width: "500px" }}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <button onClick={displayFilteredValue}>Search</button>
      <div
        style={{
          border: "1px solid black",
          background: "pink",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px",
        }}
      >
        {filteredData.length > 0
          ? filteredData.map((ele, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <span>{ele.name}</span>
                  <span>{ele.age}</span>
                </div>
              </div>
            ))
          : randomData.map((ele, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <span>{ele.name}</span>
                  <span>{ele.age}</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default List;
