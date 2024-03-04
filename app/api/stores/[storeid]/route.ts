import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH (
    req: Request,
    { params }: { params: { storeid: string}}
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
        return new NextResponse('Unauthenticated', { status: 401 });
    } 
        if (!name) {
            return new NextResponse('Name is Required', { status: 400 });
        }
        if (!params.storeid) {
            return new NextResponse('Store ID is Required', { status: 400 });
        }
}
    
    catch (error) {
        console.log('[STORE_PATCH]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}