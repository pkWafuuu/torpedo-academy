import Image from 'next/image'
import Landing from './components/Landing'
import HomePrograms from './components/HomePrograms'

export default function Home() {
  return (
    <main className="">
      <Landing />
      <HomePrograms />
    </main>
  )
}
