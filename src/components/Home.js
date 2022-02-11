import React from "react";
// import Navbar from "./pages/navbar/Navbar";
import "./Home.css";
import logo from "./images/logo.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Main from "./main/Main";

const Home = () => {
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
              {/* <img className="navbar-brand">{logo}</img> */}
              {/* <a class="navbar-brand" href="#"><img className="logo" src={logo}/></a> */}
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
                <li class="nav-item lastList">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
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

      <main>
         <Main/>
      </main>

      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome User <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="success" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default Home;
