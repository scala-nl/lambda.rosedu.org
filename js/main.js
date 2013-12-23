function navigate(visualstate) {
  $(".visualstate").hide();
  var css_selector_to_display = visualstate + "_content";
  $(css_selector_to_display).css({"display": "block", "opacity": 0}).animate({"opacity": 1}, 250);

  if ($("#menu").css("display") === "none") {
    $("#lambda_heading").hide();
    document.getElementById("top_of_content").scrollIntoView();
  } else {
    $("#lambda_heading").show();
    document.body.scrollIntoView();
  }

  if (visualstate !== "#acasa" && $("#menu").css("display") === "none") {
    $("#tap_target_acasa").show();
  } else {
    $("#tap_target_acasa").hide();
  }

  var base_url = window.location.href.split("#")[0];
  history.pushState(css_selector_to_display, "/", base_url + visualstate);
}

$(".lambdamenuitem").on("click", function(e) {
  e.preventDefault();
  var target_visualstate = $(this).data("id");
  navigate(target_visualstate);
});

$("#menu_header").on("click", function(e) {
  e.preventDefault();
  navigate("#acasa");
});

$(window).on("popstate", function(event) {
  if (typeof event.state === "string") {
    $(".visualstate").hide();
    $(event.state).css({"display": "block", "opacity": 0}).animate({"opacity": 1}, 250);

    if ($("#menu").css("display") === "none") {
      $("#lambda_heading").hide();
    } else {
      $("#lambda_heading").show();
    }
  }
});

Zepto(function($) {
  var visualstate = "#" + window.location.href.split("#")[1];
  if ( $(visualstate + "_content")[0] ) {
    navigate(visualstate);
  } else {
    navigate("#acasa");
  }

  var all_images = {
    "#lambda_logo":  "images/logos/lambda_logo.png",
    ".haskell_logo": "images/logos/haskell_logo.png",
    ".scala_logo":   "images/logos/scala_logo.png",
    ".clojure_logo": "images/logos/clojure_logo.png",
    "#arrow_hover":  "images/arrow-hover.png",
    "#gradient":     "images/blue-gradient.png"
  };
  for (var img_id in all_images) {
    $(img_id).attr("src", all_images[img_id]);
  }
});

