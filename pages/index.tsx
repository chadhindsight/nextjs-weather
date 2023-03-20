import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Paper } from '@mantine/core'

export default function Home() {
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')"
      }}
    >
      <Paper withBorder p="lg" style={{ maxWidth: '400px' }}></Paper>
    </div >
  )
}
