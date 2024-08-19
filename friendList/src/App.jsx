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

          <Cards name={"Rayyan Sajid"} friendImg={"../../src/assets/rayyan.jpg"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur officiis eaque laudantium deleniti numquam."} />
          <Cards name={"Jahanzaib Ali"} friendImg={"../../src/assets/jzb.jpg"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur officiis eaque laudantium deleniti numquam."} />
          <Cards name={"M. Shumail"} friendImg={"../../src/assets/shumail.jpg"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur officiis eaque laudantium deleniti numquam."} />
          <Cards name={"Nameer Iqbal"} friendImg={"../../src/assets/nameer.jpg"} description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur officiis eaque laudantium deleniti numquam."} />

        </div>

        
          
        <div className="footerDiv">
          <Footer />
         
        </div>


      </div>
    </>
  )
}


export default App
