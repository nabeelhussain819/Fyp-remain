import React, { useEffect, useState } from "react";

function SearchProgram({ searchData }) {
  const [program, setProgram] = useState([]);
  console.log(program);
  const filterData = program.filter((data) => data.name.includes(searchData));
  console.log(filterData);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/readProgram")
      ).json();
      setProgram(response);
    };
    getData();
  }, []);
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="form-box">
              <div class="form-title-wrap">
                <h3 class="title">Available program Lists</h3>
              </div>
              <div class="form-content">
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Program Name</th>
                        <th scope="col">Teacher</th>
                        <th scope="col">userId</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterData.map((data) => {
                        return (
                          <>
                            <tr>
                              {" "}
                              <td>{data.name}</td>
                              <td>{data.teacherId.length}</td>
                              <td>{data.userId.length}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchProgram;
