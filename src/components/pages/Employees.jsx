import Home from "./Home"
import { useEffect, useState } from "react";

const Employees = () => {

    //useState
      const [isOpenEm, setIsOpenEm] = useState(false);
      const [selectedEm, setSelectedEm] = useState("");

      const [isStatus, setIsStatus] = useState(false);
      const [selectedStatus, setSelectedStatus] = useState("");

      let [nameEm,setNameEm] = useState("")
      let [emailEm,setEmailEm] = useState("")
      let [phoneEm,setPhoneEm] = useState("")
      let [jobEm,setJobEm] = useState("")
      let [salaryEm,setSalaryEm] = useState("")
      let [dateEm,setDateEm] = useState("")
      let [descEm,setDescEm] = useState("")
      let [AllError , setAllError] = useState({
            nameEm: "",
            emailEm: "",
            phoneEm: "",
            jobEm: "",
            salaryEm: "",
            dateEm: "",
            descEm: "",
            dropSel1: "",
            dropSel2: "",
            
      })
      let [AllEntries , setAllEntries] = useState([])
    //useState

    //variables
    const totalPayroll = AllEntries.reduce((store , emp) => store + Number(emp.salaryEm),0)
    const avgSalary = AllEntries.length > 0 ? totalPayroll / AllEntries.length : 0;
    //variables

      const optionsEm = [
      "Engineering",
      "Marketing",
      "Sales",
      "Human Resources",
      "Finance",
      "Operations",
      "Customer Support",
      "Other"
      ];

      const status = [
      "Active",
      "Inactive",
      "On Leave",
      ];

      const handleSelectEm = (value) => {
            setSelectedEm(value);
            setIsOpenEm(false);
      };
      const handleStatus = (value) => {
            setSelectedStatus(value);
            setIsStatus(false);
      };
      
      
      let handleSubmitEm = (e) => {
          e.preventDefault()

          if(!nameEm || !emailEm || !phoneEm || !jobEm || !salaryEm || !dateEm || !descEm || !selectedEm || !selectedStatus ){
                  setAllError({
                        nameEm: !nameEm ? "Please enter a Name" : "",
                        emailEm: !emailEm ? "Please enter an Email" : "",
                        phoneEm: !phoneEm ? "Please enter a Phone number" : "",
                        jobEm: !jobEm ? "Please enter a Job title" : "",
                        salaryEm: !salaryEm ? "Please enter a Salary" : "",
                        dateEm: !dateEm ? "Please select a Date" : "",
                        descEm: !descEm ? "Please enter a Description" : "",
                        dropSel1: !selectedEm ? "Please select a Department" : "",
                        dropSel2: !selectedStatus ? "Please select a Status" : "",
            })
          }
          else{
            setAllError({ nameEm: "", emailEm: "", phoneEm: "", jobEm: "", salaryEm: "", dateEm: "", descEm: "", dropSel1: "", dropSel2: ""})
            let newEntriesEm = {
                  nameEm,
                  emailEm,
                  phoneEm,
                  jobEm,
                  salaryEm,
                  dateEm,
                  descEm,
                  selectedEm,
                  selectedStatus,
                  
            }
            
            

            setAllEntries(AllEntries => [newEntriesEm,...AllEntries])
            
            setNameEm("");
            setEmailEm("");
            setPhoneEm("");
            setJobEm("");
            setSalaryEm("");
            setDateEm("");
            setDescEm("");
            setSelectedEm("");
            setSelectedStatus("");
          }         

      }

      
      let handleDeleteEm = (index) => {
            setAllEntries(
                  prev => prev.filter((ele , i) => i !== index)
            )
      }

      const handleAddressChange = (index, newAddress) => {
            setAllEntries(prev => prev.map((item, i) => i === index ? { ...item, descEm: newAddress } : item)
            );
      };

  return (
        <div>
              <Home></Home>
                  <div className="view-panel w-full lg:w-[82.6%] h-[92vh] fixed right-[0.1%] bottom-2 p-3 overflow-y-scroll flex flex-col gap-7">

                         
                        <div className="main-em-1 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                              
                              <div className="employee-1 data-panel flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px]">Total Employees</h2>
                                    <div className="text-[#7ba5ff] text-3xl sm:text-4xl break-words break-all whitespace-normal">{AllEntries.length}</div>
                                    <div className="text-gray-300 text-[14px] sm:text-[15px] break-words break-all whitespace-normal">{AllEntries.filter(emp => emp.selectedStatus === "Active").length} active</div>
                              </div>

                              <div className="employee-1 data-panel flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px]">Total Payroll</h2>
                                    <div className="text-[#01a63e] text-3xl sm:text-4xl break-words break-all whitespace-normal">
                                          ₹{AllEntries.reduce((store,current) => store + Number(current.salaryEm), 0)
                                          .toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})}
                                    </div>
                                    <div className="text-gray-300 text-[14px] sm:text-[15px]">Annual salaries</div>
                              </div>

                              <div className="employee-1 data-panel flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px] ">Avg. Salary</h2>
                                    <div className="text-[#7cf8aa] text-3xl sm:text-4xl break-words break-all whitespace-normal">
                                          ₹{avgSalary.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <div className="text-gray-300 text-[14px] sm:text-[15px]">Per employee</div>
                              </div>

                        </div>

                        
                        <div className="main-em-2 flex flex-col lg:flex-row justify-between gap-6">

                             
                              <div className="employee-2 data-panel w-full lg:w-[55%] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4">

                                    <h2 className="text-gray-300 text-[18px]">Add New Employee</h2>

                                    <form action="" onSubmit={(e) => handleSubmitEm(e)} className="flex flex-col gap-4">
                              
                                          <div className="div flex flex-col sm:flex-row justify-between gap-3">
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Full Name</label>
                                                      <input type="text" placeholder="Aum Mehta" className="input-form outline-0 p-3 w-full rounded-2xl" value={nameEm} onChange={(e) => setNameEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.nameEm}</div>
                                                </div>
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Email</label>
                                                      <input type="email" placeholder="aum@company.com" className="input-form outline-0 p-3 w-full rounded-2xl" value={emailEm} onChange={(e) => setEmailEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.emailEm}</div>
                                                </div>
                                          </div>

                                          <div className="div flex flex-col sm:flex-row justify-between gap-3">
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Phone</label>
                                                      <input type="number" placeholder="+1 123-456-7890" className="input-form outline-0 p-3 w-full rounded-2xl" value={phoneEm} onChange={(e) => setPhoneEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.phoneEm}</div>
                                                </div>
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Job Role</label>
                                                      <input type="text" placeholder="Software Developer" className="input-form outline-0 p-3 w-full rounded-2xl" value={jobEm} onChange={(e) => setJobEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.jobEm}</div>
                                                </div>
                                          </div>

                                          <div className="div flex flex-col sm:flex-row justify-between gap-3">
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Department</label>
                                                      <div className="relative w-full input-form outline-0 p-2 rounded-2xl bg-[#171717]">
                                                      <div className="bg-[#171717] text-white p-2 rounded-2xl cursor-pointer select-none flex items-center justify-between" onClick={() => setIsOpenEm(!isOpenEm)}>
                                                            {selectedEm || "Select department"} 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                                                      </div>
                                                      {isOpenEm && (
                                                            <div className="absolute left-0 top-full mt-1 w-full bg-[#171717] rounded-2xl overflow-hidden border border-[#333] z-10">
                                                            {optionsEm.map((opt) => (
                                                            <div key={opt} onClick={() => handleSelectEm(opt)} className="p-2 text-white cursor-pointer hover:bg-[#2a2a2a]">
                                                                  {opt}
                                                            </div>
                                                            ))}
                                                            </div>
                                                      )}
                                                      </div>
                                                      <div className="text-red-400">{AllError.dropSel1}</div>
                                                </div>
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Annual Salary ($)</label>
                                                      <input type="number" placeholder="80000" className="input-form outline-0 p-3 w-full rounded-2xl" value={salaryEm} onChange={(e) => setSalaryEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.salaryEm}</div>
                                                </div>
                                          </div>

                                          <div className="div flex flex-col sm:flex-row justify-between gap-3">
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Start Date</label>
                                                      <input type="date" className="input-form outline-0 p-3 w-full rounded-2xl" value={dateEm} onChange={(e) => setDateEm(e.target.value)}/>
                                                      <div className="text-red-400">{AllError.dateEm}</div>
                                                </div>
                                                <div className="w-full sm:w-[50%]">
                                                      <label>Status</label>
                                                      <div className="relative w-full input-form outline-0 p-2 rounded-2xl bg-[#171717]">
                                                      <div className="bg-[#171717] text-white p-2 rounded-2xl cursor-pointer select-none flex items-center justify-between" onClick={() => setIsStatus(!isStatus)}>
                                                            {selectedStatus || "Select status"} 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                                                      </div>
                                                      {isStatus && (
                                                            <div className="absolute left-0 top-full mt-1 w-full bg-[#171717] rounded-2xl overflow-hidden border border-[#333] z-10">
                                                            {status.map((opt) => (
                                                            <div key={opt} onClick={() => handleStatus(opt)} className="p-2 text-white cursor-pointer hover:bg-[#2a2a2a]">
                                                                  {opt}
                                                            </div>
                                                            ))}
                                                            </div>
                                                      )}
                                                      </div>
                                                      <div className="text-red-400">{AllError.dropSel2}</div>
                                                </div>
                                          </div>

                                          <div className="div">
                                                <label>Address</label>
                                                <textarea placeholder="123 Main St, City, State 12345" className="input-form outline-0 p-3 w-full rounded-2xl" value={descEm} onChange={(e) => setDescEm(e.target.value)}></textarea>  
                                                <div className="text-red-400">{AllError.descEm}</div>
                                          </div>

                                          <button className="w-full my-4 rounded-3xl bg-white active:scale-[0.98] duration-[0.2s] will-change-transform text-black p-1 cursor-pointer">+ Add employee</button>
                              </form>
                              </div>

                              {/* Employee Directory */}
                              <div className="main-em-3 div-scroll my-5 lg:my-0 data-panel w-full lg:w-[43%] max-h-[67.4vh] bg-[#171717] rounded-3xl flex flex-col gap-4 text-white p-4 overflow-y-auto">
                              <h2 className="text-gray-300 text-[18px]">Employee Directory</h2>
                              {AllEntries.map((item, index) => (
                              <div key={index} className="p-2 flex flex-col gap-2 bg-[#3e3e3e] rounded-lg mt-1">
                                    
                                    <div className="amount-div flex flex-wrap justify-between items-center">
                                          <div className="flex flex-wrap items-center gap-2">
                                                <p className="text-[#7ba5ff] text-lg sm:text-xl">{item.nameEm}</p> 
                                                <span className="bg-[#4f6663] rounded-3xl py-0.5 px-2.5">{item.selectedStatus}</span>
                                                <span className="bg-[#5a5a5a] rounded-3xl py-0.5 px-2.5">{item.selectedEm}</span>
                                          </div>
                                          <svg className="entries-delete h-5 w-5 text-red-500 cursor-pointer" onClick={() => handleDeleteEm(index)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </div>

                                    
                                    <div className="detail-info flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12 lg:gap-20 w-full">
                                          
                                          <div className="flex flex-col gap-2 w-full sm:w-1/2">
                                          <div className="flex items-center gap-2 break-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8.27q-1.038 0-1.77-.731t-.73-1.77T17.23 4T19 3.27t1.77.73t.73 1.77t-.73 1.769t-1.77.73M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h9.947q-.043.25-.053.49q-.009.24.014.51q.04.762.316 1.44q.274.677.734 1.221L12 11L4.308 6L4 6.885l8 5.23l4.314-2.819q.54.458 1.225.716q.684.257 1.461.257q.512 0 1.027-.125T21 9.77v7.616q0 .69-.462 1.152T19.385 19z"/></svg>
                                                <span>{item.emailEm}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m13.406 19.854l-5.727-5.977q-.087-.086-.133-.197q-.046-.11-.046-.243v-.398q0-.278.188-.466t.466-.188H10.5q1.517 0 2.759-.959t1.268-2.734H7q-.213 0-.356-.144q-.144-.143-.144-.356t.144-.356T7 7.692h7.42q-.31-1.182-1.388-1.937T10.5 5H7q-.213 0-.356-.144T6.5 4.499t.144-.356T7 4h10q.213 0 .356.144t.144.357t-.144.356T17 5h-3.442q.715.425 1.24 1.146t.656 1.546H17q.213 0 .356.144t.144.357t-.144.356t-.356.143h-1.467q-.008 2.125-1.52 3.409q-1.511 1.284-3.513 1.284H8.602l5.523 5.761q.239.245.11.55q-.127.304-.468.304q-.105 0-.197-.036q-.091-.037-.164-.11"/></svg>
                                                <span className="break-words break-all whitespace-normal">{Number(item.salaryEm).toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})} / year</span>
                                          </div>
                                          </div>

                                          
                                          <div className="flex flex-col gap-2 w-full sm:w-1/2">
                                          <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3"/></svg>
                                                <span>{item.phoneEm}</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <p className="me-1 font-medium">Started:</p>
                                                <span>{item.dateEm}</span>
                                          </div>
                                          </div>
                                    </div>


                                    
                                    <div className="div flex w-full gap-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472"/></svg>
                                          <textarea className="income-desc w-full text-[#f8f8f8] overflow-y-scroll border border-[#80808059] rounded-2xl outline-0 p-2" value={item.descEm} onChange={(e) => handleAddressChange(index, e.target.value)}></textarea>
                                    </div>
                              </div>
                              ))}
                              </div>

                        </div>
                      

                  </div>
        </div>
  )
}

export default Employees
