import React from "react";

// Styles
import styled from "styled-components";
import styles from "./styles";
import { GlobalStyle } from "./styles";
// Components
import EventList from "./components/EventList";

function App() {
  return (
    <div>
      <EventList />
    </div>
  );
}

export default App;
