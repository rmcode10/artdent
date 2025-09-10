import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export async function GET() {
  const supabase = createServerComponentClient({ headers, cookies });

  try {
    const { data: services, error: servicesError } = await supabase
      .from("services")
      .select("*")
      .order("id", { ascending: true });

    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("*")
      .order("id", { ascending: true });

    return new Response(JSON.stringify({ services, categories }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  const supabase = createServerComponentClient({ headers, cookies });

  try {
    const service = await req.json();

    await supabase.from("services").insert({
      name: service.name,
      price: service.price,
      category_id: service.category_id,
    });
    return new Response(
      JSON.stringify({ message: "Service created successfully" }),
      {
        status: 200,
      },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  const supabase = createServerComponentClient({ headers, cookies });

  try {
    const service = await req.json();

    await supabase
      .from("services")
      .update({ name: service.name, price: service.price })
      .eq("id", service.id);

    return new Response(
      JSON.stringify({ message: "Services updated successfully" }),
      { status: 200 },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  const supabase = createServerComponentClient({ headers, cookies });
  try {
    const { id } = await req.json();
    await supabase.from("services").delete().eq("id", id);
    return new Response(
      JSON.stringify({ message: "Service deleted successfully" }),
      { status: 200 },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
