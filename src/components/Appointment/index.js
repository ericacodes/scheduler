import React from "react";
import "./styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";

export default function Appointment(props) { 
  return (
  <article key={props.id} className="appointment">
    <Header time={props.time}></Header>
    {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}
  </article>
  )
}