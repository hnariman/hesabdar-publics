import styled from "styled-components";

export const Search = styled.input`
  float: right;
  border: 1px solid silver;
  margin-right: 5em;
  height: 1.5em;
  border-radius: 5px;
`;

export const Layout = styled.section`
  display: grid;
  min-width: 100vw;
  min-height: 100vh;
  grid-template-rows: 5% 1fr 5%;
  grid-template-columns: 7% auto;
  grid-template-areas:
    "side header header"
    "side content content"
    "side footer footer";
`;

export const Header = styled.div`
  box-shadow: 1px 0 10px silver;
  align-self: center;
  padding-top: 1em;
  padding-bottom: 0.5em;
  grid-area: header;
  width: 100%;
`;

export const Side = styled.div`
  padding: 0.5em;
  grid-area: side;
  background: #000066;
  color: #fff;
`;

export const Content = styled.div`
  padding: 1em;
  grid-area: content;
`;

export const Footer = styled.div`
  padding: 0.5em;
  grid-area: footer;
`;
