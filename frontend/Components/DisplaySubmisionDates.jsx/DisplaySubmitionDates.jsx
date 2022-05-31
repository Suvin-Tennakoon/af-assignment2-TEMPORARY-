import React, { Component } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const Submition = (props) => {
  const { _id } = useParams();
  const url = "/updateuser/";

  const data = [props];

  return (
    <div>
      <h2>Submission : {props.submition.submissionName}</h2>

      <h6>Additional Details : {props.submition.deadline}</h6>

      <p>Deadline : {props.submition.additionalDetail}</p>

      <button
        type="button"
        className="btn btn-primary"
        style={{ backgroundColor: "gray" }}
      >
        Add submission
      </button>
    </div>
  );
};

class DisplaySubmition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Submition: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/submission/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Submition: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SubmitonList() {
    return this.state.Submition.map((currentsubmition) => {
      return <Submition submition={currentsubmition} />;
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />

        {this.SubmitonList()}

        <br />
        <br />
      </div>
    );
  }
}

export default DisplaySubmition;
