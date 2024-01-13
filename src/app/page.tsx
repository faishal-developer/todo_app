'use client'

import { paths } from "@/services/paths"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router=useRouter()

  useEffect(()=>{
    router.push(paths.login)
  },[])
  return (
    <main>
      
      
    </main>
  )
}
