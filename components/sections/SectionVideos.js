import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default function SectionListen() {
  return (
    <>
      <Container>
        <Section>
          <SectionHeader text="Video" id="video" />

          <div className="videos">
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/BXVjf_FSqpc?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/OvMKc_kCib0?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/s0zTyVw_DWE?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/C5fCEnY4tDE?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/sALVUTtYcqo?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/yyUBZ5B0FUA?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/dtQEqX836lg?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/OaevbdI2BXQ?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/m3lqmwHY180?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/mNC6IeXMo10?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/pzVCyhSeHMY?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/eyGBNfnpMTE?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/6Fta0b4yvp0?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://player.vimeo.com/video/290694658?color=ffffff&amp;byline=0&amp;portrait=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/40_ddTj_okE?rel=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://player.vimeo.com/video/63062677?color=ffffff&amp;byline=0&amp;portrait=0"
            ></iframe>
            <iframe
              width="475"
              height="273"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
              src="https://www.youtube.com/embed/dCEAof8adKk?rel=0"
            ></iframe>
          </div>
        </Section>
      </Container>
      <style jsx>{`
        .videos {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .videos iframe {
          background-color: #000;
          margin-bottom: 15px;
        }

        @media screen and (min-width: 1024px) {
          .videos iframe {
            height: 300px;
            width: calc(50% - 25px);
            margin-bottom: 50px;
          }
        }
      `}</style>
    </>
  )
}
