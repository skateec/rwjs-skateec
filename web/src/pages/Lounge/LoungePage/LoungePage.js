import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoungePage = () => {
  return (
    <>
      <MetaTags title="Lounge" description="Lounge page" />

      <article id="main">
        <header className="special container">
          <span className="icon solid fa-couch"></span>
          <h2>The Skate <strong>Lounge</strong></h2>

          <p>Welcome to the Skate Lounge, where relevant information for users will be displayed eventually.</p>
        </header>

        <section className="wrapper style4 special container medium">
          <div className="content">
            <p>{'[Put user stuff here]'}</p>
          </div>
        </section>
      </article>
    </>
  )
}

export default LoungePage
