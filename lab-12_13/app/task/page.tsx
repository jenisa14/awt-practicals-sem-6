import { prisma } from "../lib/prisma";


async function TaskList(){
 
   
    const data = await prisma.tasks.findMany({});
    console.log("Data:",data)

    return(


        <>
        <div>

            <h2>Task List</h2>
            <table border ={1}>

                <thead>
                    <tr>
                        <th>TaskTitle</th>
                        <th>TaskDescription</th>
                       
                    </tr>
                </thead>

                <tbody>
                    {data.map((t)=>(

                        <tr key ={t.TaskID}>

                            <td>{t.TaskTitle}</td>
                            <td>{t.TaskDescription}</td>
                         
                        </tr>
                    ))
                    }
                </tbody>


            </table>
        </div>
        </>
    )
}
export default TaskList;