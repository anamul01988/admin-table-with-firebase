import React from "react";
import "./Main.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
const Main = () => {
  const [data, setData] = useState(userRows);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const HandleSearch = (e) => {
    e.preventDefault(); //aita form ta k auto refresh kora theke atkabe. sathe form ta k grabe korbe
    console.log(searchTerm);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-3"></div>
        {/* <div className="col-lg-10 col-md-2 col-3">
          <div className="userList">
            <div className="main-head">

              <form className="search-box" onSubmit={HandleSearch}>
                <input
                  type="search"
                  placeholder="Search for an anime: "
                  required
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </form>

              {userRows
                .filter((val) => {
                  if (searchTerm == "") {
                    // return val
                  } else if (
                    val.username
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    console.log(val);
                    return val;
                  
                  }
                })
                .map((val, key) => {
                  return (
                    <div className="users" key={key}>
                      <p className="usersName">{val.username}</p>
                    </div>
                  );
                })}
            </div>

            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
