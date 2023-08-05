import { NextResponse, NextRequest } from "next/server";
import allData from "../adhocData/allData";
import { generateRandomData } from "./utils";

export async function GET(req: NextRequest) {
    try {
        let filter = req.nextUrl.searchParams.get("filter")
        if (filter === "default") {
            return NextResponse.json(allData, {status: 200})    
        } else {
            return NextResponse.json(generateRandomData(), {status: 200})    
        }
    } catch(err) {
        console.log("Error Logged", err);
        return NextResponse.json({}, {status: 500})    
    }
}
