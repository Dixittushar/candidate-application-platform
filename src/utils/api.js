const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
};

export const fetchJobsData = async (offset, limit) => {
  //   const raw = JSON.stringify({ offset, limit });
  const response = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};
