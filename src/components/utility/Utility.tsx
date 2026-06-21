/* Design System */

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function H1({className="",children}:{className?:string,children:ReactNode}) {
  return (
    <h1 className={cn('text-4xl font-extrabold tracking-tight text-balance',className)}>
      {children}
    </h1>
  )
}

export function H2({className="",children}:{className?:string,children:ReactNode}) {
  return (
    <h1 className={cn('text-3xl font-semibold tracking-tight',className)}>
      {children}
    </h1>
  )
}

export function H3({className="",children}:{className?:string,children:ReactNode}) {
  return (
    <h1 className={cn('text-2xl font-semibold tracking-tight',className)}>
      {children}
    </h1>
  )
}

export function H4({className="",children}:{className?:string,children:ReactNode}) {
  return (
    <h1 className={cn('text-xl font-semibold tracking-tight',className)}>
      {children}
    </h1>
  )
}

export function P({className="",children}:{className?:string,children:ReactNode}) {
  return (
    <p className={cn('text-base',className)}>
      {children}
    </p>
  )
}

export function Layout({children}:{children:ReactNode}){
    return(
        <>
        {children}
        </>
    )
}

export function Section({children,className=""}:{children:ReactNode,className?:string}){

    return(
        <section className={className}>
          {children}  
        </section>
    )
}

export function Container({children,className=""}:{children:ReactNode,className?:string}){

    return(
        <div className={className}>
           {children} 
        </div>
    )
}



