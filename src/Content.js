import { colors } from "./colors";

const Content = ({ search }) => {
  return (
    <div className="square" style={{backgroundColor: colors[search] || "black", transition: "background-color .5s"}} />
  );
}

export default Content