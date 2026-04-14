export async function getText() {
  const res = await fetch(`https://dummyjson.com/quotes/random`);
  const data = await res.json();
  return data;
}
