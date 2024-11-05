// lib/fetchData.ts
export async function fetchData(family: string, id: string) {
  try {
    const response = await fetch(
      `http://158.247.250.204:8080/disease/info?family=${family}&id=${id}`
    );
    const data = await response.json();

    if (!data) {
      throw new Error('No data found');
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
