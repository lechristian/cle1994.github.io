$(document).ready(function(){$(window).scroll(function(){var g=$(window).scrollLeft();var c=$(window).width();var b=$(document).width();var f=$(window).height()*0.4;var e=$("div#flare_start").offset().left-f;var a=$("div#concert_start").offset().left-f;var d=$("div#prod_start").offset().left-f;if(g+c==b){$("#photo_nav ul #flare").removeClass("active");$("#photo_nav ul #conc").removeClass("active");$("#photo_nav ul #prod").addClass("active")}else{if(g>=d){$("#photo_nav ul #flare").removeClass("active");$("#photo_nav ul #conc").removeClass("active");$("#photo_nav ul #prod").addClass("active")}else{if(g>=a){$("#photo_nav ul #flare").removeClass("active");$("#photo_nav ul #conc").addClass("active");$("#photo_nav ul #prod").removeClass("active")}else{if(g>=e){$("#photo_nav ul #flare").addClass("active");$("#photo_nav ul #conc").removeClass("active");$("#photo_nav ul #prod").removeClass("active")}}}}});$("#photo_nav ul #flare").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:0},2000)});$("#photo_nav ul #conc").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:$("div#concert_start").offset().left},2000)});$("#photo_nav ul #prod").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:$("div#prod_start").offset().left},2000)})});