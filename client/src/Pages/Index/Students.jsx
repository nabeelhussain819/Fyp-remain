import React, { useState } from "react";
import SearchStudent from "../../Components/Search/Student";

function Students() {
    const [name, setName] = useState("");
    function searchData(e) {
        let data = e.target.value.toLowerCase();
        setName(data);
    }
    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="col-md-12 ">
                                <h3> Students</h3>
                                <div className="input-group ">
                                    <input
                                        type="text"
                                        onChange={searchData}
                                        className="form-control"
                                        placeholder="Search..."
                                        name="search"
                                    />
                                </div>
                                <p>
                                    <small>
                                        <a href="">Home</a> / <small> Students</small>
                                    </small>
                                </p>
                            </div>
                        </div>
                        <SearchStudent searchData={name} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Students;
