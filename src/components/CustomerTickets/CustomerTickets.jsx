import React, { useState, useEffect } from 'react';

const CustomerTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/data/tickets.json');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500';
      case 'In-Progress':
        return 'bg-yellow-500';
      case 'Closed':
        return 'bg-gray-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH PRIORITY':
        return 'text-red-600 bg-red-50';
      case 'MEDIUM PRIORITY':
        return 'text-yellow-600 bg-yellow-50';
      case 'LOW PRIORITY':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Customer Tickets</h2>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading tickets...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Customer Tickets</h2>
        <div className="text-center py-8">
          <div className="text-red-500 mb-2">Error loading tickets</div>
          <div className="text-gray-500 text-sm">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Customer Tickets</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                <div className={`flex items-center  gap-1 px-2 py-1 rounded-full ${getStatusColor(ticket.status)} text-white text-xs`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {ticket.status}
                </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {ticket.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">{ticket.id}</span>
                <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
                <span className="text-sm text-gray-500">{ticket.customer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {ticket.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
