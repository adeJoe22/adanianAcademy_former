import React, { useState } from "react";
import styled from "styled-components";

function Table({ columns, data }) {
  const [sorting, setSorting] = useState({ column: null, direction: null });
  const [filtering, setFiltering] = useState("");

  const handleSorting = (columnId) => {
    const isAsc = sorting.column === columnId && sorting.direction === "asc";
    setSorting({ column: columnId, direction: isAsc ? "desc" : "asc" });
  };

  const handleFiltering = (event) => {
    setFiltering(event.target.value);
  };

  const sortedData = sorting.column
    ? [...data].sort((a, b) => {
        const column = columns.find((col) => col.id === sorting.column);
        const aValue = a[column.id];
        const bValue = b[column.id];
        if (aValue < bValue) {
          return sorting.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sorting.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : data;

  const filteredData = filtering
    ? sortedData.filter((row) =>
        columns.some((column) =>
          String(row[column.id]).toLowerCase().includes(filtering.toLowerCase())
        )
      )
    : sortedData;

  return (
    <Container>
      <Search>
        <input
          type="text"
          placeholder="Search here"
          value={filtering}
          onChange={handleFiltering}
        />
      </Search>
      <MainTable>
        <TableHead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} onClick={() => handleSorting(column.id)}>
                {column.label}
                {sorting.column === column.id && (
                  <span>{sorting.direction === "asc" ? " ▲" : " ▼"}</span>
                )}
              </th>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.id}>
                  {column.render
                    ? column.render(row[column.id])
                    : row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </TableBody>
      </MainTable>
    </Container>
  );
}

export default Table;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Search = styled.div`
  input {
    margin: 15px 0;
    padding: 15px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 100px;
    width: 350px;
    :focus {
      border: 1px solid #e2e2e2;
      outline: none;
    }
  }
`;
const MainTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;
const TableHead = styled.thead`
  tr {
    background-color: #f39712;
    color: #fff;
    padding: 0px;
  }
  th {
    border-right: 1px solid #fff;
    padding: 12px 8px;
    text-align: left;
    white-space: nowrap;
  }
`;
const TableBody = styled.tbody`
  td {
    border-bottom: 1px solid #e2e2e2;
    padding: 7px 5px;
  }
`;
