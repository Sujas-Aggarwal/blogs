import client from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    client.connect();
    const db = client.db("blogs");
    const collection = db.collection("blogs");
    const result = await collection.find({}).toArray();
    return NextResponse.json(result, { status: 200 });
}
