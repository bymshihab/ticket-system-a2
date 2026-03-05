import React from 'react';

const TaskStatus = () => {
  const taskStatuses = [
    {
      title: "Payment Failed - Card Declined",
      status: "Complete",
      priority: "HIGH PRIORITY"
    },
    {
      title: "Incorrect Billing Address", 
      status: "Complete",
      priority: "LOW PRIORITY"
    }
  ];

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Task Status</h2>
      
      <div className="space-y-4">
        {taskStatuses.map((task, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">{task.title}</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="btn px-4 py-2 bg-green-500 text-white text-sm rounded-md w-full text-center">
                {task.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
