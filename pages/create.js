import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {books} from '../store/atoms'

import {useSetRecoilState,useRecoilValue,useRecoilState} from 'recoil'
import {addData} from '../store/selectors'
import {Input,Button} from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'


export default function Create() {
    const [books,setBooks] = useRecoilState(addData);
  // const addBook =  useSetRecoilState(addData)
  const [name, setName] = useState('')
  const [author,setAuthor] = useState('')
  const [desc,setDesc] = useState('')

  const router = useRouter()

  function create (){
      const book = {
          id : books.length,
          name,
          author,
          desc
      }
      console.log(book)
    //  setBooks(book)
    setBooks(books => [...books,book])
     router.push('/')
      
  }

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Add New Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <Input placeholder="Name" onChange={(event)=> setName(event.target.value)} />
        <Input placeholder="Author" onChange={(event) => setAuthor(event.target.value)}/>
        <Input placeholder="Description" onChange={(event) => setDesc(event.target.value)}/>
         <Button onClick={create}>Create Book</Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
