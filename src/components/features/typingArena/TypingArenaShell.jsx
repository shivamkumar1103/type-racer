function TypingArenaShell({ onClick, children }) {
  return (
    <div
      className="group relative w-full max-w-5xl cursor-text rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6 lg:p-8"
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
}

export default TypingArenaShell;
