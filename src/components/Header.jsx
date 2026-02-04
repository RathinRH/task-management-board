function Header() {
  return (
    <header className="h-20 border-b border-white/10 px-10 flex items-center bg-background-dark/60 backdrop-blur-lg">
      <div>
        <h1 className="text-xl font-bold text-white tracking-wide">
          Task Management Board
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Kanban Board 
        </p>
      </div>
    </header>
  );
}

export default Header;
