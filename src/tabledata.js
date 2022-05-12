import React, { useState } from 'react';

const TableData = () => {
  const [students, setStudents] = useState([]);

  const rowData = ({ name, mark }) => {
    return (
      <tr>
        <td>{name}</td>
        <td>{mark}</td>
        <td>{`Delete`}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Action</th>
        </tr>
        {students.map((item) => {
          rowData();
        })}
      </table>
    </>
  );
};

export default TableData;
