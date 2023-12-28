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

export const schemaTypes = [
  blockContent,

  sectionTop, navLink,
  sectionAbout,
  sectionEvents, event,
  sectionRecordings, recording, recordingLink,
  sectionVideo,
  sectionGallery,
  sectionContact,
]
