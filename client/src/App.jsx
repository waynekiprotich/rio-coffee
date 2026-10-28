import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Visit from './sections/Visit'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
