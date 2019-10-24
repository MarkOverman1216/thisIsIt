function moveToSelected(direction) {
  if (direction == 'next') {
    var hideLeft = $('.prevLeftSecond')
    var prevLeftSecond = $('.prev')
    var prev = $('.selected')
    var selected = $('.next')
    var next = $('.nextRightSecond')
    var nextRightSecond = $('.hideRight')
    var hideRight = $('.hideLeft')
    getSampleAudio(
      window.returnArray[window.returnIndex + 3].song,
      window.returnArray[window.returnIndex + 3].artist,
      window.returnIndex + 3,
      '.hideRight'
    )
  } else if (direction == 'prev') {
    var hideLeft = $('.hideRight')
    var prevLeftSecond = $('.hideLeft')
    var prev = $('.prevLeftSecond')
    var selected = $('.prev')
    var next = $('.selected')
    var nextRightSecond = $('.next')
    var hideRight = $('.nextRightSecond')
    getSampleAudio(
      window.returnArray[window.returnIndex - 3].song,
      window.returnArray[window.returnIndex - 3].artist,
      window.returnIndex - 3,
      '.hideLeft'
    )
  } else {
    // var selected = direction
    console.log(`we don't want it to get here`)
  }
  selected.removeClass().addClass('selected')
  setMusic()

  prev.removeClass().addClass('prev')
  next.removeClass().addClass('next')

  nextRightSecond.removeClass().addClass('nextRightSecond')
  prevLeftSecond.removeClass().addClass('prevLeftSecond')

  hideRight.removeClass().addClass('hideRight')
  hideLeft.removeClass().addClass('hideLeft')

  // hideRight.html(`<img src=${window.returnArray[window.returnIndex].albumCover}/>`)
}

$(document).keydown(function(e) {
  switch (e.which) {
    case 37:
      moveToSelected('prev')
      break

    case 39:
      moveToSelected('next')
      loadPlayer(1)
      break

    default:
      return
  }
  e.preventDefault()
})

$('#carousel div').click(function(event) {
  if (this.className === 'next') {
    console.log(this.className)
    loadPlayer(1)
  } else if (this.className === 'prev') {
    console.log(this.className)
    loadPlayer(-1)
  } else if (this.className === 'nextRightSecond') {
    console.log(this.className)
    loadPlayer(2)
  } else if (this.className === 'prevLeftSecond') {
    loadPlayer(-2)
  }
  moveToSelected(this.className)
})

$(document).on('click', '.next', function() {
  moveToSelected('next')
})
$('#prev').click(function() {
  moveToSelected('prev')
})

// $('#next').click(function() {
//   // loadPlayer();

//   moveToSelected('next')
// })
