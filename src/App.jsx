import "./App.css";
import InprogressCard from "./components/Hero/InprogressCard/InprogressCard";
import ResolvedCard from "./components/Hero/ResolvedCard/ResolvedCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-20 gap-5 mb-20">
          <InprogressCard />
          <ResolvedCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">

        </div>
      </div>
    </>
  );
}

export default App;
