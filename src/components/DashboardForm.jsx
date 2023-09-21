import { Edit } from "@mui/icons-material";
import {
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import SavedDetails from "./SavedDetails";
import React from "react";
import Allowance from "./Allowance";
import AllowanceDetails from "./AllowanceDetails";


const DashboardForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="w-[95%] mx-auto">
      <div className="bg-[#D7D0FF] border rounded py-1 flex justify-between mt-8">
        <div className="flex gap-6 pl-8">
          <Divider className="bg-purple-800 border rounded w-1 h-6 my-auto"></Divider>
          <p className="text-start">Corporate Information</p>
        </div>
        <Link to="/register">
          <Edit />
        </Link>
      </div>
      <SavedDetails />
      <div className="flex gap-6 justify-between">
        <div className="w-full">
          <div className="bg-[#D7D0FF] border rounded py-1 flex justify-between mt-8">
            <div className="flex gap-6 pl-8">
              <Divider className="bg-purple-800 border rounded w-1 h-6 my-auto"></Divider>
              <p className="text-start">Allowances</p>
            </div>
            <a className="cursor-pointer" onClick={handleOpen}>
              <Edit />
            </a>
            {/* modal */}
            <Allowance open={open} setOpen={setOpen} />
          </div>
          <AllowanceDetails />
        </div>
        <div className="w-full">
          <div className="bg-[#D7D0FF] w-full  border rounded py-1 flex justify-between mt-8">
            <div className="flex gap-6 pl-8">
              <Divider className="bg-purple-800 border rounded w-1 h-6 my-auto"></Divider>
              <p className="text-start">Others</p>
            </div>
            <Edit />
          </div>
          <div>
            <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                Retention Rate Of New Graduate Hires
              </h3>
              <p className="pl-12 flex-grow my-auto">Over 50%</p>
            </div>
            <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                Work Style ( Overseas Bases )
              </h3>
              <p className="pl-12 flex-grow my-auto text-green-500">Yes</p>
            </div>
            <div className="flex">
              <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                Working Environment
              </h3>
              <p className="pl-12 flex-grow my-auto">Not Working</p>
            </div>

          </div>
          <div>
          <div className="w-full">
            <div className="bg-[#D7D0FF] w-full  border rounded py-1 flex justify-between mt-8">
              <div className="flex gap-6 pl-8">
                <Divider className="bg-purple-800 border rounded w-1 h-6 my-auto"></Divider>
                <p className="text-start">Holidays</p>
              </div>
              <Edit />
            </div>
            <div>
              <div className="flex">
                <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                  Summer Holidays
                </h3>
                <p className="pl-12 flex-grow my-auto text-green-500">Yes</p>
              </div>
              <div className="flex">
                <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                  Golden Weeks
                </h3>
                <p className="pl-12 flex-grow my-auto text-green-500">Yes</p>
              </div>
              <div className="flex">
                <h3 className="bg-gray-200 px-10 py-2 text-xs font-semibold w-[70%]">
                  Other Holidays
                </h3>
                <p className="pl-12 flex-grow my-auto text-green-500">Yes</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;
