$(document).ready(function(){$(window).scroll(function(){var g=$(window).scrollLeft();var d=$(window).width();var c=$(document).width();var e=$(window).height()*0.4;var f=$("div#student_start").offset().left-e;var b=$("div#photographer_start").offset().left-e;var a=$("div#designer_start").offset().left-e;if(g+d==c){$("#photo_nav ul #stu").removeClass("active");$("#photo_nav ul #pho").removeClass("active");$("#photo_nav ul #des").addClass("active")}else{if(g>=a){$("#photo_nav ul #stu").removeClass("active");$("#photo_nav ul #pho").removeClass("active");$("#photo_nav ul #des").addClass("active")}else{if(g>=b){$("#photo_nav ul #stu").removeClass("active");$("#photo_nav ul #pho").addClass("active");$("#photo_nav ul #des").removeClass("active")}else{if(g>=f){$("#photo_nav ul #stu").addClass("active");$("#photo_nav ul #pho").removeClass("active");$("#photo_nav ul #des").removeClass("active")}}}}});$("#photo_nav ul #stu").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:0},2000)});$("#photo_nav ul #pho").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:$("div#photographer_start").offset().left},2000)});$("#photo_nav ul #des").click(function(a){a.preventDefault();$("html, body").animate({scrollLeft:$("div#designer_start").offset().left},2000)})});