$(function(){"use strict";function t(t){var e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return e.test(t)}$(".lets-go, .educator-begin, .lets-get-going, .about-more, .parents-more").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$(".content-inner").offset().top},1e3),$(this).addClass("active"),$(".animate-line").fadeIn(1200)}),$("#about .participating li").click(function(t){t.preventDefault(),$(this).find(".description").fadeToggle(),$(this).toggleClass("open").toggleClass("closed"),$(".closed .expand").html("click to expand"),$(".open .expand").html("click to collapse")}),$("#about .participating li h4").hover(function(){$(this).next().stop(!0).fadeIn()},function(){$(this).next().stop(!0).fadeOut()}),$("#plan-your-trip .sites").length&&$(window).width()>1024&&$("html, body").animate({scrollTop:$(".sites-container").offset().top},1200),$('#educators button[type="submit"]').click(function(e){e.preventDefault();var o=!1;$('#educators input[type="text"]').each(function(){""==$(this).val()&&"formtools_address_line_2"!==$(this).attr("id")?($(this).parent().addClass("error"),o=!0):$(this).parent().removeClass("error")}),t($("#formtools_work_email").val())?$(".work_email").removeClass("error"):($(".work_email").addClass("error"),o=!0),$("#formtools_org_or_school_0").is(":checked")||$("#formtools_org_or_school_1").is(":checked")?$(".org_or_school").removeClass("error"):($(".org_or_school").addClass("error"),o=!0),$("select option:selected").val()?$(".state").removeClass("error"):($(".state").addClass("error"),o=!0),$('#educators input[type="number"]').val()?$(".num_students").removeClass("error"):($(".num_students").addClass("error"),o=!0),o?($(".errors").remove(),$("form").prepend('<div class="errors">Please correctly fill out the highlighted fields below:</div>')):$("#educators form").submit()}),$("#educators .back").click(function(){history.go(-1)})}());