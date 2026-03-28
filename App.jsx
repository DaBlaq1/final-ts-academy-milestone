import Header from './components/Header'
import VideoSection from './components/VideoSection'
import PlanetGrid from './components/PlanetGrid'
import DataTable from './components/DataTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
<Header />
      <main id="main">
        <VideoSection />
        <PlanetGrid />
        <DataTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
