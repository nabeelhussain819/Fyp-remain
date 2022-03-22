
import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Admin from "./Routes/Admin";
import Qec from "./Pages/Index/Qec";
// import Register from "./Authentication/Register";
// import LoginPage from "./Authentication/Login";
// import Admin from "./Admin";
// import Teacher from "./Teacher";
// import User from "./User";

// let token = localStorage.getItem("list");
// let isAdmin = localStorage.getItem("isAdmin");
// let isTeacher = localStorage.getItem("isTeacher");
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/qe" element={<Qec />} />
          <Route exact path="/admin-panel/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>

      {/* <Teacher />
      <User /> */}
    </>
    // <div className="App">
    //   {!token ? (
    //     <>
    //       <BrowserRouter>
    //         <Routes>
    //           <Route path="/Signup" element={<Register />} />
    //           <Route exact path="/" element={<LoginPage />} />
    //         </Routes>
    //       </BrowserRouter>
    //     </>
    //   ) : (
    //     <>
    //       {isAdmin ? (
    //         <>
    //           <Fragment>
    //             <Admin />
    //           </Fragment>
    //         </>
    //       ) : (
    //         <>
    //           {isTeacher ? (
    //             <>
    //               <Teacher />
    //             </>
    //           ) : (
    //             <>
    //               <User />
    //             </>
    //           )}
    //         </>
    //       )}
    //     </>
    //   )}
    // </div>
  );
}

export default App;