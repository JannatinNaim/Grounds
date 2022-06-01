import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <Navigate to="/boards/" />

      <Link to="/boards/">All Boards</Link>
    </div>
  );
};

export default Home;
