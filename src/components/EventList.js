import React from "react";
// Data
import events from "../data";
// Styles
import styles from "../styles";
// Components
import EventItem from "./EventItem";
// Styles

const EventList = () => {
  const EventList = events.map((event) => (
    <EventItem event={event} key={event.id} />
  ));
  return <div>{EventList}</div>;
};

export default EventList;
