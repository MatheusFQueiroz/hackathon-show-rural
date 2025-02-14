import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    const url = new URL(request.url)
    const imageId = url.imageId;
    console.log(imageId);
    return new Response(JSON.stringify(imageId),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}