import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default function SectionGallery() {
  return (
    <>
      <Container>
        <Section>
          <div id="gallery">
            <SectionHeader text="Photos" id="photos" />
            <div className="galleryWindow">
              <div className="galleryContainer">
                <img
                  alt=""
                  src="https://images.ctfassets.net/8730t1z03k68/6guItOtIxaAycqyoKC4ks2/2cdb4180a411e8ac90fa0d6f61e0bd8e/1-portrait-peterserling.jpg"
                />
                <img
                  alt=""
                  src="https://images.ctfassets.net/8730t1z03k68/6DjjwbSGk0c2kKCYWyQcK2/beb9273f6f09564ba4753ea3a9dd435b/2-portrait-peterserling.jpg"
                />
                <img
                  alt=""
                  src="https://images.ctfassets.net/8730t1z03k68/3M8nb1MWSIMM8I2MeQOs00/7d61a0f2e6b03f6055d73b5d540b7b37/3-portrait-peterserling.jpg"
                />
              </div>
            </div>
            <figcaption>Photos by Peter Serling</figcaption>
          </div>
        </Section>
      </Container>
      <style jsx>{`
        #gallery {
          height: 310px;
        }

        .galleryWindow {
          /* width: 100vw; */
          /* position: absolute; */
          /* left: 0; */
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
        }

        .galleryContainer {
          width: 5000px;
          /* padding: 0 15px; */
        }

        #gallery img {
          float: left;
          height: 270px;
          margin-right: 15px;
        }

        #gallery figcaption {
          /* margin-top: 160px; */
        }

        @media screen and (min-width: 0px) {
          #gallery {
            height: 635px;
          }
          .galleryWindow {
            height: 420px;
          }
          /* .galleryContainer { padding: 0 20px; } */
          #gallery img {
            height: 420px;
          }
          /* #gallery figcaption { margin-top: 435px; } */
        }
      `}</style>
    </>
  )
}
