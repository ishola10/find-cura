import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrends = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/chart/trend`);
    if (!res.data || !res.data.chartData) {
      throw new Error("Network response was not ok");
    }

    return res.data.chartData.map((item: any) => ({
      location: item.state?.name || "Unknown",
      product: item.foodProduct?.name || "N/A",
      quantity: item.quantity?.name || "Unknown",
      price: `₦${item.data?.dataPoints?.[0]?.y?.toLocaleString() || 0}`,
      trend: item.data?.trend || "neutral",
      image: item.foodProduct?.image || "/icons/icons8-bread-and-rye-64.png",
      alt: item.foodProduct?.name || "Product",
    }));
  } catch (error) {
    console.error("Error fetching market data:", error);
    return [];
  }
};
