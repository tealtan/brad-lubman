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
    content_type: 'events',
    'fields.date[lte]': (year+1)+'-01-01T00:00:00Z',
    'fields.date[gte]': year+'-01-01T00:00:00Z',
    order: 'fields.date'
  })
  .then(function(entries) {
    $('.eventsContainer #eventSpan-'+year).html(renderEvents(entries.items))
  })
}

var currentYear = (new Date()).getFullYear();
var nextYear = currentYear + 1;
var previousYear = currentYear - 1;

var monthName = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

function formatEventDate(fields) {
  if (fields.multipleDates)
    return fields.multipleDates
  else
    var [year, month, day] = fields.date.split('-')
    return monthName[Number(month)-1] + ' ' + day + ', ' + year
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
        '<span class="eventName">' +
          fields.name +
        '</span>' +
        '<span class="eventLocation">' +
          fields.location +
        '</span>' +
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

  $('.pastEvents').on('click', function() {
    event.preventDefault();
    var selectedYear = $(this).data('year');
    loadEventsInYear(selectedYear);

    var pos = $('#eventSpan-'+selectedYear).offset();
    $('body').animate({ scrollTop: pos.top - 30 });
  });

  $('body').on('click', '.drawer', function() {
    $(this).toggleClass('drawerClosed');
  });

});
