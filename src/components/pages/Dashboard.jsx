import DashboardPanel from "../reuse/DashboardPanel.jsx"
import Home from "./Home.jsx"

const Dashboard = () => {
  return (
        <div>
              <Home></Home>

               <div className="view-panel w-full lg:w-[82.6%] h-[92vh] fixed right-[0.1%] border border-white bottom-2 p-3 overflow-y-scroll">
                    <DashboardPanel></DashboardPanel>
               </div>
        </div>

  )
}

export default Dashboard
