import "./App.css";
import styled from "styled-components";
import React, { useState } from "react";
import {
  Search,
  Layout,
  Header,
  Content,
  Side,
  Footer,
} from "./AppComponents.jsx";

import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { database } from "react-icons-kit/feather/database";
import { compass } from "react-icons-kit/feather/compass";
import { edit } from "react-icons-kit/feather/edit";
import { file } from "react-icons-kit/feather/file";
import MainCard from "./components/MainCard.jsx";

const App = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <Layout>
      <Header>
        <div style={{ marginLeft: "10px", marginTop: "1em" }}>
          <Icon icon={chevronLeft} onClick={toggle} />
        </div>
        <Search />
      </Header>
      <Content>
        <MainCard name="Test username" />
      </Content>
      <Side style={{ visibility: show ? "hidden" : "visible" }}>
        <ItemsList />
      </Side>
      <Footer>footer</Footer>
    </Layout>
  );
};

const ItemsList = () => {
  const list = [
    { name: "item1", icon: database },
    { name: "item2", icon: compass },
    { name: "item3", icon: edit },
    { name: "item4", icon: file },
    { name: "item5", icon: file },
  ];
  return (
    <Container>
      {list.map((x) => (
        <li style={{ margin: "0 auto" }}>
          <Icon icon={x.icon} size={26} />
          <p>{x.name}</p>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  list-style-type: none;
  padding: 10%;
  display: flex;
  flex-direction: column;
  & li:hover {
    opacity: 0.5;
  }
  li {
    margin-top: 2em;
  }
`;

export default App;
