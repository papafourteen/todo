import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebaseApp";
import { useEffect } from "react"

export const UserContext=createContext()


export const UserProvider=({children})=>{
    const[user,setUser]=useState(null)


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
        return()=>unsubscribe()
    },[])
    const logoutUser=async ()=>{
        await signOut(auth)
    }
    const loginUser=async (email,pw)=>{
      console.log(email,pw)
        try{
          await signInWithEmailAndPassword(auth,email,pw)
        }catch(err){
          console.log(err.message);
        }
      }
    
    return(
        <UserContext.Provider value={{user,logoutUser,loginUser}}>
            {children}
        </UserContext.Provider>
    )
}