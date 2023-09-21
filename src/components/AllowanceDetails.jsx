
const AllowanceDetails = () => {
    const allowanceData = localStorage.getItem('allowance')
    const allowance = JSON.parse(allowanceData);
    console.log(allowance)
    return (
        <div>
          {
            allowance && 
            <div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Salary System Based On Meritocracy
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.salary === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.salary}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              120 Or More Annual Holidays
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.holidays === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.holidays}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Generous Welfare Benefits
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.welfare === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.welfare}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Enhanced Education And Training
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.training === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.training}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Support System For Acquiring Qualification
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.qualification === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.qualification}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Reduced Working Hours System
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.workingHour === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.workingHour}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Maternity Care Leave System
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.maternity === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.maternity}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Company Housing / Rent Subsidy
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.housing === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.housing}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Family Allowance
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.allowance === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.allowance}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Employee Stock Ownership
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.stock === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.stock}</p>
            </div>
                <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Side Job Available
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.job === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.job}</p>
            </div>
                {allowance.mentor && <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Mentor System
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.mentor === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.mentor}</p>
            </div>}
                {allowance.career && <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
              Career Consulting
              </h3>
              <p className={`pl-12 flex-grow my-auto ${allowance.career === "Yes" ? "text-green-500" : "text-red-500"}`}>{allowance.career}</p>
            </div>}
            </div>
          }  
        </div>
    );
};

export default AllowanceDetails;