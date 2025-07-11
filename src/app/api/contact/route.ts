import { FormData } from "@/app/contact/page";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await req.json() as FormData;

        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}