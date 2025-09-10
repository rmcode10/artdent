import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const supabase = createServerComponentClient({ headers, cookies });

export const GET = async () => {
  try {
    const { data: appointments, error: appointmentsError } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    return new Response(JSON.stringify({ appointments }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  try {
    const appointment = await req.json();

    await supabase.from("appointments").insert({
      name: appointment.name,
      phone: appointment.phone,
      message: appointment.message,
      created_at: new Date().toISOString(),
    });
    return new Response(
      JSON.stringify({ message: "Appointment created successfully" }),
      {
        status: 200,
      },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
