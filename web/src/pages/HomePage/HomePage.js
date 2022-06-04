import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import skateEClogo from 'src/images/skateec-logo.png'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <article id="main">
        <header className="special container">
          <span className="icon solid"><img src={skateEClogo} alt="Skate EC Logo" /></span>
          <h2 className='visually-hidden'>Skate Eau Claire!</h2>

          <p>Welcome to SkateEC, home of all things skateboaring in Eau Claire, WI.</p>
        </header>

        <section className="wrapper style4 special container medium">
          <div className="content">
            <p>Hello World!</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default HomePage
