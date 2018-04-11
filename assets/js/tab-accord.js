$(document).ready(function() {

  switchingTabs();
  tabControl();

  /*
  We also apply the switch when a viewport change is detected on the fly
  (e.g. when you resize the browser window or flip your device from 
  portrait mode to landscape). We set a timer with a small delay to run 
  it only once when the resizing ends. It's not perfect, but it's better
  than have it running constantly during the action of resizing.
  */

  var resizeTimer;
  $(window).on('resize', function(e) {

      switchingTabs();
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
          tabControl();
      }, 250);
  });

  /*
  The function below is responsible for switching the tabs when clicked.
  It switches both the tabs and the accordion buttons even if 
  only the one or the other can be visible on a screen. We prefer
  that in order to have a consistent selection in case the viewport
  changes (e.g. when you esize the browser window or flip your 
  device from portrait mode to landscape).
  */
  function tabControl() {
      var tabs = $('.tabbed-content').find('.tabs');
      if (tabs.is(':visible')) {
          $('.accordian-heading').off('click');
          tabs.find('a').on('click', function(event) {
              event.preventDefault();
              var target = $(this).attr('href'),
                  tabs = $(this).parents('.tabs'),
                  buttons = tabs.find('a'),
                  item = tabs.parents('.tabbed-content').find('.item');
              buttons.removeClass('active');
              item.removeClass('active');
              $(this).addClass('active');
              $(target).addClass('active');
              $(".tabs").find("a").css({
                  "background-color": "white",
                  "color": "#4a4a4a"
              }).find(".iconsvg").attr({
                  "fill": "none",
                  "stroke": "#4A4A4A"
              });
              /*$(".tabs").find(".active").css({
                  "background-color": "#00c6c6",
                  "color": "#ffffff"
              }).find(".iconsvg").attr({
                  "fill": "#ffffff",
                  "stroke": "#ffffff"
              });*/
          });
          if (!$('.item').hasClass('active')) {
              $("#tab1").addClass('active');
              $(".tabs").find("a").css({
                  "background-color": "white",
                  "color": "#4a4a4a"
              }).find(".iconsvg").attr({
                  "fill": "none",
                  "stroke": "#4A4A4A"
              });
              $(".tabs").find("a").removeClass('active');
              $(".tb1").addClass('active');
          }

          $(".tabs").find("a").css({
              "background-color": "white",
              "color": "#4a4a4a"
          }).find(".iconsvg").attr({
              "fill": "none",
              "stroke": "#4A4A4A"
          });
          /*$(".tabs").find(".active").css({
              "background-color": "#00c6c6",
              "color": "#ffffff"
          }).find(".iconsvg").attr({
              "fill": "#ffffff",
              "stroke": "#ffffff"
          });*/

      } else {
          $('.accordian-heading').off('click').on('click', function() {
              if ($(this).parent().hasClass("active")) {
                  $(this).parent().removeClass('active').find(".accor-icon-active").removeClass('accor-icon-active').addClass("accor-icon-inactive");
              } else {
                  var container = $(this).parent().parents('.tabbed-content'),
                      currId = $(this).parent().attr('id'),
                      items = container.find('.item');
                  container.find('.tabs a').removeClass('active');
                  items.removeClass('active',1000).find(".accor-icon-active").removeClass('accor-icon-active').addClass("accor-icon-inactive");
                  $(this).parent().addClass('active',1000).find(".accor-icon-inactive").removeClass('accor-icon-inactive').addClass("accor-icon-active");
                  container.find('.tabs a[href$="#' + currId + '"]').addClass('active',1000);
                 var topPos = parseInt($(this).find("span").offset().top); 
                 topPos = topPos - 80;
                  $(document).scrollTop(topPos);
              }
          });
      }
  }

  function switchingTabs() {
      if ($(window).width() < 768) {
          $("#accr-text-1").before($("#accr-img-1"));
          $("#accr-text-2").before($("#accr-img-2"));
          $("#accr-text-3").before($("#accr-img-3"));
          $("#accr-text-4").before($("#accr-img-4"));
      } else {
          $("#accr-img-1").before($("#accr-text-1"));
          $("#accr-img-2").before($("#accr-text-2"));
          $("#accr-img-3").before($("#accr-text-3"));
          $("#accr-img-4").before($("#accr-text-4"));

      }
  }
});