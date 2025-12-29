import { prisma } from "@/app/lib/prisma";

async function EditUser({params}:{params:Promise<{id:number}>})
{
    const {id} = await params;

    //copy add user form data here...

    const data = await prisma.users.findFirst({


        where:{


            UserID:id,
        },
    });
    
}