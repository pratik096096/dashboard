import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Home</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Card */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl mb-4">Balance</h3>
            <p className="text-3xl font-bold mb-4 text-white">$5,756</p>
            <div className="mb-4">
              <p className="text-sm text-white">CARD HOLDER</p>
              <p className="font-semibold text-white">Eddy Cusuma</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-white">VALID THRU</p>
              <p className="font-semibold text-white">12/22</p>
            </div>
            <div className="text-lg font-bold text-white">3778 **** **** 1234</div>
          </div>

          {/* Transactions */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl">Recent Transactions</h3>
              <button className="text-blue-600">See All</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-yellow-100 text-yellow-500 rounded-full p-2">💳</span>
                    <div>
                      <p>Deposit from my Card</p>
                      <p className="text-sm text-gray-500">25 January 2021</p>
                    </div>
                  </div>
                  <p className="text-red-500">-$500</p>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-500 rounded-full p-2">💵</span>
                    <div>
                      <p>Deposit Paypal</p>
                      <p className="text-sm text-gray-500">25 January 2021</p>
                    </div>
                  </div>
                  <p className="text-green-500">+$500</p>
                </li>
                <li className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-100 text-green-500 rounded-full p-2">👤</span>
                    <div>
                      <p>Jemi Wilson</p>
                      <p className="text-sm text-gray-500">25 January 2021</p>
                    </div>
                  </div>
                  <p className="text-green-500">+$500</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
