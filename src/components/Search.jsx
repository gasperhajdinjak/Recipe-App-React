import React from "react";
import "../../src/App.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//this component renders the "Searched" page when user searches for the recipes the results render both with button and enter key press
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='form' disabled={!input}>
        <input
          type='text'
          placeholder='Search eg."pizza"'
          value={input}
          className='search-input'
          onChange={e => setInput(e.target.value)}
        />
        <button type='submit' className='src-btn' disabled={!input}>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
