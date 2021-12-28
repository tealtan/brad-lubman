// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import sectionAbout from './sectionAbout'
import sectionRecordings from './sectionRecordings'
import sectionGallery from './sectionGallery'
import sectionContact from './sectionContact'

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

    sectionAbout,
    sectionRecordings,
    sectionGallery,
    sectionContact,

    event,
    recording, recordingLink
  ]),
})
