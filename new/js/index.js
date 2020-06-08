import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(function() {
  //modules
  if(typeof(obSlider) == "object"){
    obSlider.init();
  }
  if(typeof(obTabs) == "object"){
    obTabs.init();
  }
  //end

  $( "body" ).on("click", ".js-toggle-down", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideDown( "fast");
      if (target.css("display") !== "none" && $(this).attr("data-static") != "true") {
        $(this).addClass("d-none");
        $(this).removeClass("d-flex");
      }
  });
  $( "body" ).on("click", ".js-toggle-up", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideUp( "fast" );
    $(this).parents(".js-toggle-wrapper").first().find(".js-toggle-down")
      .addClass("d-flex")
      .removeClass("d-none");
  });

});
