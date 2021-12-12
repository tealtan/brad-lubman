import Container from './Container'
import SectionHeader from './SectionHeader'

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <Container>
          <SectionHeader text="Contact" id="" color="#fff"/>
          <div className="flex">
            <div className="side">
              <h3>For world-wide concert bookings</h3>
              <p>
                <strong>KARSTEN WITT MUSIK MANAGEMENT GMBH <br /></strong
                >Leuschnerdamm 13, d-10999 Berlin, Germany <br />
                Ms. Xenia Groh-Hu, Managing Director <br />
                XH@karstenwitt.com <br />
                +49 30 214 5940
              </p>
            </div>
            <div className="form-container">
              <h3>Drop Brad a message</h3>
              <iframe
                id="form"
                src="https://brad-lubman-contactform.netlify.com"
                height="430px"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </Container>
        <Container>
          <span>{new Date().getFullYear()}, Brad Lubman.</span>
        </Container>
      </footer>

      <style jsx>{`
        footer {
          background-color: #000;
        }
        
        footer {
          padding: 0 20px 15px;
        }
        
        footer .contact-container {
          padding: 0 15px;
        }
        
        footer .sectionName {
          color: #fff;
          /* border-top: 5px solid #fff; */
        }
        
        footer iframe {
          border: none;
          overflow: hidden;
          width: calc(100% - 60px);
        }
        
        @media screen and (min-width: 1024px) {
          footer iframe {
            width: 100%;
          }
        }
        
        @media screen and (min-width: 1024px) {
          footer {
            padding: 0 0 20px 0;
          }
          footer .contact-container {
            padding: 0;
          }
          footer .side {
            width: 440px;
          }
          footer .form {
            width: 500px;
          }
        }
        
        footer h3 {
          display: inline-block;
          border-bottom: 5px solid #fff;
          margin-bottom: 20px;
          padding-bottom: 10px;
          color: #fff;
          font-size: 13px;
          font-family: 'gtam-standard';
        }
        
        footer p {
          color: #fff;
        }
        
        footer span {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }
      `}</style>
    </>
  )
}
