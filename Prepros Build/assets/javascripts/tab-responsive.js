$(document).ready(function(){

	// initialize jquery ui tabs
	//$('.tabs').tabs();
	
	// event handler for window resize
	$(window).resize(function(e){
		updateUI();
	});
	updateUI();

});

// event handler for window resize
function updateUI(){

	if($(window).width() <= 767){

		// mobile view instructions
		tabsToAccordions();

	} else {

		// desktop view instructions
		accordionsToTabs();
	}

}

// changes tabs to accordions (jquery ui)
function tabsToAccordions(){
$('.tabs').each(function(){
		var a = $('<div class="accordion">');
		var b = new Array();
		$(this).find('>ul>li').each(function(){
			b.push('<h3 class="accordion-title">'+$(this).html()+'</h3>');
		});
		var c = new Array();
		$(this).find('.tab-content > div').each(function(){
			c.push('<div classs="accordion-body">'+$(this).html()+'</div>');
		});
		for(var i = 0; i < b.length; i++){
			a.append(b[i]).append(c[i]);
		}
		$(this).before(a);
		$(this).remove();
	})
	//$('.accordion').accordion()
}

// changes accordions to tabs (jquery ui)
function accordionsToTabs(){
    $('.accordion').each(function(){
		var a = $('<div class="other-media-tab tabs">');
		var count = 0;
		var b = $('<ul class="nav nav-tabs nav-justified">');
		$(this).find('>h3').each(function(){
			count++;
			b.append('<li><a href="#tabs-'+count+'">'+$(this).text()+'</a></li>');
		});
		var count = 0;
		var c = $('');
		$(this).find('.accordion-body').each(function(){
			count++;
			c=c.add('<div id="tabs-'+count+'">'+$(this).html()+'</div>');
		});
		a.append(b).append(c);
		$(this).before(a);
		$(this).remove();
	});
	$('.tabs > ul  > li > a').tab('show'); 

}