import TablePagination from "@mui/material/TablePagination";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const CustomTablePagination:React.FC<TablePaginationActionsProps> = {
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
})=> {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
      colSpan={3}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
}

export default CustomTablePagination;
