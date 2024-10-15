import React from "react";
import {useNavigate} from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate();
    return (
      <div className="bg-white w-64 h-screen px-6 py-8 shadow-lg">
        <h1 className="text-xl font-bold mb-10">BankDash</h1>
        <ul className="space-y-8">
          <li className="flex items-center space-x-4 text-blue-600">
            <span className="text-lg">🏠</span>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">💰</span>
            <span>Transactions</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">📂</span>
            <span>Accounts</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">💼</span>
            <span>Investments</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">💳</span>
            <span>Credit Cards</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">🏦</span>
            <span>Loans</span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="text-lg">⬅</span>
            <span onClick={()=>navigate('/')}>Logout</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  