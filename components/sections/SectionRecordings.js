import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import Recording from '../Recording'

class SectionListen extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
        <Container>
          <Section>
            <div
              className="sidebar"
              dangerouslySetInnerHTML={{ __html: this.props.sidebar }}
            ></div>
            <SectionHeader text="Recordings" id="recordings" />
            <div className="albums">
              {Object.values(this.props.recordings).map((recording, i) => (
                <Recording key={recording._id} {...recording} />
              ))}
            </div>
          </Section>
        </Container>
        <style jsx>{`
          @media screen and (max-width: 720px) {
            .sectionName {
              margin-bottom: 60px;
            }
          }

          .sidebar {
            float: right;
            width: 125px !important;
          }

          @media screen and (min-width: 1024px) {
            .sidebar {
              margin-top: 22px;
            }
          }

          .albums,
          .videos {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
        `}</style>
      </>
    )
  }
}

export default SectionListen
