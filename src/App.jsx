import './App.css'
import BestSeling from './Components/Best Selling/BestSeling'
import Cover from './Components/Cover/Cover'
import Cloths from './Components/Designer Cloth/Cloths'
import Offer from './Components/Exclusive Offer/Offer'
import Feedback from './Components/Feedback corner/Feedback'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Header/Nav'
import Products from './Components/Our Products/Products'

function App() {
  

  return (
    <>
      <div>
      <Nav></Nav>
      <Cover></Cover>
       <BestSeling></BestSeling>
       <Products></Products>
       <Offer></Offer>
       <Cloths></Cloths>
       <Feedback></Feedback>
       <Footer></Footer>
      </div>
    </>
  )
}

export default App
