import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <article id="main">

        <header className="special container">
          <span className="icon solid fa-envelope"></span>
          <h2>Get In Touch</h2>
          <p>Use the form below to give us a piece of your mind.</p>
        </header>

        <section className="wrapper style4 special container medium">

          <div className="content">
            <form>
              <div className="row gtr-50">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" rows="7"></textarea>
                </div>
                <div className="col-12">
                  <ul className="buttons">
                    <li><input type="submit" className="special" value="Send Message" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>

        </section>

      </article>
    </>
  )
}

export default ContactPage
