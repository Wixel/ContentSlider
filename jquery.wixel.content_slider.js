/**
 * Wixel Content Slider
 * http://wixelhq.com
 *
 * Copyright 2012, WixelHQ
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Author: Sean Nieuwoudt (http://twitter.com/SeanNieuwoudt)
 */
(function( $ ) {

	var methods = {
		init : function( options ) 
		{ 
			var settings = $.extend({
				'debug': false,
				'speed': 500
			}, options);  	

			if(settings.debug)
			{
				jQuery.data(document.body, 'wx_scroll_debug', true);
			}	
			
			if(settings.speed)
			{
				jQuery.data(document.body, 'wx_scroll_speed', settings.speed);
			}			

			return this.each(function() {

				var i = 1;

				var $this = $(this);

				$this.data('debug'      , settings.debug);		
				$this.data('duration'   , settings.duration);		
				$this.data('auto_scroll', settings.auto_scroll);	

				methods.log(settings);
				methods.log('Creating the .wx-slide-rail container');
				      		
				$this.wrapInner('<div class="wx-slide-rail">');

				$(this).find('.wx-slide-rail').css({
					'position': 'absolute',
					'top'     : '0',					
					'left'    : '0'
				});

				$this.find('.slide-item').first().addClass('active-slide');

				$this.find('.slide-item').each(function(e){
					$(this).attr('position', i);

					methods.log('Setting slide position attribute: '+i);
			
					i++;
				});

				var slide_width      = $this.width();
				var total_slides 	 = $this.find('.slide-item').length;
				var slide_rail_width = slide_width * total_slides; 

				$this.data('slide_width', slide_width);					
			   
			    $this.find('.wx-slide-rail').css({'width': slide_rail_width});		

	    	});
		},
		next : function() 
		{
			return this.each(function(){

				var $this = $(this);

				var active_slide = $this.find('.slide-item.active-slide').next(); 

		        if (active_slide.length == 0)
		        {                                 
			        active_slide = $this.find('.slide-item').first();
		        }			

		        $this.find('.slide-item').removeClass('active-slide');

		        active_slide.addClass('active-slide');      

		        methods.log('Sliding to: '+ active_slide.attr('position'));

				var count = active_slide.attr('position') - 1;                       

				var slide_width = $(this).data('slide_width');

				$this.find('.wx-slide-rail').animate({'left': -(count * slide_width)}, jQuery.data(document.body, 'wx_scroll_speed'));  	      

			});
		},
		previous : function( ) 
		{ 
			return this.each(function(){

				var $this = $(this);

				var active_slide = $this.find('.slide-item.active-slide').prev(); 

		        if (active_slide.length == 0)
		        {                                 
			        active_slide = $this.find('.slide-item').last();
		        }			

		        $this.find('.slide-item').removeClass('active-slide');

		        active_slide.addClass('active-slide');      

         		methods.log('Sliding to: '+ active_slide.attr('position'));

				var count = active_slide.attr('position') - 1;                       

				var slide_width = $(this).data('slide_width');

				$this.find('.wx-slide-rail').animate({'left': -(count * slide_width)}, jQuery.data(document.body, 'wx_scroll_speed'));  	      
			});
		},
		log: function(msg)
		{
			if(jQuery.data(document.body, 'wx_scroll_debug') && console)
			{
				console.log(msg);
			}
		}	
	};

	$.fn.wxContentSlider = function(method) {

		if(methods[method])
		{
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method ) 
		{
			return methods.init.apply( this, arguments );
		} 
		else 
		{
			$.error( 'Method ' +  method + ' does not exist on jQuery.wxContentSlider' );
		} 
	};

})( jQuery );