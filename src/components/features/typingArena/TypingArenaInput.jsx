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
    />
  );
}

export default TypingArenaInput;
