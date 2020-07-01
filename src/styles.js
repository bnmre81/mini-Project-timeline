import styled, { createGlobalStyle } from "styled-components";

const EventWrapper = styled.div`
  border: 4px solid black;
  margin: 250px;
`;
const Title = styled.h1`
  text-align: center;
`;
const SubTitle = styled.h3`
  text-align: center;
`;
const Description = styled.h4`
  text-align: center;
`;
const GlobalStyle = createGlobalStyle`
    body {
        background-color: blue;
    }
`;

export { Description, EventWrapper, SubTitle, Title, GlobalStyle };
