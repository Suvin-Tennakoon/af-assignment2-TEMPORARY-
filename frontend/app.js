import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hcontent from "./Components/HomeContent/Hcontent";
import NavBar from "./Components/NavBar/NavBar";
import Logins from "./Components/Home/Login";
import Userlist from "./Components/DisplayUsers/DisplayUsers";
import registerstudent from "./Components/Register/RegStudent";
import registerSupervisor from "./Components/Register/RegSupervisor";
import registerpanelMember from "./Components/Register/RegPanelmember";
import panelmemallocate from "./Components/PanelMemberAllocation/Allocatepanel";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import createStudentGroups from "./Components/CreateGroups/CreateGroup";
import DashBord from "./Components/StudentDashBord/StudentDashbord";
import SupervisorSelection from "./Components/SelectSupervisor/SupervisorSelection";
import AcceptTopicSupervisor from "./Components/AcceptTopicSupervisor/AcceptTopicSupervisor";
import StdUploadfile from "./Components/StudentUploadFile/StudentUploadFile";
import Createsubmision from "./Components/CreateSubmisions/Createsubmisions";
import DisplaySubmition from "./Components/DisplaySubmisionDates.jsx/DisplaySubmitionDates";
import Em from "./Components/Email/Em";


function App() {
  return (
    <Router>
      <switch>
        <Route path="/" exact component={Header} />
        <Route path="/"  component={NavBar} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/" exact component={Hcontent} />
        <Route path="/" exact component={Logins} />
        <Route path="/displayUlist" exact component={Userlist} />
        <Route path="/regstudent" exact component={registerstudent} />
        <Route path="/regsupervisor" exact component={registerSupervisor} />
        <Route path="/regpanel" exact component={registerpanelMember} />
        <Route path="/panelmemallo" exact component={panelmemallocate} />
        <Route path="/updateuser/:id/:type" exact component={UpdateUser} />
        <Route path="/createstdgrp" exact component={createStudentGroups} />
        <Route path="/dashbord" exact component={DashBord} />
        <Route path="/accepttopicsup" exact component={ AcceptTopicSupervisor} />
        <Route path="/selectsupervisor" exact component={SupervisorSelection} />
        <Route path="/createsubmision" exact component={Createsubmision} />
        <Route path="/displaysub" exact component={DisplaySubmition} />
        <Route path="/em/:email" component={Em} />
        <Route path="/stdfileUpload" component={StdUploadfile} />
        <Route path="/" component={Footer} />


      </switch>
    </Router>
  );
}

export default App;
