
"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/app/(modules)/authentication/(infrastucture)/(context)/AuthContext";
import { ROUTES } from "@/app/routes";


export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const {isLogged} = useAuth();


    useEffect(() => {
      if (!isLogged) {
        return redirect(ROUTES.HOME);
      }
    }, []);


    if (!isLogged) {
      return null;
    }

    return <Component {...props} />;
  };
}
