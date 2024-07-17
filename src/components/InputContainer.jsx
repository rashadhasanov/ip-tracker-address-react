import React from "react";

function InputContainer({ getFetchRequest, setInputTerm, inputTerm }) {
  return (
    <div className="input-container">
      <input
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button onClick={() => getFetchRequest()}>
        <i className="material-icons">chevron_right</i>
      </button>
    </div>
  );
}

export default InputContainer;
