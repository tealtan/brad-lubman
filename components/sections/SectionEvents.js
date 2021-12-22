import React from 'react'

import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import Event from '../Event'

class SectionEvents extends React.Component {
  state = { events: [] }

  componentDidMount() {
    // this.fetchEventsFromCurrentSeason().then(this.setEvents)
    this.setEvents()
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
    const eventsArray = Object.values(this.props)
    this.setState({ events: eventsArray })
    // console.log(response.items)
  }

  render() {
    return (
      <>
        <Container>
          <Section>
            <SectionHeader text="Events" id="events" />
            <div>
              {this.state.events.map((event) => (
                <>
                  <Event key={event._id} {...event} />
                </>
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
