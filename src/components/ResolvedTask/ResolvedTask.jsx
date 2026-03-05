import React from 'react';

const ResolvedTask = ({ tickets = [] }) => {
  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Resolved Task</h2>
        
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Resolved Task</h2>
      
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900 text-sm leading-tight flex-1">
                {ticket.title}
              </h3>
              <div className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Completed
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResolvedTask;
