import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Paper, TextInput, Button, Text, Group } from '@mantine/core'
import { useState } from 'react'

export default function Home() {
  const [cityInput, setCityInput] = useState("")
  console.log(cityInput)
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group position="apart">
            <Text size="lg">
              Enter a city and get the weather below
            </Text>
          </Group>
          <Group position="apart">
            <TextInput
              label="City Name"
              placeholder="ex: San Diego"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </Group>
          <Group position="apart">
            <Button variant="gradient" size="md">Get Current Weather</Button>
          </Group>
        </Paper>
      </div>
    </div >
  )
}
