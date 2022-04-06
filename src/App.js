import Header from './Header';
import Content from './Content';
import SearchColor from './SearchColor';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header title="Color finder" />
      <Content
        search={search}
      />
      <SearchColor search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
