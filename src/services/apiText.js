export async function getText() {
  try {
    const res = await fetch(`https://dummyjson.com/quotes/random`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch text");
  }
}
