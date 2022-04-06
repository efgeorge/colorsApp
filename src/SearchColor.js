const SearchColor = ({ search, setSearch }) => {
  return (
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
          id='search'
          type='text'
          role='searchbox'
          placeholder='Add color name'
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          />
      </form>
    )
}

export default SearchColor