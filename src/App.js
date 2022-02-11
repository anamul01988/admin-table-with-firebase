import React from "react";
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";

function App() {
  return (
    <container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
             <Route path="/home"
              element={<ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>}/>
              <Route exact path="/" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
           </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </container>

  );
}

export default App;
