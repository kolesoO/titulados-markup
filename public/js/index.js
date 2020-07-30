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
    let $target = [],
        targetSelectors = $(this).attr("data-target").split(','),
        className = $(this).attr("data-class"),
        $ctx = $(this);

    if ($(this).attr("data-is_parent") == "true") {
      targetSelectors.forEach(function (selector) {
        $target.push($(this).parents(selector).first());
      });
    } else {
      targetSelectors.forEach(function (selector) {
        $target.push($(selector));
      });
    }

    $target.forEach(function ($targetItem) {
      if ($targetItem.hasClass(className)) {
        $targetItem.removeClass(className);
        $ctx.removeClass(className);

      } else {
        $targetItem.addClass(className);
        $ctx.addClass(className);
      }
    });
  })
  //end
  //animate input
  $('input')
      .focusin(function(){
        $(this).parents('.form-group').first().addClass('focused');
      })
      .focusout(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).parents('.form-group').first().removeClass('focused');
        }
      });
  $("body").find("input").each(function () {
    if ($(this).val() !== "") {
      $(this).parents('.form-group').first().addClass('focused');
    }
  })
  //end
});

