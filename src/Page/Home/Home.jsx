import Header from '../../Components/Header/Header'
import Steps from '../../Components/Steps/Steps'
import Banniere from '../../Components/Banniere/Banniere'
import Footer from '../../Components/Footer/Footer'
import './Home.css'



export default function Home() {
 
  console.log('recherche')

  return (

    <div>
     <Header/>
     <Banniere/>
     <div className='home-orga'>
     <Steps/>
     <Footer/>
     </div>
    </div>
  )
}

