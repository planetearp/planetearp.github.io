$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("div.visibility")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }

    // if ($(tag).position().top + 50 < pageBottom || $(tag).position().top > pageTop) {
    //   $(tag).addClass("visible")
    // } else {
    //   $(tag).removeClass("visible")
    // }
  }
})