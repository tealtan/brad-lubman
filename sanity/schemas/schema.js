// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import sectionTop from './sectionTop'
import sectionAbout from './sectionAbout'
import sectionEvents from './sectionEvents'
import sectionRecordings from './sectionRecordings'
import sectionVideo from './sectionVideo'
import sectionGallery from './sectionGallery'
import sectionContact from './sectionContact'

import navLink from './navLink'
import event from './event'
import recording from './recording'
import recordingLink from './recordingLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    blockContent,

    sectionTop, navLink,
    sectionAbout,
    sectionEvents, event,
    sectionRecordings, recording, recordingLink,
    sectionVideo,
    sectionGallery,
    sectionContact,
  ]),
})
