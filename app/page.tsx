import Image from 'next/image'
import Landing from './components/Landing'
import HomePrograms from './components/HomePrograms'
import HomeAssessment from './components/HomeAssessment'

export default function Home() {
  return (
    <main className="">
      <Landing />
      <HomePrograms />
      <HomeAssessment />
    </main>
  )
}
