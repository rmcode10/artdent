const baseUrl =
  typeof window === "undefined"
    ? process.env.BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const getPrices = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/prices`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.status} → ${errorText}`);
    }
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.log("Error fetching prices:", error);
    return [];
  }
};
