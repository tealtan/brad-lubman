import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import Event from '../Event'

class SectionEvents extends React.Component {
  state = { events: [] }

  // client = contentful.createClient({
  //   space: 'iyieuwr67lde',
  //   accessToken:
  //     '9b3f98f7a8648b0c76f7f43338b478be21b2b2cb13b7d1b1d81488de3ce2d3b3'
  // })

  componentDidMount() {
    // this.fetchEventsFromCurrentSeason().then(this.setEvents)
  }

  fetchEventsFromCurrentSeason() {
    var currentYear = new Date().getFullYear()
    // return this.client.getEntries({
    //   content_type: 'events',
    //   'fields.date[gte]': currentYear - 1 + '-01-01T00:00:00Z',
    //   order: 'fields.date'
    // })
  }

  fetchEventsFromYear = (year) => {
    // this.client.getEntries({
    //   content_type: 'events',
    //   'fields.date[lte]': year + 1 + '-01-01T00:00:00Z',
    //   'fields.date[gte]': year + '-01-01T00:00:00Z',
    //   order: 'fields.date'
    // })
  }

  setEvents = (response) => {
    this.setState({ events: response.items })
    // console.log(response.items)
  }

  render() {
    return (
      <>
        <Container>
          <Section>
            <SectionHeader text="Events" id="events"/>
            <div>
              {this.state.events.map((event) => (
                <Event
                  key={event.fields.slug}
                  date={event.fields.date}
                  dateString={event.fields.multipleDates}
                  name={event.fields.name}
                  location={event.fields.location}
                  description={event.fields.description}
                  url={event.fields.url}
                />
              ))}
            </div>
          </Section>
        </Container>
        <style jsx>{``}</style>
      </>
    )
  }
}

export default SectionEvents
