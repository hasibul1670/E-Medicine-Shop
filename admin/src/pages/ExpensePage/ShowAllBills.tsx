import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import * as React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../components/ExpenseComponents/CustomTable";
import CustomTablePagination from "../../components/ExpenseComponents/CustomTablePagination";
import { Button } from "../../components/SharedComponents/Button";
import Headline from "../../components/SharedComponents/Headline";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const ShowAllBills = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    s
  const bills = [
    {
      id: 1,
      date: "2024-04-25",
      category: "Utilities",
      issuedPerson: "John Doe",
      company: "ABC Inc.",
    },
    {
      id: 2,
      date: "2024-04-26",
      category: "Supplies",
      issuedPerson: "Jane Smith",
      company: "XYZ Corp.",
    },
    // Add more bill data as needed
  ];
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Headline>All Products List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button>
            <Link to="/expense-management">Back To Quick Bills</Link>
          </Button>
        </div>
      </div>
    <TableContainer component={Paper}>
      <CustomTable rows={rows} page={page} rowsPerPage={rowsPerPage} />
      <CustomTablePagination
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
    </div>
  );
};

export default ShowAllBills;
