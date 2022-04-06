import Header from './Header';
import Content from './Content';
import SearchColor from './SearchColor';
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState('');
  const [colors, setColors] = useState([
    {
      'name': 'Almond',
      'hex': '#efdecd'
    },
    {
      'name': 'Amber',
      'hex': '#ffbf00'
    },
    {
      'name': 'Amethyst',
      'hex': '#9966cc'
    }
  ]);

  return (
    <div className="App">
      <Header title="Color finder" />
      <Content 
        search={search}
        setSearch={setSearch}
        colors={colors}
        setColors={setColors}
      />
      <SearchColor search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
