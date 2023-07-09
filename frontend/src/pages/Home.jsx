import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt, FaPlusSquare } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading' style={{textAlign: "center"}}>
        <h1 style={{color: "#0CAFFF"}}>Welcome to CITY HOSPITAL<sup style={{color:"#8DA399"}} className='logo'><FaPlusSquare/></sup></h1>
        <p>How can we help you?</p>
      </section>

      <div style={{marginTop:"150px"}}>
      <Link style={{marginLeft:"auto", marginRight:"auto", width:"400px", backgroundColor:"#A3C1AD"}} to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link style={{marginLeft:"auto", marginRight:"auto", width:"400px", backgroundColor:"#002244"}} to='/tickets' className='btn btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link>
      </div>
    </>
  )
}

export default Home
