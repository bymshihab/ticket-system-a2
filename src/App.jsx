import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import InprogressCard from "./components/Hero/InprogressCard/InprogressCard";
import ResolvedCard from "./components/Hero/ResolvedCard/ResolvedCard";
import Navbar from "./components/navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedTask from "./components/ResolvedTask/ResolvedTask";
import Footer from "./components/Footer/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);

  useEffect(() => {
    // Fetch tickets from JSON file
    const fetchTickets = async () => {
      try {
        const response = await fetch('/data/tickets.json');
        const data = await response.json();
        setTickets(data);
        
        // No initial count - starts at 0 and only increases when manually added to Task Status
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleTicketClick = (ticket) => {
    // Check if ticket is already in task status
    const isAlreadyInProgress = inProgressTickets.find(t => t.id === ticket.id);
    
    if (!isAlreadyInProgress) {
      // Add to in-progress tickets
      setInProgressTickets(prev => [...prev, ticket]);
      setInProgressCount(prev => prev + 1);
      
      // Show toast notification
      toast.success(`Ticket "${ticket.title}" has been added to Task Status!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleCompleteTask = (ticketId) => {
    // Find the ticket to complete
    const ticketToComplete = inProgressTickets.find(t => t.id === ticketId);
    
    if (ticketToComplete) {
      // 1. Remove from Task Status (in-progress tickets)
      setInProgressTickets(prev => prev.filter(t => t.id !== ticketId));
      
      // 2. Add to Resolved List
      setResolvedTickets(prev => [...prev, ticketToComplete]);
      
      // 3. Decrease In Progress count
      setInProgressCount(prev => prev - 1);
      
      // 4. Resolved count increases automatically (resolvedTickets.length)
      
      // 5. Remove from Customer Tickets list
      setTickets(prev => prev.filter(t => t.id !== ticketId));
      
      // Show toast notification
      toast.success(`Ticket "${ticketToComplete.title}" has been completed!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-20 gap-5 mb-20">
          <InprogressCard count={inProgressCount} />
          <ResolvedCard count={resolvedTickets.length} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          <div className="lg:col-span-3">
            <CustomerTickets 
              tickets={tickets}
              onTicketClick={handleTicketClick} 
            />
          </div>
          <div className="space-y-5">
            <TaskStatus 
              tickets={inProgressTickets} 
              onComplete={handleCompleteTask} 
            />
            <ResolvedTask tickets={resolvedTickets} />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
