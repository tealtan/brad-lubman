import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

class SectionAbout extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
        <Container>
          <Section>
            <SectionHeader text="About" id="about" />
            <div className="flex">
              <div className="drawerContents">
                <BlockContent
                  blocks={this.props.body}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
              </div>
              <div
                className="sidebar"
                dangerouslySetInnerHTML={{ __html: this.props.sidebar }}
              ></div>
            </div>
          </Section>
        </Container>
        <style jsx>{`
          .drawer:not(.drawerClosed) .drawerContents {
            padding-top: 20px;
          }

          .aboutMore {
            display: block;
            margin-top: 20px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
          }

          .drawer:not(.drawerClosed) .aboutMore {
            display: none;
          }

          @media screen and (min-width: 1024px) {
            .drawer:not(.drawerClosed) .drawerContents {
              padding-top: 30px;
            }

            .aboutMore {
              font-size: 18px;
              line-height: 28px;
            }
          }
        `}</style>
        <style global jsx>
          {`
            @media screen and (max-width: 720px) {
              .sidebar {
                display: none;
              }
            }
          `}
        </style>
      </>
    )
  }
}

export default SectionAbout
