import React from "react";

const DropdownButton = ({ onChange }) => {

    return (
        <div className="w-full lg:max-w-xs ">
            <select onChange={(e) => {
                onChange(e.target.value)
            }}
                className="w-full p-2.5 text-gray-500 bg-indigo-100 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value="all">Filter by</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
            </select>

        </div>
    );
}
export default DropdownButton;