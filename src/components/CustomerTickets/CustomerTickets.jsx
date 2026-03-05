import React from "react";

const CustomerTickets = ({ tickets = [], onTicketClick }) => {
  // Remove the useEffect as tickets are now passed as props

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-500";
      case "In-Progress":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50";
      case "Medium":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    const year = date.getFullYear().toString();

    return `${month}/${day}/${year}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-300"
            onClick={() => onTicketClick && onTicketClick(ticket)}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-gray-900">{ticket.title}</h3>
              <div
                className={`flex items-center  gap-1 px-2 py-1 rounded-full ${getStatusColor(ticket.status)} text-white text-xs`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {ticket.status}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {ticket.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  #{ticket.id}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded ${getPriorityColor(ticket.priority)}`}
                >
                  {`${ticket.priority.toUpperCase()} PRIORITY `}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-sm text-gray-500">{ticket.customer}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(ticket.createdAt || ticket.date)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
