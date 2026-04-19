function TypingArenaInput({ inputRef, userInput, handleChange, disabled }) {
  return (
    <input
      ref={inputRef}
      type="text"
      value={userInput}
      onChange={handleChange}
      autoFocus
      className="absolute h-0 w-0 opacity-0"
      disabled={disabled}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
    />
  );
}

export default TypingArenaInput;
