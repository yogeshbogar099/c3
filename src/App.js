import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import Routes from "Router"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <EmployeeList />
      <EmployeeDetails />
      <Admin />
      <ProtectedRoute />
      <Logout />
      <Routes>{
      }</Routes>
    </div>
  );
}

export default App;
