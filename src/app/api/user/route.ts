import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello, This is User API!" });
}
//viết api như này