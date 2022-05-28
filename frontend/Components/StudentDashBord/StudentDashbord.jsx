import React, { Component } from "react";
import axios from "axios";
import "./StudentDashbord.css"

class DashBord extends React.Component{
    constructor(props) {
        super(props);

    }
    

    render(){
        return(
            <div className="container"><br/>
                <center><h4>Student Dashbord</h4></center><br/><br/>
                     <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/createstd";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.clickfor.net/wp-content/uploads/2018/05/can-you-write-my-essay-for-me-now.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Group Registration</h5>
              <p class="card-text">
                You can Register for our system from here
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/ScheduleSM";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.valueglide.com/hubfs/1-1.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Reaseach Topic Registration</h5>
              <p class="card-text">
              You can Register your topic from here
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/GMap";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://media.istockphoto.com/photos/classmates-are-learning-through-laptop-picture-id1323851976?b=1&k=20&m=1323851976&s=170667a&w=0&h=k6GktX8QclakdewhDzTed3Patq25lhb3HznyyB71-1I="
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Request Vehicle Assistance</h5>
              <p class="card-text">
                Vehicle breakdown at the middle of the road? Need technicle
                assistance at your convienience? Quickly contact us from here.{" "}
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/SpareParts/all";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.helptostudy.com/wp-content/uploads/2020/11/696dcdd6157d0438eed57eac9b6266b5.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Spare Parts</h5>
              <p class="card-text">
                Need high quality, authentic spareparts? Check our inventory for
                spare parts and oils from different vendors. Navigate from here.
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br /> 
            </div>
        );
    }   
}
export default DashBord;