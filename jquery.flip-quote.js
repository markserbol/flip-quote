/*
 * jquery.flip-quote.js v1.0.0, jQuery Flip-Quote
 *
 * Copyright 2014 Mark Serbol.   
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/MIT.
 *
 * jQuery Flip-Quote creates a pull-quote from a text quote found in the document 
 * and flips to reveal the quote once it's scrolled into view. 
 * It also has a click feature that scrolls into and highlights the quote origin on the document.
 *
 * https://github.com/markserbol/flip-quote
 *
 */
;(function($){
  var defaults = {
		quoteSelector:'q',
		container:'.container',
		quoteMarks:'"“" "”"',
		bgColor:'#0080C0',
		fontColor:'#FFF',
		fontSize:'24px',	
		flipDuration:'0.7s',
		pads:20
  };
		
  $.fn.flipQuote = function(options){
		var opts = $.extend({}, defaults, options);
		
		return this.each(function(){
			var el = $(this), 
				quotes = (el.find(opts.quoteSelector).length) ? el.find(opts.quoteSelector) : el, 
				ocontainer = $(opts.container), 
				win = $(window),
				root = $('html, body');
				
			quotes.each(function(index) {
        var quote = $(this), text = quote.text(), container, fontFace, backFace;
				
				quote.addClass('fQ_quote');
				
				container = ocontainer.eq(index);
				
				container.addClass('fQ_container').css({'font-size': opts.fontSize});
				
				frontFace = $('<div/>', {class: 'fQ_front', html:'<q>'+ text +'</q>'});
				backFace = $('<div/>', {class: 'fQ_back'});
				
				frontFace.add(backFace).appendTo(container)
					.css({
						'background-color': opts.bgColor,
						'color': opts.fontColor,
						'padding': opts.pads,
						'width': container.width() - opts.pads * 2
					}).find('q').css('quotes', opts.quoteMarks);
				
				container.click(function() {
					if(quote.offset().top + quote.height() - 50 < win.scrollTop()){
						root.animate({
							scrollTop: quote.offset().top - 20
						}, 'slow', function(){
							flash(quote);
						});
							
					}else if(quote.offset().top + 50 > win.scrollTop() + win.height()){
						root.animate({
							scrollTop: (quote.offset().top + quote.height() + 20) - win.height()
						}, 'slow',function(){
							flash(quote);
						});
					}else {
						flash(quote);				
					}
					
				});
				
				container.height(frontFace.innerHeight());
				backFace.innerHeight(frontFace.innerHeight());
	
      });
			
			win.scroll(function() {
        ocontainer.each(function(index, element) {
          if(win.scrollTop() + win.height() > $(this).offset().top + $(this).height()){	
						$(this).addClass('fQ_flip');
						
						$(this).find('div').css({
							'-moz-transition': opts.flipDuration,
							'-webkit-transition': opts.flipDuration,
							'transition': opts.flipDuration
						});
						
						if(!css3dsupport){
							$(this).find('.fQ_front').show();
							$(this).find('.fQ_back').hide();
						}
						
					}else{
						$(this).removeClass('fQ_flip');
						
						if(!css3dsupport){
							$(this).find('.fQ_front').hide();
							$(this).find('.fQ_back').show();
						}
					}
        });
      });
			
			function flash(el){
				el.css({
					'background-color': opts.bgColor,
					'color': opts.fontColor
				});
				
				setTimeout(function(){
					el.css({
						'background-color':'inherit',
						'color':'inherit'
					});
				}, 1000);
			}
			
			function css3dsupport(){				
				var DOM = document.createElement('p'), 
					props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective'];
	
				for(var i=0; i<props.length; i++){
					if(props[i] in DOM.style){
						return true;
					}
				}
				return false;
			}
			
		});
	}
	
})(jQuery);