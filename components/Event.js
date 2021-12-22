import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

function formatDate(date) {
  if (!date) {
    return null;
  }

  const monthNames = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.'
  ]
  const month = monthNames[Number(date.substr(5, 2)) - 1]
  const day = Number(date.substr(8, 2))
  const year = date.substr(0, 4)
  return month + ' ' + day + ', ' + year
}

class Event extends React.Component {
  state = {
    events: [],
    drawerHidden: true
  }

  componentDidMount() {
    // this.fetchEventsFromCurrentSeason().then(this.setEvents)
    console.log(this.props)
  }

  toggleDrawer() {
    this.setState({
      drawerHidden: !this.state.drawerHidden
    })
    console.log(this.state.drawerHidden)
  }

  render() {
    return (
      <>
        <div
          ref="drawer"
          className= {`event drawer ${this.state.drawerHidden ? "drawerClosed" : ""}`}
          onClick={this.toggleDrawer.bind(this)}
        >
          <div className="eventHead">
            <span className="eventDate">
              {this.props.dateString || formatDate(this.props.date)}
            </span>
            <div className="eventHeadline">
              <span className="eventName">{this.props.title}</span>
              <span className="eventLocation">{this.props.location}</span>
            </div>
            <div className={`drawerToggle ${this.state.drawerHidden ? "drawerClosed" : ""}`} />
          </div>
          {!this.state.drawerHidden && (
            <div className="eventDetails drawerContents">
              <BlockContent
                blocks={this.props.description}
                imageOptions={{ w: 750, fit: 'max' }}
              />
              {this.props.url && (
                <p><a href={this.props.url}>Learn More</a></p>
              )}
            </div>
          )}
        </div>

        <style jsx>{`
          .event {
            position: relative;
            padding: 10px 0 14px 0;
            border-top: 3px solid #000;
            font-size: 18px;
            line-height: 28px;
          }

          @media screen and (max-width: 720px) {
            .event {
              font-size: 16px;
              line-height: 24px;
            }

            .eventDate,
            .eventName,
            .eventLocation {
              display: block;
              width: calc(100% - 70px);
            }

            .eventDate {
              font-size: 11px;
              text-transform: uppercase;
            }

            .eventName {
              line-height: 18px;
              margin: 0 0 5px 0;
            }

            .eventLocation {
              font-size: 14px;
              line-height: 16px;
            }
          }

          .eventName {
            font-weight: 700;
            display: block;
          }

          .eventDetails a {
            display: block;
            color: #ff0058;
          }

          .event .drawerToggle {
            float: none;
            position: absolute;
            top: 30px;
            right: 15px;
            background: url('/images/icon-plus-red@2x.png');
            background-size: 100%;
          }

          .event .eventDetails {
            margin-top: 15px;
          }

          @media screen and (min-width: 1024px) {
            .event {
              padding: 20px 0 17px 0;
            }

            .eventHead {
              display: flex;
            }

            .eventDate {
              flex: 0 0 200px;
            }

            .eventHeadline {
              flex: 0 0 735px;
            }

            .eventName {
              display: inline;
              margin-right: 10px;
            }

            .eventDetails {
              margin-left: 200px;
            }

            .event .drawerToggle {
              position: static;
              flex-basis: 50px;
              margin: -13px 0px -15px 0;
            }

            .event .eventDetails {
              margin-top: 30px;
              margin-bottom: 30px;
            }
          }
        `}</style>
        <style global jsx>{`
          .event .eventDetails div p {
            margin-bottom: 0;
            min-height: 1.5rem;
          }
        `}
        </style>
      </>
    )
  }
}

export default Event
