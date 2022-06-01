import React, { Component, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const Marking = (props) => {

  return props.marking.markingCriteria.map((mc) => {
    return (
      <tr>
        <td className="csan">{mc.markedArea}</td>
        <td className="csan">
          <input placeholder={`0/${mc.marksOutOf}`} />
        </td>
      </tr>
    );
  });
};

class MarkingSchema extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Markingshem: [] };
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

  Calculation() {}
  PanelMarkingschem() {
    return this.state.Markingshem.map((currentmarking) => {
      if (currentmarking.submissionType == "Doc")
        return <Marking marking={currentmarking} />;
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
          <tbody>{this.PanelMarkingschem()}</tbody>

        </table>
        <button  type="button" className="btn btn-primary btn-sm">Calculate</button><br/><br/>
        <lable>Group ID</lable><br/>
        <input ></input><br/><br/>
        <lable>Total Marks</lable><br/>
        <input></input><br/><br/>
        <center><button  type="button" className="btn btn-primary btn-sm">Submit</button><br/><br/></center>
        <br />
        <br />
      </div>
    );
  }
}

export default MarkingSchema;
