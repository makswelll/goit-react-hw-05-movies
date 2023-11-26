import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) return toast.error('Please enter a sometings');
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button type="submit">Go</button>
      </form>
    </>
  );
};

export default SearchBar;
