"use server";

const LOOPS_API_URL = "https://app.loops.so/api/v1/contacts/create";

interface WaitlistResult {
  success: boolean;
  error?: string;
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    console.error("LOOPS_API_KEY is not set");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const res = await fetch(LOOPS_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "landing_page",
      }),
    });

    if (res.status === 409) {
      return { success: true };
    }

    if (!res.ok) {
      const body = await res.text();
      console.error(`Loops API error (${res.status}):`, body);

      if (res.status === 401) {
        return { success: false, error: "Server configuration error." };
      }
      return { success: false, error: "Could not join the waitlist. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Loops API request failed:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
