/**
 *
 * @param data - The table row data should be array of objects as the key of the objects would be used to map through and display the data, you can check the downloads page for reference.
 * @param headers - The table headers, this should be an array of strings containing the headers for the table
 * @returns Full Table containing data from the headers and data props
 * @author @chibuike-19
 */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type TableProps = {
  data: Array<{ [key: string]: any }>;
  headers?: string[];
  width: string
};

export default function CustomizedTables({ data, headers, width }: TableProps) {
  return (
    <TableContainer sx={{ width: {xs: "95%", md: `${width}`} }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers?.map((header, index) => (
              <StyledTableCell key={index}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {Object.values(row).map((cellValue, cellIndex) => (
                <StyledTableCell key={cellIndex}>{cellValue}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
