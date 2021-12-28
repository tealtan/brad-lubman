import React from 'react'

import Container from './Container'
import SectionHeader from './SectionHeader'

import BlockContent from '@sanity/block-content-to-react'

class Footer extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <footer id="contact">
          <Container>
            <SectionHeader text="Contact" id="" color="#fff" />
            <div className="flex">
              <div className="side">
                <h3>{this.props.contactHeading}</h3>
                <BlockContent
                  blocks={this.props.contactBody}
                  imageOptions={{ w: 750, fit: 'max' }}
                />
              </div>
              <div className="form-container">
                <h3>{this.props.formHeading}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.formEmbed }}
                ></div>
              </div>
            </div>
          </Container>
          <Container>
            <span className='copyright'>{new Date().getFullYear()}, Brad Lubman.</span>
          </Container>
        </footer>

        <style jsx>{`
          footer {
            background-color: #000;
            padding: 0 20px 15px;
          }

          footer .form-container {
            padding: 0 15px;
          }

          @media screen and (min-width: 1024px) {
            footer {
              padding: 0 0 20px 0;
            }
            footer .form-container {
              padding: 0;
            }
            footer .side {
              width: 440px;
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

          footer .copyright {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }
        `}</style>
        <style global jsx>{`
          footer p {
            color: #fff;
            margin-bottom: 0;
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

            footer #form {
              width: 500px;
            }
          }
        `}
        </style>
      </>
    )
  }
}

export default Footer
