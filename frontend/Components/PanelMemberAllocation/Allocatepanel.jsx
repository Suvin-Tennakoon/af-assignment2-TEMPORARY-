import React, { Component } from "react";
import axios from "axios";
import "./Allocatepannel.css";

const MemberList = (props) => {
  return (
    <tr>
      <td className="csan">{props.MemberList()}</td>

      <td className="csan">
        <input
          type={"text"}
          className="form-control"
          placeholder="Group ID *"
          value={props.groupid}
          onChange={props.setgroupid()}
        />
        {/* <div onChange={props.setpannel()}>
          <select class="form-select" aria-label="Default select example">
            <option selected>Panel Member</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        &nbsp; */}
        <input
          type={"text"}
          className="form-control"
          placeholder="panel member Email *"
          value={props.panelallocate}
          onChange={props.setpannel()}
        />
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={props.addbutton()}
          >
            Add
          </button>
        </div>
      </td>
    </tr>
  );
};

export default class panelmemallocate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberList: [],
      panel: [],
      groupid: "",
      panelallocate: "",
    };

    this.setgroupid = this.setgroupid.bind(this);
    this.setpannel = this.setpannel.bind(this);
    this.addbutton = this.addbutton.bind(this);
  }

  setgroupid(e) {
    this.setState({ groupid: e.target.value });
  }
  setpannel(e) {
    this.setState({ panelallocate: e.target.value });
  }

  addbutton(e) {
    const Members = {
      id: this.state._id,
      memberlist: this.state.MemberList,
      Groupid: this.state.groupid,
      PanelAllo: this.state.panelallocate,
    };

    axios
      .post("#", Members)
      .then(() => {
        alert("Panel Member and Group ID Allocated");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/projectGroup/getAll")
      .then((res) => {
        //get all info about groups
        this.setState({ MemberList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get("http://localhost:3001/api/panelmember/getAll")
    //   .then((res) => {
    //     //get all info about groups
    //     this.setState({ panel: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  MemberList() {
    return this.state.MemberList.map((currentmember) => {
      return <MemberList memberlist={currentmember} />;
    });
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <table class="membertable table table-hover">
            <thead className="thead-dark">
              <tr className="table-dark">
                <th className="csan" scope="col">
                  Students
                </th>
                <th className="csan" scope="col">
                  Group ID
                </th>
                <th className="csan" scope="col">
                  PanelMember allocation
                </th>
                <th className="csan" scope="col"></th>
              </tr>
            </thead>
            {/* <tbody>{this.groupMemberList()}</tbody> */}
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
