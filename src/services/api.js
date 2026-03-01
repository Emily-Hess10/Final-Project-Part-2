export async function fetchFitnessTip() {
  const res = await fetch("https://api.adviceslip.com/advice");

  if (!res.ok) throw new Error("Failed to fetch tip");

  const data = await res.json();
  return data.slip.advice;
}