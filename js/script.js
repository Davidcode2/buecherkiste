
//activate menu link when in current scrolling position, add smooth scroll effect
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()-8,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});


//this collapses the navbar after clicking on a link and even retains the scroll animation
//now i can close the nav with the bar button using the "collapse" on data-toggle
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $('#nav-icon3').toggleClass('open')

});

// animated bar icon
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');

	});
});
