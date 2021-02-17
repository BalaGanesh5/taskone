import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "react-modal";
import data from "./data.json";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "10%",
    left: "20%",
    right: "20%",
    bottom: "10%",
    marginRight: "0%",
  },
};

function App() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  const [modalValues, setModalValues] = useState({
    name: "hey",
    phoneNumber: " ",
    email: " ",
    website: [],
    barId: "",
    taxId: "",
  });

  console.log(data[0]);

  useEffect(() => {
    setModalValues({
      name: data[0].keyData.PartyType.OrgInfo.CompanyName,
      phoneNumber:
        data[0].keyData.PartyType.OrgInfo.Communications[2].CommPhone,
      email: data[0].keyData.PartyType.OrgInfo.Communications[4].CommEmail,
    });
  }, [value]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(input);
  };

  const handleFormChanges = (e) => {
    const nam = e.target.name;
    setModalValues({ nam: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label htmlfor="dropdown">Choose:</label>
        <select id="dropdown" value={input} onChange={handleChange}>
          <option value="">select one</option>
          <option value="Under Writer"> Under Writer</option>
          <option value="Eminator"> Eminator</option>
        </select>
        <input type="submit" value="submit" />
      </form>

      <Modal isOpen={value ? true : false} style={customStyles}>
        <div classname="modalHader">
          <h1>{value}</h1>
        </div>

        <div className="popup">
          <form>
            <div className="formFields">
              <div className="colone">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={modalValues.name}
                    onChange={handleFormChanges}
                  />
                </label><br/>

                <label>
                  phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={modalValues.phoneNumber}
                  /><br/>
                </label>
                <label>
                  Tax ID:
                  <input
                    type="text"
                    name="taxId"
                    value={modalValues.taxId}
                    onChange={handleFormChanges}
                  /><br/>
                </label>
              </div>
              <div className="coltwo">

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={modalValues.email}
                  onChange={handleFormChanges}
                /><br/>
              </label>
              <label>
                Bar Id:
                <input
                  type="text"
                  name="barId"
                  value={modalValues.barId}
                  onChange={handleFormChanges}
                /><br/>
              </label>
              <label>
                Wesite:
                <select
                  id="dropdown"
                  value={modalValues.website}
                  onChange={(e) => setModalValues({ website: e.target.value })}
                >
                  <option value={data}>www.test.co.in</option>
                  <option value={data}>www.test.co.in</option>
                </select>
              </label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <input type="button" value="Cancel" />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
