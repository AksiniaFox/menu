import React, { useState } from 'react';
import './adress.css'

const AddressInput = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const fetchSuggestions = async (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = ''

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 1) {  
      fetchSuggestions(newQuery);
    } else {
        setSuggestions([]);
        setDropdownVisible(false);
      }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.value); 
    setSuggestions([]); 
    setDropdownVisible(false);
  };

  return (
<div className="address-input-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Введите ваш адрес"
        onBlur={() => setDropdownVisible(false)}
        onFocus={() => query.length > 2 && setDropdownVisible(true)} 
      />
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
              {suggestion.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
