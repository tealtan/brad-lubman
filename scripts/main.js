var contentfulClient = contentful.createClient({
  accessToken: '44f2b286e394198df930d60481ade424c2fead723f88767b154e1ce4ef560bcf',
  space: '8730t1z03k68'
})

function renderEvents(events) {
  return '<div class="events">' +
    events.map(renderSingleEvent).join('\n') +
    '</div>'
}

// Load events in a year
function loadEventsInYear(year) {
  contentfulClient.getEntries({
    content_type: 'event',
    'fields.date[lte]': (year+1)+'-01-01T00:00:00Z',
    'fields.date[gte]': year+'-01-01T00:00:00Z',
    order: 'fields.date'
  })
  .then(function(entries) {
    $('.eventsContainer #eventSpan-'+year).html(renderEvents(entries.items))
  })
}

var currentYear = (new Date()).getFullYear();
var previousYear = currentYear - 1;

// Load events in the current season
// contentfulClient.getEntries({
//   content_type: 'events',
//   'fields.date[lte]': currentYear+'-01-01T00:00:00Z',
//   'fields.date[gte]': previousYear+'-08-01T00:00:00Z',
//   order: 'fields.date'
// })
// .then(function(entries) {
//   $('.eventsContainer #eventSpan-'+previousYear).html(renderEvents(entries.items));
//   loadEventsInYear(currentYear);
// })

var monthName = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

function formatEventDate(fields) {
  if (fields.multipleDates)
    return fields.multipleDates
  else
    var [year, month, day] = fields.date.split('-')
    return monthName[Number(month-1)] + ' ' + parseInt(day, 10) + ', ' + year
}

function formatEventURL(url) {
  if (url)
    return '<p><a href="' + url + '">Learn More</a></p>'
  else
    return ''
}

function renderSingleEvent(event) {
  var fields = event.fields
  // console.log(fields)
  return '<div class="event drawer drawerClosed">' +
    '<div class="eventHead">' +
      '<span class="eventDate">' +
        formatEventDate(fields) +
      '</span>' +
      '<div class="eventHeadline">' +
        '<div class="eventName">' +
          fields.name +
          ' • ' +
          fields.location +
        '</div>' +
        '<div class="eventEnsemble">' +
          fields.ensemble +
        '</div>' +
      '</div>' +
      '<div class="drawerToggle"></div>' +
    '</div>' +
    '<div class="eventDetails drawerContents">' +
      marked((fields.description.replace(/(^|[^\n])\n(?!\n)/g, "$1<br />") || "")) +
      formatEventURL(fields.url) +
    '</div>' +
    '</div>'
}

$(function() {

  loadEventsInYear(currentYear);
  loadEventsInYear(previousYear);

  $('body').on('click', '.drawer', function() {
    $(this).toggleClass('drawerClosed');
  });

});