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
                              
                              <div className="employee-1 flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px]">Total Employees</h2>
                                    <div className="text-[#7ba5ff] text-3xl sm:text-4xl">{AllEntries.length}</div>
                                    <div className="text-gray-300 text-[14px] sm:text-[15px]">{AllEntries.filter(emp => emp.selectedStatus === "Active").length} active</div>
                              </div>

                              <div className="employee-1 flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px]">Total Payroll</h2>
                                    <div className="text-[#01a63e] text-3xl sm:text-4xl">
                                          ₹{AllEntries.reduce((store,current) => store + Number(current.salaryEm), 0)
                                          .toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})}
                                    </div>
                                    <div className="text-gray-300 text-[14px] sm:text-[15px]">Annual salaries</div>
                              </div>

                              <div className="employee-1 flex-1 min-w-[250px] bg-[#171717] rounded-3xl flex flex-col text-white p-6 py-10">
                                    <h2 className="text-gray-300 text-[22px] sm:text-[29px]">Avg. Salary</h2>
                                    <div className="text-[#7cf8aa] text-3xl sm:text-4xl">
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

                                    
                                    <div className="detail-info flex flex-col sm:flex-row sm:justify-between gap-4">
                                          <div className="flex flex-col gap-2">
                                                <div className="div flex gap-1">{item.emailEm}</div>
                                                <div className="div flex gap-1">{Number(item.salaryEm).toLocaleString("en-IN" , {minimumFractionDigits : 2, maximumFractionDigits: 2})} / year</div>
                                          </div>
                                          <div className="flex flex-col gap-2">
                                                <div className="div flex gap-1">{item.phoneEm}</div>
                                                <div className="div flex gap-1"><p className="me-1">Started:</p>{item.dateEm}</div>
                                          </div>
                                    </div>

                                    
                                    <div className="div flex w-full gap-1">
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
