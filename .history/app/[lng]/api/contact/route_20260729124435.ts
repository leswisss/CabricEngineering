// import { google } from "googleapis";

// // Define your type for clarity
// type SheetForm = {
//   name: string;
//   email: string;
//   phone: string;
//   country: string;
//   message: string;
// };

// export async function POST(request: Request) {
//   try {
//     // Parse the JSON body from the incoming request
//     const body: SheetForm = await request.json();

//     const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY
//       ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/"/g, "")
//       : undefined;

//     // Prepare authentication with Google
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: formattedPrivateKey,
//       },
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({
//       auth,
//       version: "v4",
//     });

//     // Append values to your Google Sheet
//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "A1:E1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           [
//             body.name,
//             body.email,
//             body.phone.replace(/\s+/g, ""),
//             body.country,
//             body.message,
//           ],
//         ],
//       },
//     });

//     // Return a successful response with JSON
//     return new Response(JSON.stringify({ data: response.data }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e) {
//     const errorMessage =
//       e instanceof Error ? e.message : "Something went wrong";
//     return new Response(JSON.stringify({ message: errorMessage }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import { NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: SheetForm = await request.json();

    // Catch missing env vars early with a clear error
    if (
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error("❌ Missing required Google environment variables");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const formattedPrivateKey = process.env.GOOGLE_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ).replace(/"/g, "");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: formattedPrivateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Safely handle country whether it arrives as a string or object
    const countryValue =
      typeof body.country === "object" && body.country !== null
        ? (body.country as { name?: string })?.name ?? ""
        : body.country ?? "";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:E1", // column range is safer than A1:E1 for appending
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name ?? "",
            body.email ?? "",
            body.phone ? body.phone.replace(/\s+/g, "") : "",
            countryValue,
            body.message ?? "",
          ],
        ],
      },
    });

    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : "Something went wrong";
    console.error("❌ Contact form API error:", errorMessage);
    // NextResponse.json guarantees the status code reaches the client correctly
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
