export const getCareers = async () => {
  const response = await fetch("/api/careers/");
  const data = await response.json();
  return data
};

