import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      <main className="p-10 h-[calc(100vh-80px)]">
        <Board />
      </main>
    </div>
  );
}

export default App;
