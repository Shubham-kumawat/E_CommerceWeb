// import React from "react";
// import { IoMdClose } from "react-icons/io";

// function SearchBar({ value, onChange, onClose }) {
//   return (
//     <div className="w-full px-4 sm:px-10 py-4 border-b border-gray-300 flex items-center justify-between">
//       <input
//         type="text"
//         placeholder="Search"
//         value={value}
//         onChange={onChange}
//         className="flex-grow px-4 py-2 border border-gray-400 rounded focus:outline-none"
//       />
//       <button onClick={onClose} className="ml-4 text-lg font-medium flex items-center gap-1 hover:text-red-600">
//         <IoMdClose size={22} /> Close
//       </button>
//     </div>
//   );
// }

// export default SearchBar;
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SearchBar({ value, onChange }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // ya jo bhi home route ho
  };

  return (
    <div className="w-full px-4 sm:px-10 py-4 border-b border-gray-300 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="flex-grow px-4 py-2 border border-gray-400 rounded focus:outline-none"
      />
      <button onClick={handleClose} className="ml-4 text-lg font-medium flex items-center gap-1 hover:text-red-600">
         Close
      </button>
    </div>
  );
}

export default SearchBar;
