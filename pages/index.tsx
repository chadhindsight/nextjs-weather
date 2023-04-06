import { Paper, TextInput, Button, Text, Group } from '@mantine/core'
import { useState } from 'react'


export default function Home() {
  const keyTing = '18436a5aee03555399b6774854293b06'

  const [cityInput, setCityInput] = useState("")
  const [weahterData, setWeatherData] = useState<any>({})

  const getWeatherData = async () => {
    try {
      const serverResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${keyTing}&units=imperial`)
      const data = await serverResponse.json();
      console.log(data)
      setWeatherData(data)
    }

    catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      style={{
        position: 'static',
        height: '100vh',
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')"
      }}
    >
      <div
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
            />
          </Group>
          <Group position='apart'>
            <Button variant='gradient' size='md' onClick={getWeatherData}>Get Current Weather</Button>
          </Group>
        </Paper>
      </div>
    </div >
  )
}
