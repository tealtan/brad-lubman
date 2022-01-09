import React from 'react'

class Recording extends React.Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
        <div className="album">
          <img loading="lazy" alt={this.props.title} src={this.props.cover + "?h=300&w=300&auto=format&q=75"} />
          <div className="albumLinks">
            {Object.values(this.props.links).map((recording) => (
              <a key={recording._key} href={recording.linkUrl}>
                {recording.linkText}
              </a>
            ))}
          </div>
        </div>
        <style jsx>{`
          .album {
            position: relative;
            width: 45%;
            height: 45%;
            margin: 0 15px 15px 0;
          }

          .album img {
            width: 100%;
            height: 100%;
          }

          .albumLinks {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          @media screen and (min-width: 1024px) {
            .album {
              position: relative;
              width: 300px;
              height: 300px;
              margin: 0 0 50px 0;
            }

            .album:nth-child(3n + 1),
            .album:nth-child(3n + 2) {
              margin-right: 50px;
            }

            .albumLinks {
              position: absolute;
              width: 300px;
              height: 300px;
            }
          }

          .albumLinks a {
            display: block;
            font-size: 18px;
            line-height: 28px;
            font-weight: 700;
            text-align: center;
            color: #fff;
          }

          .albumLinks a:hover {
            text-decoration: underline;
          }

          .albumLinks {
            opacity: 0;
            transition: opacity 0.2s ease-out;
          }

          .albumLinks:hover {
            opacity: 0.75;
          }
        `}</style>
      </>
    )
  }
}

export default Recording
