import Home from "./Home";
import { useState, useEffect, useContext } from "react";
import { EntriesContext } from "../reuse/EntriesContext";

const Report = () => {
  const { entries } = useContext(EntriesContext); // ✅ use entries from context

  const [filter, setFilter] = useState("all");
  const [filteredReports, setFilteredReports] = useState([]);

  // ✅ group entries by month (Income + Expenses)
  const reports = entries.reduce((acc, e) => {
    const d = new Date(e.date);
    const monthKey = d.toLocaleString("default", { month: "short", year: "numeric" });
    if (!acc[monthKey]) {
      acc[monthKey] = { month: monthKey, income: 0, expenses: 0 };
    }
    if (e.type === "income") acc[monthKey].income += Number(e.amount);
    if (e.type === "expense") acc[monthKey].expenses += Number(e.amount);
    return acc;
  }, {});

  const reportArr = Object.values(reports).sort(
    (a, b) => new Date(a.month) - new Date(b.month)
  );

  useEffect(() => {
    if (!reportArr.length) return;
    const today = new Date();

    if (filter === "month") {
      setFilteredReports(
        reportArr.filter(r => {
          const [mon, year] = r.month.split(" ");
          const d = new Date(`${mon} 1, ${year}`);
          return d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
        })
      );
    } else if (filter === "15days") {
      const cutoff = new Date();
      cutoff.setDate(today.getDate() - 15);
      setFilteredReports(
        entries.filter(e => {
          const d = new Date(e.date);
          return d >= cutoff && d <= today;
        }).map(e => ({
          month: new Date(e.date).toLocaleString("default", { month: "short", year: "numeric" }),
          income: e.type === "income" ? Number(e.amount) : 0,
          expenses: e.type === "expense" ? Number(e.amount) : 0,
        }))
      );
    } else {
      setFilteredReports(reportArr);
    }


    
    

  }, [filter, entries]);

  const totalIncome = filteredReports.reduce((s, r) => s + r.income, 0);
  const totalExpenses = filteredReports.reduce((s, r) => s + r.expenses, 0);
  const netProfit = totalIncome - totalExpenses;
  const profitMargin = totalIncome ? ((netProfit / totalIncome) * 100).toFixed(0) : 0;

  return (
    <div>
      <Home />

      <div className="w-full lg:w-[82.6%] h-[92vh] fixed right-[0.1%] bottom-2 p-3 overflow-y-scroll flex flex-col gap-7">
        {/* Summary Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 ">
          {[
            { title: "This Revenue", val: `₹${totalIncome.toLocaleString()}`, color: "text-[#7ba5ff]" },
            { title: "This Expenses", val: `₹${totalExpenses.toLocaleString()}`, color: "text-[#ef020a]" },
            { title: "Net Profit", val: `₹${netProfit.toLocaleString()}`, color: "text-[#01a63e]" },
            { title: "Profit Margin", val: `${profitMargin}%`, color: "text-[#be66fd]" }
          ].map((c, i) => (
            <div key={i} className="flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col gap-2 text-white p-6 py-10 data-panel">
              <h2 className="text-gray-300 text-[22px] sm:text-[20px]">{c.title}</h2>
              <div className={`${c.color} text-3xl sm:text-4xl break-words`}>{c.val}</div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6">
          {["all", "month", "15days"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-xl ${filter === f ? "bg-blue-600" : "bg-gray-600"} text-white`}>
              {f === "all" ? "All Time" : f === "month" ? "This Month" : "Last 15 Days"}
            </button>
          ))}
        </div>

        {/* Breakdown */}
        <div className="p-6 bg-[#171717] rounded-3xl text-white data-panel">
          <h2 className="text-xl font-bold mb-6">Detailed Monthly Breakdown</h2>

          {/* Header */}
          <div className="hidden md:flex font-semibold border-b border-gray-700 pb-3 text-gray-300">
            {["Month", "Income", "Expenses", "Profit", "Margin", "Growth"].map((h, i) =>
              <div key={i} className="flex-1">{h}</div>
            )}
          </div>

          {/* Rows */}
          {filteredReports.map((r, i) => {
            const profit = r.income - r.expenses;
            const margin = r.income ? ((profit / r.income) * 100).toFixed(0) + "%" : "-";
            const prev = filteredReports[i - 1];
            const growth = prev?.income ? (((r.income - prev.income) / prev.income) * 100).toFixed(0) : "-";
            return (
              <div key={i} className="flex flex-col md:flex-row py-3 border-b border-gray-700 hover:bg-gray-900 transition ">
                <div className="flex-1 font-medium">{r.month}</div>
                <div className="flex-1 text-green-400">₹{r.income.toLocaleString()}</div>
                <div className="flex-1 text-red-400">₹{r.expenses.toLocaleString()}</div>
                <div className="flex-1 text-blue-400">₹{profit.toLocaleString()}</div>
                <div className="flex-1">{margin}</div>
                <div className={`flex-1 ${growth.startsWith("-") ? "text-red-400" : "text-green-400"}`}>
                  {growth === "-" ? "-" : `${growth}%`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Report;
