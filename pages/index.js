import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { getSession, useSession } from "next-auth/react"
export default function Home() {
  const { data: session, loading } = useSession()
  // console.log(session, loading)
  return (
    <div className={styles.container}>
      <h1>{session?.user.name}</h1>
    </div>
  )
}
