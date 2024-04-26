import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

interface Row {
  name: string;
  calories: number;
  fat: number;
}

interface CustomTableProps {
  rows: Row[];
  rowsPerPage: number;
  page: number;
}

const CustomTable: React.FC<CustomTableProps> = ({
  rows,
  page,
  rowsPerPage,
}) => {
  return (
    <Table>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
