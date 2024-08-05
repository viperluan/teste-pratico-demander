import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to="converter">Converter</Link>
      <Link to="treemap">TreeMap</Link>
    </>
  );
};

export { Home };
