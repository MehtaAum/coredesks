import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Income from "./components/pages/Income"
import Expenses from "./components/pages/Expenses"
import Employees from "./components/pages/Employees"
import Report from "./components/pages/Report"

const App = () => {
  return (
    <div>

       <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/income" element={<Income/>}></Route>
        <Route path="/expenses" element={<Expenses/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/reports" element={<Report/>}></Route>
      </Routes> 

    </div>
  )
}

export default App
