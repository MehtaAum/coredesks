import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend,} from "chart.js";
import TodoList from "./TodoList";

// register chart.js components
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend
);

const DashboardPanel = () => {

  const stats = [
    {
      label: "Revenue",
      value: "$12,500",
      data: [1000, 5000, 5000, 8000, 12500],
      color: "#34D399", // green
    },
    {
      label: "Expense",
      value: "$8,200",
      data: [1200, 2500, 4000, 7000, 8200],
      color: "#F87171", // red
    },
    {
      label: "Profit",
      value: "$4,300",
      data: [500, 1000, 2500, 3500, 4300],
      color: "#60A5FA", // blue
    },
    {
      label: "Growth Rate",
      value: "12%",
      data: [5, 7, 10, 11, 12],
      color: "#FBBF24", // yellow
    },
  ];

  const doughnutData = {
    labels: ["Revenue", "Expense", "Profit"],
    datasets: [
      {
        data: [12500, 8200, 4300],
        backgroundColor: ["#34D399", "#F87171", "#60A5FA"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#fff" },
      },
    },
  };

  return (
    <div className="p-6 flex flex-col">

          <div className="dash-1 flex justify-center gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="data-panel w-[25%] min-w-[220px] h-[26vh] bg-[#171717] rounded-3xl flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-gray-300 text-lg">{stat.label}</h2>
                  <p className="text-white text-2xl font-bold mt-2">{stat.value}</p>
                </div>

                <div className="w-full h-[50%]">
                  <Line
                    data={{
                      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                      datasets: [
                        {
                          data: stat.data,
                          borderColor: stat.color,
                          backgroundColor: "transparent",
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                      scales: { x: { display: false }, y: { display: false } },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="two-dash flex gap-9">
                    <div className="dash-2 w-[74.40%] py-[30px] flex justify-center items-center flex-col h-[55vh] data-panel bg-[#171717] rounded-3xl p-6">
                      <h2 className="text-gray-300 text-lg text-center mb-4">Revenue vs Expense vs Profit</h2>
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>


                    <div className="dash-3">
                          <TodoList></TodoList>
                    </div>
          </div>


    </div>
  );
};

export default DashboardPanel;
