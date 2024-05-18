import { Children } from "react";
import "./Container.css";

const Container = ({ title , Children}) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {Children}
    </div>
  );
};

export default Container;
