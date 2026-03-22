import { NextRequest } from "next/server";

export async function GET(_req: NextRequest,{ params: { id: string}}){

    console.log(params)
    return Response.json({name:'jenisa',age:21})
}