import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const options = ["one", "one", "one", "one", "one"];
const MainCard = ({ name }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <Menu>
        {options.map((x) => (
          <li>
            <a href="">{x}</a>
          </li>
        ))}
      </Menu>
      <h3 style={{ color: "silver", fontSize: "1em" }}>
        Description of the action here
      </h3>
      <ButtonsGrid>
        <button>Create</button>
        <button>Check</button>
        <button>Edit</button>
        <button>Icon</button>
        <select id="" name="">
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
          <option value="">options</option>
        </select>
      </ButtonsGrid>
      <Table>
        <Row>
          <p>one</p> <p>two</p> <p>three</p>
        </Row>
        <Row>
          <p>one</p> <p>two</p> <p>three</p>
        </Row>
        <Row>
          <p>one</p> <p>two</p> <p>three</p>
        </Row>
        <Row>
          <p>one</p> <p>two</p> <p>three</p>
        </Row>
        <Row>
          <p>one</p> <p>two</p> <p>three</p>
        </Row>
      </Table>
    </Container>
  );
};

const Row = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  line-height: 0.3em;
  border-radius: 4px;
`;

const Table = styled.ul`
  box-shadow: inset 0 0 10px silver;
  border-radius: 10px;
  list-style-type: none;
  padding: 5px;
  & li:nth-child(odd) {
    background: #00006622;
  }
`;

MainCard.propTypes = {
  name: PropTypes.string.isRequired,
};
const ButtonsGrid = styled.div`
  align-items: stretch;
  display: flex;
  grid-gap: 10px;
  & :nth-child(3) {
    margin-left: 12em;
  }
  & :nth-child(5) {
    margin-left: auto;
    margin-right: 0;
  }
  button {
    color: white;
    background: #000066;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 0.5em;
  }
  select {
    border: none;
    border-radius: 4px;
    padding: 4px;
    color: white;
    background: #000066;
    option {
      background: #000066;
    }
  }
`;
const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  overflow: hidden;
  padding: 0;
`;
const Container = styled.div`
  border: 1px solid silver;
  box-shadow: 1px 1px 10px silver;
  border-radius: 4px;
  padding: 1em;
  width: 50%;
  margin: 5% auto auto 5%;
`;

export default MainCard;
