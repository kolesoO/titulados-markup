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
  $( "body" ).on("click", ".js-toggle", function() {
    let target = $(this).parents(".js-toggle-wrapper").first().find($(this).attr("data-target"));
    target.slideToggle( "fast");
    $(this).toggleClass("active");
  });
  //toggle class
  $("body").on("click", ".js-toggle_class", function(e){
    e.preventDefault();
    let $target,
        className = $(this).attr("data-class"),
        $counter = $(this).find(".counter-red");
        // $headSet = $(this).parent(".help-block").find(".icon-headset"),
        // $close = $(this).parent(".help-block").find(".fa-times");
        // console.log($headSet);
        // console.log($close);

    if ($(this).attr("data-is_parent") == "true") {
      $target = $(this).parents($(this).attr("data-target")).first();
    } else {
      $target = $($(this).attr("data-target"));
    }
    if ($target.hasClass(className)) {
      $target.removeClass(className);
      $(this).removeClass(className);
      $counter.removeClass("bg-primary");
      $( ".icon.icon-headset" ).css( "display", "inline-block" );
      $( ".fas.fa-times" ).css( "display", "none" );
      // $close.addClass("d-none");
      // $headSet.removeClass("d-none");
    } else {
      $target.addClass(className);
      $(this).addClass(className);
      $counter.addClass("bg-primary");
      $( ".icon.icon-headset" ).css( "display", "none" );
      $( ".fas.fa-times" ).css( "display", "inline-block" );
      // $close.removeClass("d-none");
      // $headSet.addClass("d-none");
    }
  })
  //end§
});
