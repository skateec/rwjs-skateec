import Footer from "src/components/Footer"
import Header from "src/components/Header"

const DefaultLayout = ({ children }) => {
  return (
    <div id="page-wrapper">
      <Header />

      {children}

      <Footer />
    </div>
    )
}

export default DefaultLayout
