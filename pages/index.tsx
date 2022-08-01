import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = ({children}:any) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Bralink&apos;s App</title>
          <meta name="description" content="Perfil y proyectos de Brayan Morales" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div style={{paddingTop: '100px'}}>
        {children}
      </div>
    </>
)}

export default Index
