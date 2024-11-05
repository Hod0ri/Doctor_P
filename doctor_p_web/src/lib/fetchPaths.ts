export async function fetchPaths() {
  try {
    const response = await fetch('http://158.247.250.204:8080/');
    const diseases = await response.json();

    // 데이터 형식에 맞게 paths 배열 생성
    const paths = diseases.map((disease: { family: string; id: string }) => ({
      params: { family: disease.family, id: disease.id },
    }));
    return paths;
  } catch (error) {
    console.error('Error fetching paths:', error);
    return [];
  }
}
