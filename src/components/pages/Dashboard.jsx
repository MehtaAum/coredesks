import DashboardPanel from "../reuse/DashboardPanel.jsx"
import Navbar from "../reuse/Navbar.jsx"
import Panel from "./Panel.jsx"

const Dashboard = () => {
  return (
    <div className="bg-[#0a0a0a] w-full h-[100vh]">
      <Navbar></Navbar>
      <Panel></Panel>

      <div className="view-panel w-[82.6%] h-[92vh] fixed right-[0.1%] bottom-2 border border-white p-3">
        <DashboardPanel></DashboardPanel>
      </div>

    </div>
  )
}

export default Dashboard
