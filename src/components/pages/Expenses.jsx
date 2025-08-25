import Home from "./Home"
import { useState , useContext } from "react";
import { EntriesContext } from "../reuse/EntriesContext";

const Expenses = () => {
   //useState
      const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState("");

      const [catOpen, setCatOpen] = useState(false);
      const [catSelected, setCatSelected] = useState("");

      let [date , setDate] = useState("")
      let [amount , setAmount] = useState("")
      let [desc , setDesc] = useState("")
      let [error , setError] = useState({
            date: "",
            amount: "",
            cat : "",
            method: "",
            desc: ""
      })

      let { entries, setEntries } = useContext(EntriesContext);
      
      // Filter entries to only show expenses
      const expenseEntries = entries.filter(entry => entry.type === "expense");
   //useState

      const options = [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "Check",
      "PayPal",
      "Stripe",
      "Other",
      ];

      const categories = [
      "Office Supplies",
      "Marketing",
      "Utilities",
      "Travel",
      "Software",
      "Equipment",
      "Rent",
      "Insurance",
      "Professional Services",
      "Meals & Entertainment",
      "Other"
      ];


      const handleSelect = (value) => {
      setSelected(value);
      setIsOpen(false);
      };
      const handleSelectCat = (value) => {
      setCatSelected(value);
      setCatOpen(false);
      };




      let handleSubmit = (e) => {  
          e.preventDefault()

          if(!date || !amount || !desc || !selected || !catSelected){
                  setError({
                  date:   !date ? "Please select a date" : "",
                  amount: !amount ? "Please enter an amount" : "",
                  cat: !catSelected? "Please enter an category" : "",
                  method: !selected ? "Please select a payment method" : "",
                  desc:   !desc ? "Please enter a description" : ""
            })
          }
          else{
            setError({ date: "", amount: "", method: "", cat: "", desc: ""})
            let newEntries = {
                  date,
                  amount,
                  catSelected,
                  selected,
                  desc,
                  type: "expense" 
            }

            setEntries(entries => [newEntries,...entries])
            setDate("");
            setAmount("");
            setCatSelected("")
            setSelected("");
            setDesc("");
          }
      }

      let handleDelete = (index) => {

            // Need to find the actual entry in the full entries array and remove it
            
            const entryToDelete = expenseEntries[index];
            const actualIndex = entries.findIndex(entry => 
                entry.date === entryToDelete.date && 
                entry.amount === entryToDelete.amount && 
                entry.desc === entryToDelete.desc &&
                entry.type === entryToDelete.type
            );
            
            if (actualIndex !== -1) {
                setEntries(prev => prev.filter((_, i) => i !== actualIndex));
            }
      }

  return (
        <div>
              <Home></Home>
            <div className="view-panel w-full lg:w-[82.6%] h-[92vh] fixed right-[0.1%] bottom-2 p-3 overflow-y-scroll flex flex-col gap-10">

                  <div className="income-1 mt-3.5 sm:mt-0 data-panel w-full  bg-[#171717] rounded-3xl flex flex-col gap-2 text-white p-6">
                        <h2 className="text-gray-300 text-[29px]">Total Expenses</h2>
                        <div className="text-[#ef000a] text-4xl break-words break-all whitespace-normal">
                            ₹{expenseEntries.reduce((store,current) => store + Number(current.amount), 0)
                              .toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})}
                        </div>
                        <div className="text-gray-300 text-[15px]">{expenseEntries.length} entries this period</div>
                  </div>

                  <div className="income-2-3 lg:flex justify-between">

                        <div className="income-2 data-panel w-[100%] lg:w-[55%] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4">
                              <h2 className="text-gray-300 text-[18px]">Add New Expenses</h2>
                              <form action="" onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
                                    
                                    <label htmlFor="">Date</label>
                                    <input type="date" className="input-form outline-0 p-3 w-full rounded-2xl" value={date} onChange={(e) => setDate(e.target.value)}/>
                                     <div className="text-red-400">{error.date}</div>

                                    <label htmlFor="">Amount ($)</label>
                                    <input type="number" className="input-form amount-scroll outline-0 p-3 w-full rounded-2xl" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                                    <div className="text-red-400">{error.amount}</div>


                                    {/* category */}
                                    <label htmlFor="">Category</label>
                                    <div className="relative w-full input-form outline-0 p-2 rounded-2xl bg-[#171717]">
                                          <div className="bg-[#171717] text-white p-2 rounded-2xl cursor-pointer select-none flex items-center justify-between" onClick={() => setCatOpen(!catOpen)}>
                                                {catSelected || "Select expense category"  } 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                                          </div>

                                          {/* dropdown list */}
                                          {catOpen && (
                                          <div className="absolute left-0 top-full mt-1 w-full bg-[#171717] rounded-2xl overflow-hidden border border-[#333] z-10">
                                                {categories.map((opt) => (
                                                      <div key={opt} onClick={() => handleSelectCat(opt)} className="p-2 text-white cursor-pointer hover:bg-[#2a2a2a]">
                                                      {opt}
                                                      </div>
                                                ))}
                                          </div>
                                          )}
                                    </div>
                                    <div className="text-red-400">{error.cat}</div>

                  
                                    <label htmlFor="">Payment Method</label>
                                    <div className="relative w-full input-form outline-0 p-2 rounded-2xl bg-[#171717]">
                                          <div className="bg-[#171717] text-white p-2 rounded-2xl cursor-pointer select-none flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
                                                {selected || "Select payment method"  } 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                                          </div>

                                          {/* dropdown list */}
                                          {isOpen && (
                                          <div className="absolute left-0 top-full mt-1 w-full bg-[#171717] rounded-2xl overflow-hidden border border-[#333] z-10">
                                                {options.map((opt) => (
                                                      <div key={opt} onClick={() => handleSelect(opt)} className="p-2 text-white cursor-pointer hover:bg-[#2a2a2a]">
                                                      {opt}
                                                      </div>
                                                ))}
                                          </div>
                                          )}
                                    </div>
                                    <div className="text-red-400">{error.method}</div>

                                    <label htmlFor="">Description/Notes</label>
                                    <textarea placeholder="Add a description or notes about this Expenses..." name="" id="" className="input-form outline-0 p-3 w-full rounded-2xl" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                                    <div className="text-red-400">{error.desc}</div>

                                    <button className="w-full my-4 rounded-3xl bg-white active:scale-[0.98] duration-[0.2s] will-change-transform text-black p-1 cursor-pointer ">+ Add Expense Entry</button>
                              </form>
                        </div>

                        <div className="income-3 div-scroll my-5 lg:my-0 data-panel w-full lg:w-[43%] max-h-[67.4vh] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4 overflow-y-scroll">
                              <h2 className="text-gray-300 text-[18px]">Recent Expenses Entries</h2>

                                    {expenseEntries.map((item, index) => (
                                    <div key={index} className="p-2 flex flex-col gap-2 bg-[#3e3e3e] rounded-lg mt-1">

                                          <div className="amount-div flex justify-between items-center">
                                                <div className="flex justify-center items-center gap-2">
                                                      <p className="text-[#ef000a] text-xl break-words break-all whitespace-normal">₹{Number(item.amount).toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})}</p> 
                                                      <span className="bg-[#615959] rounded-3xl py-0.5 px-2.5">{item.catSelected}</span>
                                                      <span className="bg-[#5a5a5a] rounded-3xl py-0.5 px-2.5">{item.selected}</span>
                                                </div>

                                                <svg className="entries-delete h-5 w-5 text-red-500 cursor-pointer" onClick={() => handleDelete(index)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                          
                                          </div>
                                          <p className="text-[#dbdbdb]">{item.date}</p>
                                          <textarea className="income-desc text-[#f8f8f8] overflow-y-scroll">{item.desc}</textarea>

                                    </div>
                                    ))}
                        </div>

                  </div>

            </div>
        </div>
  )
}

export default Expenses