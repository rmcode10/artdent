import clientPromise from "@/server/lib/mongodb";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "artdentdb");

    const prices = await db.collection("prices").find({}).toArray();

    return new Response(JSON.stringify({ data: prices[0].data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error); 
    return new Response(
      JSON.stringify({
        error: "Database connection failed",
        details: error.message, 
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};



export const POST = async (request) => {
  try {
    const newData = await request.json();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "artdentdb");

    await db.collection("prices").replaceOne(
      {},
      { data: newData },
      { upsert: true }
    );

    return new Response(JSON.stringify({ message: "Prices updated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Failed to update prices:", error);
    return new Response("Failed to update prices", { status: 500 });
  }
};
