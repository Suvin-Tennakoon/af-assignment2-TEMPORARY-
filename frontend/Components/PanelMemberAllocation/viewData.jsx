import React, { Component } from "react";
import axios from "axios";

const MemberList = (props) => {
  return (
    <tr>
      <td className="csan">{this.MemberList}</td>

      <td className="csan">
        <input
          type={"text"}
          placeholder="Group ID"
          value={this.state.groupid}
          onChange={this.setgroupid()}
        />{" "}
        &nbsp;
        <input
          type={"text"}
          placeholder="panel member name"
          value={this.panelallocate}
          onChange={this.setpannel()}
        />{" "}
        &nbsp;
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.addbutton()}
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
      memberlist: this.state.MemberList,
      Groupid: this.state.groupid,
      PanelAllo: this.state.panelallocate,
    };

    axios
      .post("#", Members)
      .then(() => {
        alert("Panel Member and Group Allocated");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  componentDidMount() {
    axios
      .get("")
      .then((res) => {
        //get all info about groups
        this.setState({ MemberList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
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
