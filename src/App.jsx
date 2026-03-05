import "./App.css";
import InprogressCard from "./components/Hero/InprogressCard/InprogressCard";
import ResolvedCard from "./components/Hero/ResolvedCard/ResolvedCard";
import Navbar from "./components/navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import ResolvedTask from "./components/ResolvedTask/ResolvedTask";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-20 gap-5 mb-20">
          <InprogressCard />
          <ResolvedCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          <div className="lg:col-span-3">
            <CustomerTickets />
          </div>
          <div className="space-y-5">
            <TaskStatus />
            <ResolvedTask />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
