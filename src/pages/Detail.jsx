import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const params = useParams();
  console.log("params => ", params);

  return (
    <div>
      <h1>Detail 페이지 입니다.</h1>
      <div>현재 페이지 상태 : {location.pathname.slice(1)}</div>
    </div>
  );
};

export default Detail;
