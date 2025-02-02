import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("홈 랜더링중");

  return (
    <div>
      <Link to="/detail/:id">Detail 페이지로 이동</Link>
    </div>
  );
};

export default Home;
