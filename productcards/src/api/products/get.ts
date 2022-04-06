export const getData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
      "X-RapidAPI-Key": "6eeb52144dmsh0d57ab0d76dd4eep1cd943jsnb32688adc6cc",
    },
  };

  const response = await fetch(
    "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=99&gender=men&page=10&brand=new%20balance%2C%20nike%2C%20puma%2C%20adidas%2C%20asics",
    options
  );
  const data = await response.json();
  return data;
};
