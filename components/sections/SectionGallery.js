import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

class SectionGallery extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <Container>
          <Section>
            <div id="gallery">
              <SectionHeader text={this.props.title} id="photos" />
              <div className="galleryWindow">
                <div className="galleryContainer">
                  {Object.values(this.props.images).map((image) => (
                    <img alt="" key={image._key} src={image.url} />
                  ))}
                </div>
              </div>
              <figcaption>{this.props.photoCredit}</figcaption>
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
}

export default SectionGallery
