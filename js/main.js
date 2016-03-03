$(document).ready(function() {
  // Fullgpage.js
  $('.full-page').fullpage({
    continuousVertical: true,
    anchors:['firstPage', 'secondPage', 'thirdPage'],
    paddingTop: 50,
    responsiveHeight: 500,
    responsiveWidth: 800,
    resize : true,
    loopHorizontal: true,
  });

  $(function(){
    // MixItUp:
    $('#portfolio-grid').mixItUp();
  });


  // magnificPopup
  $(".popup_content").magnificPopup({
    type:"inline",
    midClick: true
  });

  // main nav
  if( $('.cd-stretchy-nav').length > 0 ) {
    var stretchyNavs = $('.cd-stretchy-nav');
    stretchyNavs.each(function(){
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

      stretchyNavTrigger.on('click', function(event){
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function(event){
      ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
    });
  }
});



