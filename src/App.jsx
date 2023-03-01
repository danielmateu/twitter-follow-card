

import './App.css'
import { TwitterFollwCard } from './components/TwitterFollwCard'
// import { Button } from './components/Button'
// import { perfil } from "./assets/perfil.png";
import dani from './assets/dani.png'
import silvia from './assets/silvia.jpg'
import nuk from './assets/nuk.jpg'

function App() {

  const formatUserName = (userName) => `@${userName}`
  // no buena práctica
  // const daniel = {
  //   formatUserName,
  //   userName  : 'danielmateu',
  //   name      : 'Daniel Mateu',
  //   img : dani
  // }

  const users = [
    {
      formatUserName,
      userName  : 'danielmateu',
      name      : 'Daniel Mateu',
      img : dani
    },
    {
      formatUserName,
      userName  : 'silviacazorla',
      name      : 'Silvia Cazorla',
      img : silvia
    },
    {
      formatUserName,
      userName  : 'nukpmateucazorla',
      name      : 'Nuk Mateu Cazorla',
      img : nuk
    }
  ]

  return (
    <section className='App'>
      {/* <TwitterFollwCard {...daniel}/> */}
      {/* // mejor practica, más declarativo */}
      {/* <TwitterFollwCard
        formatUserName={formatUserName}
        userName={'silviacazorla'}
        name={'Silvia Cazorla'}
        img={silvia}
      /> */}
      {/* <TwitterFollwCard
        formatUserName={formatUserName}
        userName={'nukpmateucazorla'}
        name={'Nuk Mateu Cazorla'}
        img={nuk}
      /> */}
      {users.map((user, index) => (
        <TwitterFollwCard key={index} {...user} />
      ))}
    </section>
  )
}

export default App
