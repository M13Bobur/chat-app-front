import React from "react";
import { useTable, useGroupBy } from "react-table";
import {
  Cell,
  Container,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Wrapper,
  Table,
} from "./style";

export default ({ headers, data = [], height }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: headers,
        data: data,
      },
      useGroupBy
    );

  return (
    <Container>
      <Wrapper height={height}>
        <Table {...getTableProps()}>
          <THead>
            {headerGroups.map((headerGroup, i) => (
              <TR {...headerGroup.getHeaderGroupProps()} key={`${i + 1}`}>
                {headerGroup.headers.map((header, ind) => (
                  <TH
                    {...header}
                    key={`${ind + 1}`}
                    {...header.getHeaderProps()}
                    rowSpan={`${header.rowSpan ?? 1}`}
                    style={header.displayNone ? { display: "none" } : {}}
                  >
                    <Cell>{header.render("Header")}</Cell>
                  </TH>
                ))}
              </TR>
            ))}
          </THead>
          <TBody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <TR {...row.getRowProps()} key={`${i + 1}`}>
                  {row.cells.map((cell, idx) => {
                    const { column } = cell;
                    return (
                      <TD key={`${idx + 1}`} {...cell.getCellProps()}>
                        <Cell {...column}>{cell.render("Cell")}</Cell>
                      </TD>
                    );
                  })}
                </TR>
              );
            })}
          </TBody>
        </Table>
      </Wrapper>
    </Container>
  );
};
