import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import User from "../pages/Product/Product";
import Settings from "../pages/Settings/Settings";
import FinancialDashboard from "../pages/FinancialDashboard/FinancialDashboard";
import Product from "../pages/Product/Product";
import AddProduct from "../pages/AddProduct/AddProduct";
import Invoice from "../pages/Invoice/Invoice";
import ExpenseManagement from "../pages/ExpenseManagement/ExpenseManagement";
import TaxManagement from "../pages/TaxManagement/TaxManagement";
import Report from "../pages/Report/Report";

const LayoutRouter = () => {
  return (
    <Router>
      <DefaultLayout headerTitle="Dashboard">
        <Routes>
          <Route path="/" Component={DashboardHome} />
          <Route path="/users" Component={User} />
          <Route path="/settings" Component={Settings} />
          <Route path="/dashboard" Component={DashboardHome} />
          <Route path="/financial-dashboard" Component={FinancialDashboard} />
          <Route path="/products" Component={Product} />
          <Route path="/add-products" Component={AddProduct} />
          <Route path="/invoice" Component={Invoice} />
          <Route path="/expense-management" Component={ExpenseManagement} />
          <Route path="/tax-management" Component={TaxManagement} />
          <Route path="/reports" Component={Report} />
    
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default LayoutRouter;
