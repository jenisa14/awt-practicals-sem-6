"use client";

import { AddUserAction } from "../actions/AddUserAction";

export default function AddUserBtn(){



    return(


        <>
        <div>
               <form action={AddUserAction} style ={{margin:0}}>


                <button type="submit" style={{backgroundColor:"red",
                    color:"white",
                    padding:"4px 8px",
                    border:"none",
                    cursor : "pointer",
                }}>

                    Add
                </button>
               </form>


               
        </div>
         
        </>
    );
}