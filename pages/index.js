import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {books} from '../store/atoms'
import {useRecoilState, RecoilRoot} from 'recoil'
import {Button, Card,Modal} from 'antd'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {

  const router = useRouter()
  const [bookData,setBookData] =  useRecoilState(books)
  const [deleteIndex,setDeleteIndex] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  // function deleteData(){
  //   let oldBook = [...bookData];
  //   oldBook.forEach(item => {
  //     if (item.id == pid) {
  //       item.name = name;
  //       item.author = author;
  //       item.desc = desc
  //     }
  //   })
  
  //   setBookData(oldBook);
  // }

  const handleOk = () => {
    let temp = [...bookData];
    setIsModalVisible(false);
    temp.splice(deleteIndex,1)
    setBookData(temp)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function deleteBook(index){
    setDeleteIndex(index)
    setIsModalVisible(true);
  }


  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={styles.main}>
        <h1>Book List: </h1>
      <Modal
        title="Delete?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are You Sure delete book?</p>
        
      </Modal>
     
        {bookData.map((data,index) => {
          return <Card size="small" title={data.name}>
            <p>Author : {data.author}</p>
            <p>Description : {data.desc}</p>
            <Button onClick={()=>router.push(`/update/${index}`)}>Update</Button>
            <Button onClick={()=>deleteBook(index)}>Delete</Button>
          </Card>
        })}
        
        <Button><Link href="/create">Create Book</Link></Button>
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
