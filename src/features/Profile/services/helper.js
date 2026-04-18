export function formatTimestamp(isoDateString) {
  if (!isoDateString) return "Unknown time";

  const date = new Date(isoDateString);
  if (Number.isNaN(date.getTime())) return "Unknown time";

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
