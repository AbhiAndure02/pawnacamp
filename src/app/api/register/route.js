import { db } from "@/lib/db";
import User from "@/models/user";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // Destructure data from the request
        const {email, name, mobile, whatsapp, whatsappNumber, numberOfChildren, numberOfAdults, numberOfVeg, numberOfNonVeg, bookingDate } = await req.json();

       // Basic input validation
        if (!email || !name || !mobile || !whatsappNumber) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
       await db();

       await User.create({
        email,
        name,
        mobile,
        whatsapp,
        whatsappNumber,
        numberOfChildren,
        numberOfAdults,
        numberOfVeg,
        numberOfNonVeg,
        bookingDate,  // Assuming bookingDate is a valid date object in the request data
       })

        // Success response
        return NextResponse.json({ message: "Success" }, { status: 201 });

    } catch (error) {
        // Log the error for debugging
        console.error(error)
        // General error response
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(){
    try{
    await db();
    const users = await User.find({});
    return NextResponse.json(users)
    }
    catch(error){
        console.error(error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}
