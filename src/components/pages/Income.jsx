import Home from "./Home"
import { useState } from "react";
const Income = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

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

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  let [date , setDate] = useState("")
  let [amount , setAmount] = useState("")
  let [desc , setDesc] = useState("")

  let handleSubmit = () => {
      
  }

  return (

      <div>
            <Home></Home>

            <div className="view-panel w-full lg:w-[82.6%] h-[92vh] fixed right-[0.1%] border border-white bottom-2 p-3 overflow-y-scroll flex flex-col gap-10">

                  <div className="income-1 data-panel w-full  bg-[#171717] rounded-3xl flex flex-col gap-2 text-white p-6">
                        <h2 className="text-gray-300 text-[1.6vw]">Total Income</h2>
                        <div className="text-[#00a63e] text-4xl">$4,500</div>
                        <div className="text-gray-300 text-[0.8vw]">3 entries this period</div>
                  </div>

                  <div className="income-2-3 flex justify-between">

                        <div className="income-2 data-panel w-[55%] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4">
                              <h2 className="text-gray-300 text-[0.9vw]">Add New Income</h2>
                              <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    
                                    <label htmlFor="">Date</label>
                                    <input type="date" className="input-form outline-0 p-3 w-full rounded-2xl" value={date} onChange={(e) => setDate(e.target.value)}/>

                                    <label htmlFor="">Amount ($)</label>
                                    <input type="number" className="input-form outline-0 p-3 w-full rounded-2xl" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)}/>

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

                                    <label htmlFor="">Description/Notes</label>
                                    <textarea name="" id="" className="input-form outline-0 p-3 w-full rounded-2xl" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                                    <button className="w-full my-4 rounded-3xl bg-white active:scale-[0.98] duration-[0.2s] will-change-transform text-black p-1 cursor-pointer ">+ Add Income Entry</button>
                              </form>
                        </div>

                        <div className="income-3 data-panel w-[43%] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4">

                        </div>

                  </div>

            </div>
      </div>

  )
}

export default Income
