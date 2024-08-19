import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Footer from './Components/Footer/Footer'
import Cards from './Components/Cards/Cards'
import SelectBox from './Components/SelectBox/SelectBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="fatherDiv">

        <div className="headerDiv">
          <Header />
        </div>

        <div className="cardsDiv">

          <Cards name={"Zhumail"} friendImg={"../../src/assets/react.svg"} description={"anfsdjfnjadfgldngladfngjdfngkfndgl"} />
          <Cards name={"Zazzy"} friendImg={"../../src/assets/react.svg"} description={"anfsdjfnjadfgldngladfngjdfngkfndgl"} />
          <Cards name={"Zamzam"} friendImg={"../../src/assets/react.svg"} description={"anfsdjfnjadfgldngladfngjdfngkfndgl"} />

        </div>

        
          
        <div className="footerDiv">
          <Footer />
        </div>


      </div>
    </>
  )
}


export default App
