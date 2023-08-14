import './App.css'
import Navigation from './components/Navigations'
import Main from './components/Main'
import './index.css'
import LogoSection from './components/LogoSection'
import SectionTitle from './components/SectionTitle'
import PointsList from './components/pointsSection/PointsList'
import CallToAction from './components/CallToAction'
import SidePointsSection from './components/sidePointsSection/SidePointsSection'

function App() {
  return (
  <div>
    <Navigation />
    <Main />
    <LogoSection />
    <SectionTitle classN={'text-center mx-40 mb-12'} pill={'FEATURES'} title={'Gain more insight into how people use your'} subtitle={'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'} />
    <PointsList />
    <CallToAction />
    <SectionTitle classN={'mx-40 mb-12'} pill={'FEATURES'} title={'Gain more insight into how people use your'} subtitle={'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'} />
    <SidePointsSection />
  </div>
  )
}

export default App
