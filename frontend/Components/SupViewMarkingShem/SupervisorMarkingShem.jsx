import React, { Component, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

class SupMarkingSchema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Markingshem: [],
      totMarks: 0,
    };

    this.calcMarks = this.calcMarks.bind(this);
  }

  calcMarks() {
    let x = 0;
    this.state.Markingshem.map((currentmarking) => {
      if (currentmarking.submissionType == "Document Submission")
        currentmarking.markingCriteria.map((mc, i) => {
          x += parseFloat(document.getElementById(i).value);
        });
    });
    this.setState({ totMarks: x });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/markingScheme/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Markingshem: res.data });
      })
      .then((res) => {
        console.log(this.state.Markingshem);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <table class="chamoditable table table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th className="csan" scope="col">
                Marking Criteria
              </th>
              <th className="csan" scope="col">
                Marks
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Markingshem.map((currentmarking) => {
              if (currentmarking.submissionType == "Document Submission")
                return currentmarking.markingCriteria.map((mc, i) => {
                  return (
                    <tr>
                      <td className="csan">{mc.markedArea}</td>
                      <td className="csan">
                        <input placeholder={`0/${mc.marksOutOf}`} id={i} />
                      </td>
                    </tr>
                  );
                });
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.calcMarks}
        >
          Calculate
        </button>
        <br />
        <br />
        <lable>Group ID</lable>
        <br />
        <input></input>
        <br />
        <br />
        <lable>Total Marks</lable>
        <br />
        <input value={this.state.totMarks}></input>
        <br />
        <br />
        <center>
          <button type="button" className="btn btn-primary btn-sm">
            Submit
          </button>
          <br />
          <br />
        </center>
        <br />
        <br />
      </div>
    );
  }
}

export default SupMarkingSchema;
