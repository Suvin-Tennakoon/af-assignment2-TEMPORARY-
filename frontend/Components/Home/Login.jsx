import './Login.css';
import React, { Component } from 'react';



class Logins extends React.Component{

    constructor(props) {
        super(props);

        this.setstudentPassword = this.setstudentPassword.bind(this);
        this.setstudentemail = this.setstudentemail.bind(this);
        this.loginstudent = this.loginstudent.bind(this);

        this.setWorkingpersonemail = this.setWorkingpersonemail.bind(this);
        this.setWorkingPersonelPW = this.setWorkingPersonelPW.bind(this);
        this.loginWorkingPersonel = this.loginWorkingPersonel.bind(this);

        this.setpanelemail = this.setpanelemail.bind(this);
        this.panelpassword = this.panelpassword.bind(this);
        this.loginpannel = this.loginpannel.bind(this);

        this.state = {
            stuemail:'',
            stupwd:'',

            wokeremail:'',
            workerPW:'',

            panelemail:'',
            panelpwd:''
        }
    }

    setstudentemail(e) {
        this.setState({stuemail: e.target.value});
    }

    setstudentPassword(e) {
        this.setState({stupwd: e.target.value});
    }

    setWorkingpersonemail(e) {
        this.setState({wokeremail:e.target.value});
    }

    setWorkingPersonelPW(e) {
        this.setState({workerPW:e.target.value});
    }

    setpanelemail(e){
        this.setState({panelemail:e.target.value});
    }
    panelpassword(e){
        this.setState({panelpwd:e.target.value});
    }

    loginstudent(e) {
        const logstudent = {
            logemail: this.state.stuemail,
            logpwd: this.state.stupwd
        }

        axios.post('#', logstudent)
            .then((res) => {
                if(res.data == 'Login Successfull') {
                    // localStorage.setItem('customer', this.state.cusMobile);
                    window.location = '/#';
                }
                else {
                    document.getElementById("chmdilog1").className = "form-control is-invalid";
                    document.getElementById("chmdilog2").className = "form-control is-invalid";
                    document.getElementById("chmdilog").innerHTML = res.data;
                    document.getElementById("chmdilog").className = "invalid-feedback";
                }
            }).catch((err) => {
                alert(err.message);
            })
        e.preventDefault();
    }

    loginWorkingPersonel(e) {

        let logStaff = {
            logUserName: this.state.wokeremail,
            logpw:this.state.workerPW
        }

        // if(logStaff.logUserName.substring(0,3).toLocaleUpperCase() == 'EMP' ) {

        //     logStaff.logUserName = logStaff.logUserName.toLocaleUpperCase();
            
        //     axios.post('http://localhost:3001/api/Employee/loginEmployee', logStaff)
        //         .then((res) => {
        //             if(res.data == 'Login Successfull') {
        //                 window.location = '/empProfile/'+logStaff.logUserName;
        //             }

        //             else {
        //                 document.getElementById("otherslogin1").className = "form-control is-invalid";
        //                 document.getElementById("otherslogin2").className = "form-control is-invalid";
        //                 document.getElementById("otherslogin3").innerHTML = 'Invalid Username or Password';
        //                 document.getElementById("otherslogin3").className = "invalid-feedback";
        //             }
        //         }).catch((err) => {
        //             alert(err.message);
        //         })
        // }

        // else {
            axios.post('/#', logStaff)
                .then((res) => {
                    if(res.data == 'Login Successful') {
                        window.location = '/displayUlist';
                    }
                    else {
                        document.getElementById("otherslogin1").className = "form-control is-invalid";
                        document.getElementById("otherslogin2").className = "form-control is-invalid";
                        document.getElementById("otherslogin3").innerHTML = 'Invalid Email or Password';
                        document.getElementById("otherslogin3").className = "invalid-feedback";
                    }
                }).catch((err) => {
                    alert(err.message);
                })
        //}

        e.preventDefault();
    }

    loginpannel(e) {
        const logpanel = {
            logpanelemail: this.state.panelemail,
            logpanelpwd: this.state.panelpwd
        }

        axios.post('/#', logpanel)
        .then((res) => {
            if(res.data.logpanelemail == 'admin@gmail.com') {
                window.location = '/#';
            }
            else if(res.data) {
                window.location = '/#';
            }
            else {
                document.getElementById("panelogin1").className = "form-control is-invalid";
                document.getElementById("panelogin2").className = "form-control is-invalid";
                document.getElementById("panelogin3").innerHTML = 'Invalid Email or Password';
                document.getElementById("panelogin3").className = "invalid-feedback";
            }
        }).catch((err) => {
            alert(err.message);
        })
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-2">
                        <h3>Student Login Form</h3>
                        <form onSubmit={this.loginstudent} >
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Your Email *" 
                            id="chmdilog1"
                            value={this.state.stuemail}
                            onChange={this.setstudentemail}
                            />
                        </div><br/>


                            <div className="form-group">
                                <input type="password" 
                                    className="form-control" 
                                    placeholder="Your Password *" 
                                    id="chmdilog2"
                                    value={this.state.stupwd} 
                                    onChange={this.setstudentPassword}/>
                                <div id="chmdilog"></div>
                            </div><br/>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div><br/>
                            <div className="form-group">
                                <a href="/#" className="ForgetPwd">Don't have an Account? Sign-Up Here..</a>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-1">
                    <img src='https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg' width="400px"/>
                    </div>
                </div>
            </div>
    
            <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <img src='https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg' width="400px"/>
                </div>
                <div className="col-md-6 login-form-2">
                <h3>Staff Login Form</h3>
            <form onSubmit={this.loginWorkingPersonel}>
                <div className="form-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Your Email *" 
                        id="otherslogin1"
                        value={this.state.wokeremail}
                        onChange={this.setWorkingpersonemail}
                         />
                </div><br/>

                <div className="form-group">
                    <input type="password" 
                    className="form-control" 
                    placeholder="Your Password *" 
                    id="otherslogin2"
                    value={this.state.setWorkingPersonelPW} 
                    onChange={this.setWorkingPersonelPW}/>
                    <div id="otherslogin3"></div>
                </div><br/>

                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Login" />
                </div><br/>
            </form>
            </div>
            </div>
            </div>

            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-2">
                        <h3>Staff Login Form</h3>
                        <form onSubmit={this.loginpannel}>
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control" 
                                    placeholder="Your Email *" 
                                    id="panelogin1"
                                    value={this.state.panelemail}
                                    onChange={this.setpanelemail} />
                            </div><br/>
                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                id="panelogin2"
                                placeholder="Your Password *" 
                                value={this.state.panelpwd}
                                onChange={this.panelpassword}/>
                            <div id="panelogin3"></div>
                            </div><br/>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div><br/>
                            
                        </form>
                    </div>
                    <div className="col-md-6 login-form-1">
                    <img src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg' width="400px"/>
                    </div>
                </div>
            </div>
     </div>

        );
    }
} 
export default Logins;