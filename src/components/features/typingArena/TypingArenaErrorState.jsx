import Error from "@/components/ui/Error";

function TypingArenaErrorState({ message, onRetry }) {
  return <Error message={message} onRetry={onRetry} />;
}

export default TypingArenaErrorState;
