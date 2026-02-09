const SearchBar = ({set}) => {
  return (
    <input
      placeholder="search"
      onChange={(e)=>set(e.target.value)}
    />
  );
};

export default SearchBar;