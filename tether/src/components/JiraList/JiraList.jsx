import React, { Component } from "react";
import JiraCard from "../JiraCard/JiraCard";
import "./JiraList.scss";

export default class JiraList extends Component {
  render() {
    console.log(this.props.jiraList);

    return (
      <>
        <h1>
          Tasks ({this.props.jiraList.filter((val) => val[2] != "Done").length})
        </h1>
        <div className="tasks__container">
          {this.props.jiraList
            .filter((val) => val[2] != "Done")
            .map((item) => {
              return (
                <JiraCard
                  id={item[0]}
                  name={item[3]}
                  assignee={item[5]}
                  priority={item[4]}
                />
              );
            })}
        </div>
      </>
    );
  }
}
