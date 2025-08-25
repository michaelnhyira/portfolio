$("document").ready(function(){
	function func3(){
		$("#announcement p").delay(1500).animate({
		right:'80%'
		},20000)
		$("#announcement p").animate({
			right:'-105%'
		},1)
		$("#announcement p").animate({
			right:'84%'
		},40000)
		$("#announcement p").animate({
			right:'-105%'
		},1)
		$("#announcement p").animate({
		right:'-8%'
		},20000)
	}
	function func4(){
		$("#logoone").animate(function(){
			opacity:'0'
		},1000);
	}
	$("#collapse").click(function(){
		$("#announcement").slideUp(500)
	});

	$("#image_card").mouseenter(function(){
		$("#image_holder img").animate({
			height:'420px',
			width:'340px'
		},600)
	});
	$("#image_card").mouseleave(function(){
		$("#image_holder img").animate({
			height:'400px',
			width:'320px'
		},1200)
	});
	$("#switch1").click(func1);
	function func1(){
		$("#nav,.main_content,#image_card,#content").css('background-color', '#404040');
		$("#nav img").css('filter', 'invert(100%)')
		$("#content").css('background-color', '#111')
		$("body").css('color','white')
		$(".nav_options, .nav_options p").css('filter','invert(100%)')
		$("#switch1").animate({
			left:'36px'
		},'fast')
		$("#switch2").animate({
			right:'0px'
		},'fast')
		$("#switch2").css('display', 'block')
		$("#switch2").animate({
			opacity:'1'
		},'slow')
		$("#switch2").css('z-index', '4')
		$("#switch1").css('z-index', '3')
		$("#switch2").css('filter', 'invert(100%)')
	}
	$("#switch2").click(func2);
	function func2(){
		$("#nav,.main_content,#image_card").css('background-color', 'white');
		$("#nav img").css('filter', 'invert(0%)')
		$("#content").css('background-color', '#d9d9d9')
		$("body").css('color','black')
		$(".nav_options, .nav_options p").css('filter','invert(0%)')
		$("#switch2").animate({
			right:'36px'
		},'fast')
		$("#switch1").animate({
			left:'0px'
		},'fast') 
		$("#switch2").css('z-index', '3')
		$("#switch1").css('z-index', '4')
		$("#switch2").css('filter', 'invert(0%)');
	}
	func3()
	window.setInterval(func3,76500)
		$("#contact").click(function(){
		$("#contact").css('border-bottom', 'solid black 2px')
		$("#about").css('border-bottom', 'none')
		$("#one, #two, #three").slideUp(400)
		$("#four").delay(500).fadeIn(1000)
		$("#email_address").delay(1800).animate({
			top:'0px'
		},150);
		$("#whatsapp_number").delay(1900).animate({
			top:'0px'
		},150);
		$("#tel_num").delay(2000).animate({
			top:'0px'
		},150);
		$("#ig_handle").delay(2100).animate({
			top:'0px'
		},150);
		$("#linkedinlink").delay(2200).animate({
			top:'0px'
		},150);
		

		$("#email_address,#whatsapp_number,#tel_num,#ig_handle,#linkedinlink").animate({
			top:'-20px'
		},150);
		$("#email_address,#whatsapp_number,#tel_num,#ig_handle,#linkedinlink").animate({
			top:'0px'
		},150);
				
		$(".social_logos").delay(1200).fadeIn(1000)
			
	});
	$("#whatsapp").mouseenter(function(){
		$("#whatsapp").css('background-color','#b3b3b3')
		$("#whatsapp img").css('filter','invert(30%)')
	});
	$("#whatsapp").mouseleave(function(){
		$("#whatsapp").css('background-color','#e6e6e6')
		$("#whatsapp img").css('filter','invert(10%)')
	});
	
	$("#email").mouseenter(function(){
		$("#email").css('background-color','#b3b3b3')
		$("#email img").css('filter','invert(30%)')
	});
	$("#email").mouseleave(function(){
		$("#email").css('background-color','#e6e6e6')
		$("#email img").css('filter','invert(10%)')
	});
	$("#telelogo").mouseenter(function(){
		$("#telelogo").css('background-color','#b3b3b3')
		$("#telelogo img").css('filter','invert(30%)')
	});
	$("#telelogo").mouseleave(function(){
		$("#telelogo").css('background-color','#e6e6e6')
		$("#telelogo img").css('filter','invert(10%)')
	});
	$("#insta").mouseenter(function(){
		$("#insta").css('background-color','#b3b3b3')
		$("#insta img").css('filter','invert(30%)')
	});
	$("#insta").mouseleave(function(){
		$("#insta").css('background-color','#e6e6e6')
		$("#insta img").css('filter','invert(10%)')
	});
	$("#linkedinlogo").mouseenter(function(){
		$("#linkedinlogo").css('background-color','#b3b3b3')
		$("#linkedinlogo img").css('filter','invert(30%)')
	});
	$("#linkedinlogo").mouseleave(function(){
		$("#linkedinlogo").css('background-color','#e6e6e6')
		$("#linkedinlogo img").css('filter','invert(10%)')
	});

	$("#about").click(function(){
		$("#about").css('border-bottom', 'solid black 2px')
		$("#contact").css('border-bottom', 'none')
		$("#four, #five").fadeOut(100)
		$("#one, #two, #three").slideDown(1000)
	});
});