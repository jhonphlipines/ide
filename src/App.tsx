import { Navbar } from './components/Navbar';
import { ProblemDescription } from './components/ProblemDescription';
import { EditorSection } from './components/EditorSection';

function App() {
  return (
    <div className="flex flex-col h-screen bg-dark-bg text-dark-text overflow-hidden">
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        {/* Left Side - Problem Description */}
        <div className="w-1/3 border-r border-dark-border">
          <ProblemDescription />
        </div>

        {/* Right Side - Editor and Console */}
        <div className="flex-grow">
          <EditorSection />
        </div>
      </main>
    </div>
  );
}

export default App;
