import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { Button } from "../../components/SharedComponents/Button";
import Headline from "../../components/SharedComponents/Headline";

function createData(
  billNumber: string,
  billDescription: string,
  billTo: string,
  billDate: string,
  billingAccount: string,
  billAmount: string | number
) {
  return {
    billNumber,
    billDescription,
    billTo,
    billDate,
    billingAccount,
    billAmount,
  };
}

const rows = [
  createData(
    "Bill-202404-00003",
    "Office Expenses",
    "Rahim ",
    "04/26/2024",
    "404-Rent",
    4500
  ),
  createData(
    "Bill-202404-00003",
    "Office Expenses",
    "Rahim ",
    "04/26/2024",
    "404-Rent",
    4500
  ),
  createData(
    "Bill-202404-00003",
    "Office Expenses",
    "Rahim ",
    "04/26/2024",
    "404-Rent",
    4500
  ),
];

export default function BasicTable() {
  return (
    <div>
      <div className="flex justify-between">
        <Headline>All Products List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-24">
          <Link to="/expense-management">
            <Button>Back To QuickBills </Button>
          </Link>
        </div>
      </div>
      <div className="mx-2 border-2 border-sky-400">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <label className="text-base font-semibold text-cyan-800">
                    Bill No
                  </label>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <label className="text-base font-semibold text-cyan-800">
                    Description
                  </label>
                </TableCell>
                <TableCell align="right">
                  <label className="text-base font-semibold text-cyan-800">
                    Bill To
                  </label>
                </TableCell>
                <TableCell align="right">
                  <label className="text-base font-semibold text-cyan-800">
                    Bill Date{" "}
                  </label>
                </TableCell>
                <TableCell align="right">
                  <label className="text-base font-semibold text-cyan-800">
                    Amount
                  </label>
                </TableCell>
                <TableCell align="right">
                  <label className="text-base font-semibold text-cyan-800">
                    Account
                  </label>
                </TableCell>
                <TableCell align="center">
                  <label className="text-base font-semibold text-cyan-800">
                    Action
                  </label>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.billNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.billNumber}
                  </TableCell>
                  <TableCell align="right">{row.billDescription}</TableCell>
                  <TableCell align="right">{row.billTo}</TableCell>
                  <TableCell align="right">{row.billDate}</TableCell>
                  <TableCell align="right">{row.billingAccount}</TableCell>
                  <TableCell align="right">{row.billAmount}</TableCell>
                  <TableCell align="right">
                    <Button className="bg-blue-700 mr-2">Edit</Button>
                    <Button className="bg-red-700 mr-2">Delete</Button>
                    <Button className="bg-green-700 mr-2">Print</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
