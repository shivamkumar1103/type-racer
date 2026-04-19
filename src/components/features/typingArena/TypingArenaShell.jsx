function onPointerDown(e, handler) {
  const interactiveTarget = e.target.closest(
    "button, input, textarea, select, a, [role='button']",
  );

  if (!interactiveTarget) {
    e.preventDefault();
    handler?.();
  }
}

function TypingArenaShell({ onClick, children }) {
  return (
    <div
      className="group relative w-full max-w-5xl cursor-text rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6 lg:p-8"
      onPointerDown={(e) => onPointerDown(e, onClick)}
      role="presentation"
    >
      {children}
    </div>
  );
}

export default TypingArenaShell;
