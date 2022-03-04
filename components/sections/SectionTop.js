import React from 'react'

import Container from '../Container'

class SectionTop extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <header>
          <div
            className="coverImage"
            style={{
              backgroundImage:
                "url('" +
                this.props.backgroundImage.url +
                '?w=1400&auto=format&q=75' +
                "')",
            }}
          >
            <Container>
              <div className="logo">
                <h1>{this.props.title}</h1>
                <figcaption>{this.props.photoCredit}</figcaption>
              </div>
            </Container>
          </div>
          <Container>
            <ul id="mainNav">
              {Object.values(this.props.links).map((navLink) => (
                <li key={navLink._key}>
                  <a href={navLink.linkUrl}>{navLink.linkText}</a>
                </li>
              ))}
            </ul>
          </Container>
        </header>
        <style jsx>{`
          /* Header */

          .coverImage {
            position: relative;
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 90vh;
            max-height: 750px;
          }

          @media screen and (max-width: 600px) {
            .coverImage {
              background-color: #000000;
              /* background-size: 100%; */
              background-repeat: no-repeat;
            }
          }

          header .logo {
            margin: 0 auto;
            /* border-top: 10px solid #fff; */
            width: 100%;
            padding-top: 15px;
          }

          header .logo h1 {
            color: #fff;
            font-size: 60px;
            text-transform: uppercase;
          }

          header .logo figcaption {
            position: absolute;
            color: #666;
            right: 15px;
            bottom: 15px;
          }

          @media screen and (max-width: 1024px) {
            header .logo {
              width: calc(100% - 40px);
              margin: 0 auto;
            }
            header .logo h1 {
              font-size: 42px;
            }
            #mainNav {
              display: none;
            }
          }

          @media screen and (min-width: 1024px) {
            header .logo {
              width: 1000px;
            }

            #mainNav {
              display: flex;
              justify-content: flex-start;
              margin: 0 auto 45px 0;
              /* border-top: 5px solid #000; */
            }

            #mainNav li {
              list-style: none;
            }
          }

          #mainNav a {
            display: block;
            padding: 32px 0;
            margin: 0 30px 0 0;
            font-size: 45px;
            line-height: 22px;
            font-weight: 700;
          }
        `}</style>
        <style global jsx>{``}</style>
      </>
    )
  }
}

export default SectionTop
