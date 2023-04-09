export const getCareers = async () => {
  const response = await fetch("https://codeleap-backend.vercel.app/api/careers/");
  const data = await response.json();
  return data
};

