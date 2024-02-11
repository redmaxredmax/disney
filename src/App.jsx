import { MainLayout } from "./components/layout/main-layout"
import { Bundle } from "./components/sections/bundle/bundle"
import { Devices } from "./components/sections/devices/devices"
import { Hero } from "./components/sections/hero"
import { Plan } from "./components/sections/plan"
import { Questions } from "./components/sections/questions/questions"
import { Watch } from "./components/sections/watch"



function App() {
  return(
    <MainLayout>
      <Hero/>
      <Plan/>
      <Watch/>
      <Bundle/>
      <Devices/>
      <Questions/>
    </MainLayout>
  )
}

export default App
