import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const Supervisor = (props) => {
  //const { _id } = useParams()

  return (
    <tr>
      <th className="csan" scope="row">
        {props.supervisor.reseachArea}
      </th>

      <td className="csan">{props.supervisor.fullname}</td>
      {/* <td className="csan">{props.supplier.lastname}</td>
        <td className="csan">{props.supplier.pnum}</td>
        <td className="csan">{props.supplier.Email}</td> */}

      <td className="csan">
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "gray" }}
        >
          Email
        </button>
      </td>
    </tr>
  );
};

//--------------------------------------------------------------------------

const CoSupervisor = (props) => {
  //const { _id } = useParams()

  return (
    <tr>
      <th className="csan" scope="row">
        {props.cosupervisor.reseachArea}
      </th>

      <td className="csan">{props.cosupervisor.fullname}</td>
      {/* <td className="csan">{props.supplier.lastname}</td>
          <td className="csan">{props.supplier.pnum}</td>
          <td className="csan">{props.supplier.Email}</td> */}

      <td className="csan">
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "gray" }}
        >
          Email
        </button>
      </td>
    </tr>
  );
};

class SupervisorSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Supervisor: [], CoSupervisor: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/acceptsupplier/get")
      .then((res) => {
        //get all info about a supplier
        this.setState({ Supervisor: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/acceptsupplier/get")
      .then((res) => {
        //get all info about a supplier
        this.setState({ CoSupervisor: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SupevisorList() {
    return this.state.Supervisor.map((currentsupervisor) => {
      return <Supervisor supervisor={currentsupervisor} />;
    });
  }

  CoSupevisorList() {
    return this.state.CoSupervisor.map((currentcosupervisor) => {
      return <CoSupervisor cosupervisor={currentcosupervisor} />;
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <table class="chamoditable table table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th className="csan" scope="col">
                Research Area
              </th>
              <th className="csan" scope="col">
                Supervisor Name
              </th>
              <th className="csan" scope="col">
                Group Count
              </th>
              <th className="csan" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <h5>----Supervisor----</h5>
            {this.SupevisorList()}
            <h5>----Co-Supervisor----</h5>
            {this.CoSupevisorList()}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default SupervisorSelection;
