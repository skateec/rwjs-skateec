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
          <p>Play a game of skate, with this handy little letter tracker tool!</p>
        </header>

        <section className="wrapper style4 special container medium">
          <div className="content">
            <Sk8Game />
            <p>{'[Put skate game component here, use react state to manage a list, with buttons to add/remove letters, last name standing wins]'}</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default Sk8Page
