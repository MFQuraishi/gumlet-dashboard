import { NextResponse } from "next/server";
import allData from "../adhocData/allData";

export async function GET() {
    return NextResponse.json(allData, {status: 200})    
}
