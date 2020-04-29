import React, { Component } from "react";
import "./Body.scss";

export default class Body extends Component {
  render() {
    console.log(this.props.jiraTasks);
    return (
      <>
        <main className="body">
          <section className="body__tasks">ACTIVE TASKS SECTION</section>
          <section className="body__backlog">BACKLOG SECTION</section>
        </main>
      </>
    );
  }
}
