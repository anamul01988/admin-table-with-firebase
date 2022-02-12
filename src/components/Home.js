import React from 'react';
import "./Home.css";
import logo from "./images/logo.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import {useEffect,useState} from 'react';
import Pages from "./pages/Pages";
// import Main from "./main/Main";
import { useState,useEffect } from 'react';
const Home = () => {
  

  const[record,setRecord] = useState([])
 
  const getData = () =>
  {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposne=> resposne.json())
      .then(res=>setRecord(res))
  }

  useEffect(() => {
     getData();
  },)




  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }








  };
  return (
    <>
      {/* <Navbar/> */}
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img className="logo" src={logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">


              <li class="nav-item dropdown user-profile-dropdown">
                        <a href="" class="nav-link user" id="Notify" data-bs-toggle="dropdown">
                            <img src="assets/img/profile.svg" alt="" class="icon"/>
                        </a>

                        <div class="dropdown-menu">
                            <div class="user-profile-section">
                                <div class="media mx-auto">
                                    <img src="assets/img/profile.svg" alt="" class="img-fluid mr-2"/>
                                    <div class="media-body">
                                        <h5>Anamul haque</h5>
                                        <p>Super admin</p>
                                    </div>
                                </div>
                            </div>

                            <div class="dp-main-menu">
                                <a href="" class="dropdown-item"><span class="fas fa-user"></span>Profile</a>
                                <a href="" class="dropdown-item"><span class="fas fa-inbox"></span>Inbox</a>
                                <a href="" class="dropdown-item"><span class="fas fa-lock-open"></span>Look Screen</a>
                                <a href="" class="dropdown-item"><span class="fas fa-outdent"></span>Log Out</a>
                            </div>
                        </div>
                    </li>
              <li class="nav-item dropdown user-profile-dropdown">
                        <a href="" class="nav-link user" id="Notify" data-bs-toggle="dropdown">
                            <img src="assets/img/settings.svg" alt="" class="icon"/>
                        </a>

                        <div class="dropdown-menu">
                            <div class="dp-main-menu">
                                <a href="" class="dropdown-item"><span class="fas fa-plug"></span>Parmition</a>
                                <a href="" class="dropdown-item"><span class="fas fa-users"></span>Admins</a>
                                <a href="" class="dropdown-item"><span class="fas fa-object-ungroup"></span>Design Type</a>
                                <a href="" class="dropdown-item"><span class="fas fa-palette"></span>Color</a>
                            </div>
                        </div>
                    </li>



                <li class="nav-item lastList">
                  <ExitToAppIcon
                    color="secondary"
                    fonSize="large"
                    onClick={handleLogout}
                  />
                </li>    
              </ul>
            </div>
          </div>
        </nav>
      </header>


      {/* <!-- ------------------SIDEBAR START----------- --> */}
        <div class="left-menu">
            <div class="menubar-content">
                <nav class="animated bounceInDown">
                    <ul id="sidebar">
                        <li class="active">
                            <a href="index.html"> <i class="fas fa-home"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-box-open"></i> Widgets</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fab fa-uikit"></i> UI Elements</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-chart-bar"></i> Advanced UI</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fab fa-telegram-plane"></i> Form Elements</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-edit"></i> Editors</a>
                        </li>

                        <li class="sub-menu">
                            <a href="#"> <i class="fas fa-cogs"></i> Settings
                                <div class="fa fa-caret-down right"></div>
                            </a>
                            <ul class="left-menu-dp">
                                <li><a href=""><i class="fas fa-user-circle"></i>Account</a></li>
                                <li><a href=""><i class="fas fa-id-card"></i>Profile</a></li>
                                <li><a href=""><i class="fas fa-fingerprint"></i>Security &amp; Privacy</a></li>
                                <li><a href=""><i class="fas fa-key"></i>Password</a></li>
                                <li><a href=""><i class="fas fa-bell"></i>Notification</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-chart-bar"></i> Charts</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-table"></i> Tables</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-search"></i> Popups</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-bell"></i> Notification</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-icons"></i> Icons</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-map-marker-alt"></i> Maps</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-sad-cry"></i> Error Pages</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fab fa-pagelines"></i> General Pages</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fab fa-opencart"></i> E-Commerce</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-envelope"></i> E-mail</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-calendar-alt"></i> Calendar</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-check-circle"></i> Todo List</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fab fa-envira"></i> Gallery</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-book"></i> Documentation</a>
                        </li>


                        <li>
                            <a href="#"> <i class="fas fa-sign-out-alt"></i> Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* <!-- ------------------SIDEBAR END----------- --> */}


        <div class="content-wrapper">
            <section class="dashboard-top-sec">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="bg-white top-chart-earn">
                                <div class="row">
                                    <div class="col-sm-4 col-lg-12">
                                        <div class="last-month ">
                                            <h5>Dashboard</h5>
                                            <p>Overview of Latest Month</p>

                                            <div class="earn">
                                                <h2>$3367.98</h2>
                                                <p>Current Month Sales</p>
                                            </div>
                                            <a href="" class="di-btn purple-gradient">Last Month Summary</a>
                                        </div>
                                    </div>


                                    <Pages/>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        
        {/* <Pages/> */}
        {/* <div className="content-dashboard">
               <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div> */}
        



    </>
  );
};

export default Home;
