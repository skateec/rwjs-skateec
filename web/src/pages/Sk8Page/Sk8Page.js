import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Sk8Game from 'src/components/Sk8Game/Sk8Game'

const Sk8Page = () => {
  return (
    <>
      <MetaTags title="Sk8" description="Sk8 page" />

      <article id="main">
        <header className="special container">
          <span className="icon solid fa-hashtag"></span>
          <h2>sk8</h2>
          <p>Play a game of skate, and keep track of who has what letters here!</p>
        </header>

        <section className="wrapper style4 special container medium">
          <div className="content">
            <Sk8Game />
          </div>
        </section>
      </article>
    </>
  )
}

export default Sk8Page
