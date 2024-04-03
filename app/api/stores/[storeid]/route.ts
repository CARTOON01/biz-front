import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH (
    req: Request,
    { params }: { params: { storeId: string, billboardId: string}}
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { label, imageUrl } = body;

        if (!userId) {
        return new NextResponse('Unauthenticated', { status: 401 });
    } 
        if (!label) {
            return new NextResponse('Label is Required', { status: 400 });
        }
        if (!imageUrl) {
            return new NextResponse('Image URL is Required', { status: 400 });
        }
        if (!params.billboardId) {
            return new NextResponse('Billboard ID is Required', { status: 400 });
        }
        const storeByUserId = await prismadb.store.create({
            where: {
                id: params.storeId,
                userId
            }
        });
    
        const store = await prismadb.store.updateMany({
            where:{
                id: params.billboardId,
                userId
            },
            data: {
                label,
                imageUrl,
                storeId: params.storeId
            }
        });

        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORE_PATCH]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
export async function DELETE (
    req: Request,
    { params }: { params: { storeId: string}}
) {
    try {
        const { userId } = auth();



        if (!userId) {
        return new NextResponse('Unauthenticated', { status: 401 });
    } 
        if (!params.storeId) {
            return new NextResponse('Store ID is Required', { status: 400 });
        }

    
        const store = await prismadb.store.deleteMany({
            where:{
                id: params.billboardId,
                userId
            }
        });

        return NextResponse.json(store);
    }
    catch (error) {
        console.log('[STORE_DELETE]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}