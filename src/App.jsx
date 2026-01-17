import Board from "./components/Board";
import Column from "./components/Column";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
        Task Management Board
      </h1>

      <Board>
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Done" />
      </Board>
    </div>
  );
}

export default App;
