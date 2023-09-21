
const SavedDetails = () => {
    const savedData = localStorage.getItem("data");
    const data = JSON.parse(savedData)
    console.log(data);
    return (
        <div>
             {
            data&& <div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Business Description</h3>
                    <p className="pl-12 flex-grow my-auto">{data.businessDescription}</p>
                </div>
                {data.philosophy && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Corporate Philosophy</h3>
                    <p className="pl-12 flex-grow my-auto">{data.philosophy}</p>
                </div>}
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Company Name</h3>
                    <p className="pl-12 flex-grow my-auto">{data.companyName}</p>
                </div>
                {data.industry && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Industry</h3>
                    <p className="pl-12 flex-grow my-auto">{data.industry}</p>
                </div>}
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Mail ID</h3>
                    <p className="pl-12 flex-grow my-auto">{data.email}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Phone Number</h3>
                    <p className="pl-12 flex-grow my-auto">{data.phone}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Location</h3>
                    <p className="pl-12 flex-grow my-auto">{data.location}</p>
                </div>
                {data.website && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Website</h3>
                    <p className="pl-12 flex-grow my-auto">{data.website}</p>
                </div>}
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Working Hours</h3>
                    <p className="pl-12 flex-grow my-auto">{data.workingHour}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Establishment Date</h3>
                    <p className="pl-12 flex-grow my-auto">{data.date}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Initial Capital</h3>
                    <p className="pl-12 flex-grow my-auto">{data.capital}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Representative</h3>
                    <p className="pl-12 flex-grow my-auto">{data.representative}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Branch</h3>
                    <p className="pl-12 flex-grow my-auto">{data.branch}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Number Of Employees</h3>
                    <p className="pl-12 flex-grow my-auto">{data.employees}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Sales Revenue</h3>
                    <p className="pl-12 flex-grow my-auto">{data.sales}</p>
                </div>
                <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Operation Profit</h3>
                    <p className="pl-12 flex-grow my-auto">{data.profit}</p>
                </div>
                {data.averageAge && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Average Age Of Employees</h3>
                    <p className="pl-12 flex-grow my-auto">{data.averageAge}</p>
                </div>}
                {data.stock && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Stock</h3>
                    <p className="pl-12 flex-grow my-auto">{data.stock}</p>
                </div>}
                {data.linkedin && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Linkedin Link</h3>
                    <p className="pl-12 flex-grow my-auto">{data.linkedin}</p>
                </div>}
                {data.twitter && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Twitter Link</h3>
                    <p className="pl-12 flex-grow my-auto">{data.twitter}</p>
                </div>}
                {data.facebook && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Facebook Link</h3>
                    <p className="pl-12 flex-grow my-auto">{data.facebook}</p>
                </div>}
                {data.instagram && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Instagram Link</h3>
                    <p className="pl-12 flex-grow my-auto">{data.instagram}</p>
                </div>}
                {data.youtube && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Youtube Link</h3>
                    <p className="pl-12 flex-grow my-auto">{data.youtube}</p>
                </div>}
                {data.foreignOwned && <div className="flex">
                    <h3 className="bg-gray-200 px-10 py-2 text-md font-semibold w-60">Foreign Owned</h3>
                    <p className={`pl-12 flex-grow my-auto ${data.foreignOwned === "Yes" ? "text-green-500" : "text-red-500"}`}>{data.foreignOwned}</p>
                </div>}
            </div>
        }
        </div>
    );
};

export default SavedDetails;