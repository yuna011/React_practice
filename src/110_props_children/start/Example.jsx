import Profile from "./components/Profile";
import Container from "./components/Container";
import { Children } from "react";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile />
      </Container>
    </div>
  );
};

export default Example;
