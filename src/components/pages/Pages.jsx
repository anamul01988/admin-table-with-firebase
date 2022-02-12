import React from "react";
import { useState, useEffect } from "react";

// const [searchTerm, setSearchTerm] = useState("");

const Pages = () => {
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });




  const HandleSearch = e =>{
    e.preventDefault(); //aita form ta k auto refresh kora theke atkabe. sathe form ta k grabe korbe
    console.log(record);
  }
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

  return (
    <div>
      <div className="content-dashboard mt-5 mb-5">
        <div className="dashboard-content-title">
          <h5 class="mt-3 mb-3 text-secondary">Check Records of Employees</h5>
          <form className="search-box" onSubmit={HandleSearch}>
            <input
              type="search"
              placeholder="Search for an userName: "
              required
            //   onChange = {e=> setSearchTerm(e.target.value)}
         
            ></input>
          </form>




{/*           
           <form className="search-box" onSubmit={HandleSearch}>
            <input
              type="search"
              placeholder="Search for an anime: "
              required
              value={record}
              onChange={(e) => setRecord(e.target.value)}
            ></input>
          </form>

          {record
            .filter((output) => {
              if (record == "") {
                // return val
              } else if (
                output.username.toLowerCase().includes(record.toLowerCase())
              ) {
                console.log(output);
                return output;
              }
            })
            .map((output, key) => {
              return (
                <div className="users" key={key}>
                  <p className="usersName">{output.username}</p>
                </div>
              );
            })} */}




        </div>

        <div class="table-responsive">
          <table class="table table-striped">
            <thead class="thead-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {record.slice(0, 5).map((output) => {  if(searchTerm ==""){
                  return ( 
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td></td>
                  </tr> );
              } else if(output.username.toLowrCase() == searchTerm.toLowerCase()){
                 return ( 
                    <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td></td>
                  </tr>
                 );
              } } )}
            </tbody>

            {/* <tbody>
              {record.slice(0, 5).map((output) => (
                <tr>
                  <td>{output.id}</td>
                  <td>{output.name}</td>
                  <td>{output.email}</td>
                  <td>{output.username}</td>
                  <td>{output.website}</td>
                  <td></td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pages;
