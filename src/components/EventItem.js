import React from "react";
// Styles
import styles from "../styles";
import { Description, EventWrapper, SubTitle, Title } from "../styles";
// Data
import events from "../data";

const EventItem = (props) => {
  return (
    <EventWrapper>
      <Title>{props.event.year}</Title>
      <SubTitle>{props.event.event}</SubTitle>
      <Description>{props.event.description}</Description>
    </EventWrapper>
  );
};

export default EventItem;
