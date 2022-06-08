import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.content}>
        <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn1.expertreviews.co.uk%2Fsites%2Fexpertreviews%2Ffiles%2F2015%2F09%2Fcanon_lens_.jpg&f=1&nofb=1'/>
        <div className={styles.bar}></div>
        <h1>Experience the world through the eyse of the artists</h1>
     </div>
    </div>
  )
}