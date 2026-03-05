import React from 'react';

const TaskStatus = ({ tickets = [], onComplete }) => {
  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Task Status</h2>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">No tasks in progress yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Task Status</h2>
      
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-100 rounded-lg p-4">
            <div className="mb-3">
              <h3 className="font-medium text-gray-900 text-sm leading-tight">
                {ticket.title}
              </h3>
            </div>
            
            <div className="flex items-center justify-center">
              <button 
                onClick={() => onComplete && onComplete(ticket.id)}
                className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors"
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
