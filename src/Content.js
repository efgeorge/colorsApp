const Content = ({ search, setSearch, colors, setColors}) => {
  return (
    <div class="square">
      (
      {(colors.name).filter(
        (colors.name).toLowerCase().includes(search.toLowerCase())
      )}
      ? style = {background-color: colors.hex} : style = "background-color: #000000"
      ) 
    </div>
  );
}

export default Content