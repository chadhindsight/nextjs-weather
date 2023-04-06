/* eslint-disable @next/next/no-img-element */
import { Paper, TextInput, Button, Text, Group } from '@mantine/core'
import { useState } from 'react'


const key = process.env.NEXT_PUBLIC_API

export default function Home() {
  const [cityInput, setCityInput] = useState("")
  const [weahterData, setWeatherData] = useState<any>({})

  const getWeatherData = async () => {
    try {
      const serverResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${key}&units=imperial`)
      const data = await serverResponse.json();
      setCityInput("")
      setWeatherData(data)
    }

    catch (error) {
      console.log(error)
    }
  }

  return (
    <main
      style={{
        position: 'static',
        height: '100vh',
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')"
      }}
    >
      <section
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Paper withBorder p='lg' style={{ maxWidth: '500px' }}>
          <Group position='apart'>
            <Text size='lg'>
              Enter a city and get the weather below
            </Text>
          </Group>
          <Group position='apart'>
            <TextInput
              label='City Name'
              placeholder='ex: San Diego'
              onChange={(e) => setCityInput(e.target.value)}
              value={cityInput}
            />
          </Group>
          <Group position='apart'>
            <Button variant='gradient' size='md' onClick={getWeatherData}>Get Current Weather</Button>
          </Group>
          {!Object.keys(weahterData).length ?
            null :
            <>
              <Group position='left'>
                <Text size="md">
                  {weahterData.name}
                </Text>
              </Group>
              <Group position='left'>
                <img
                  src={`https://openweathermap.org/img/wn/${weahterData?.weather[0]?.icon}@4x.png`}
                  width="100px"
                  height="100px"
                  alt='Matching weather icon'
                />
                <Text size='lg' weight={500}>
                  It is currently {weahterData.main.temp} &deg;F
                </Text>
              </Group>
            </>
          }
        </Paper>
      </section>
    </main>
  )
}
