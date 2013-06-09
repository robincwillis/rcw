/**
 * @author IRA
 */

(function( $ ){
var settings;
  var methods = {
    
    init : function( options ) { 
    	
    settings = $.extend( {
      imgs         	: [],
      imgs_in		: [],
      thumb_in		: [],
      caption_in	: [],
      imgIndex 	 	: -1,
      curImg		: '',
      imgIndexNext 	: 0,
      fadeTimeOutID	: '',
      xDir 			: -1,
      yDir 			: -1,
      cfg  			: {
						containerId    : "slideshowify-bg", // id of slideshowify div created by the plugin
						captionId	   : "slideshow_caption",
						controllerId   : "slideshow_controls",
						thumbnailId	   : "thumbnail_controls",
						containerCss   : {
							"position" : "relative",
							"overflow" : "hidden",
							"z-index"  : "-2",
							"left"     : "0",
							"top"      : "0",
							"width"    : "800px",
							"height"   : "380px"
						},
		transition	  : 'into',
		direction	  : 'alternate',
		fadeInSpeed   : 2000,
		fadeOutSpeed  : 2000,
		aniSpeedMin   : 6000,  
		aniSpeedMax   : 8000,  
		afterFadeIn   : function(){},
		beforeFadeOut : function(){}
		}
		 }, options);

    if (!settings.imgs_in.length > 0){ 
    	// if images weren't passed as array, load from object
		// load images into private array
    	$(this).each(function(i,img){
    		$(img).hide();
    		settings.imgs.push({
    			src : $(img).attr("src"),
    			w 	:  $(img).width(),
    			h 	:  $(img).height(),
    		});	
    	});
    }else{
    	for(i=0;i<settings.imgs_in.length;i++){
    		settings.imgs.push({
    			src : settings.imgs_in[i].src,
    			w 	:  settings.imgs_in[i].width,
    			h 	:  settings.imgs_in[i].height
    			});
    		}
    }
    $("<div id='"+settings.cfg.containerId+"'></div>")
			.css(settings.cfg.containerCss)
			.appendTo("#splash");
			//methods.thumbnailControls();
			//methods.playerControls();
			methods.loadImg(settings.imgIndex);
			
			
			
			
			
			
			$("#proj_menu_container").live('mousemove',
				function(){
					//$("#"+settings.cfg.controllerId).fadeIn('fast');
					
					 $("#"+settings.cfg.controllerId)
					// .stop().show()
					 $("#"+settings.cfg.controllerId)
					 .stop().show().css('opacity',1).animate({opacity: 0}, 3000);
					//.css('opacity',1)
					//.delay(2000).fadeOut(3000);
					 
   					 $("#"+settings.cfg.thumbnailId)
   					 .stop().show().css('opacity',1).animate({opacity: 0}, 3000);
   					 //.stop().show().css('opacity',1).delay(2000).fadeOut(3000);
   					// .css('opacity',1)
   					 
				});
			
			
    },
    //------------------------------------------------
    // REVEAL IMAGE
    //------------------------------------------------
    revealImg : function(curImg) {
  		var $doc = $(document),
					$img     = $(this),
					docW     = 800,
					docH     = 380,
					docRatio = docW/docH,
					imgRatio = $img.width()/$img.height(),				
					aniSpeed = settings.cfg.aniSpeedMin;
					
  		settings.curImg = $(this);
  		
  		if (imgRatio > docRatio){
			$img.height(docH+"px").width(curImg.w*(docH/curImg.h)+"px");				
			marginPixels = ($img.width() - docW) * settings.xDir;
			if (settings.xDir===1){
				$img.css({"margin-left":marginPixels*-1+"px"}); // move image before slide if sliding to right
				marginAttr = {"margin-left":"0px"}; // will be sliding to zero
			}
			else {
				marginAttr = {"margin-left":marginPixels+"px"};
			}
			if (settings.cfg.direction==="alternate"){
				settings.xDir *= -1; // switch
			}
		}
		else {
			$img.width(docW+"px").height(curImg.h*(docW/curImg.w)+"px");				
			marginPixels = ($img.height() - docH) * settings.yDir;
			if (settings.yDir===1){
				$img.css({"margin-top":marginPixels*-1+"px"}); // move image before slide if sliding down
				marginAttr = {"margin-top":"0px"}; // will be sliding to zero
			}
			else {
				marginAttr = {"margin-top":marginPixels+"px"};
			}
			if (settings.cfg.direction==="alternate"){
				settings.yDir *= -1; // switch
			}
		}
		if(settings.capation_in > 0){
			console.log(caption_in[settings.imgIndex]);
			$("#"+settings.cfg.captionId).empty().append(settings.caption_in[settings.imgIndex]);
		}
		
		$('.thumbnail').removeClass('current');
		$('#'+settings.imgIndex).find('div > img').addClass('current');
		aniSpeed = Math.min(Math.max(marginPixels * 50, settings.cfg.aniSpeedMin), settings.cfg.aniSpeedMax);
			
		$img.fadeIn(settings.cfg.fadeInSpeed, function(){
		$img.css("z-index", -1);
			
		settings.cfg.afterFadeIn(settings.imgs[settings.imgIndex]);
		})
			.animate(marginAttr, {
				duration : aniSpeed,
				queue    : false,
				complete : function(){ 		
					settings.cfg.beforeFadeOut(settings.imgs[settings.imgIndex]);
					$(this).fadeOut(settings.cfg.fadeOutSpeed, function(){
						$(this).remove();
					});
					//*******************************
					//LOAD THE NEXT IMAGE
					methods.loadImg(settings.imgIndex);
					//*******************************
				}
			});
			
		 $(window).resize(function(){
			docW     = 800;
			docH     = 380;
			docRatio = docW/docH;
			//TODO NEED A WAY TO RECALCULATE HOW MUCH TO PAN BASED ON BROWSER RESIZE
	  		if (imgRatio > docRatio){
				$img.height(docH+"px").width(curImg.w*(docH/curImg.h)+"px");
			}else{
				$img.width(docW+"px").height(curImg.h*(docW/curImg.w)+"px");
			}				
		 });
    },
    //------------------------------------------------
    // PRELOAD IMAGE
    //------------------------------------------------ 
    loadImg : function(curIndex) { 
     				var img     = new Image(),
					nextImg = new Image(), // for preloading
					len     = settings.imgs.length;

			if(curIndex < -1){
				curIndex = len-2;
			}else if(curIndex >= len-1){
				curIndex = 0;
			}else{
				curIndex = curIndex+1;
			}
			clearTimeout(settings.fadeTimeoutId); // @TODO need to be able to clear this timeout externally
			// assign handlers
			$(img).load(function(){
					
					if (settings.cfg.transition==="into"){
						$(this).css({"position":"absolute", "z-index":"-2"});
						$("#"+settings.cfg.containerId).append(this);
					}
					else {
						$("#"+settings.cfg.containerId).empty().append(this);
					}
					methods.revealImg.call(this, settings.imgs[curIndex]);
				})
				.hide()
				.attr("src", settings.imgs[curIndex].src); // load
			// preload next image
			settings.imgIndex = curIndex;
			settings.imgIndexNext = curIndex + 1;
			if (settings.imgIndexNext < len-1){
				nextImg.src = settings.imgs[settings.imgIndexNext].src;
			}
    },
    //------------------------------------------------
    // SLIDESHOW CONTROLS
    //------------------------------------------------
    playerControls : function(){
    	var html = [];
    	
    	//html+= '<div class="left arrow"><a id="prev" href="#"><div class="circle"><div class="arrow_left"></div></div></a></div>';	
		//html+= '<div class="right arrow"><a id="next" href="#"><div class="circle"><div class="arrow_right"></div></div></a></div>';
    	//html+= '<div class="right arrow"><a id="play" class="playing" href="#"><div class="circle">';
    	//html+= '<div class="small_arrow_right"></div>';
    	//html+= '<div class="small_arrow_right"></div>';
    	//html+= '</div></a></div>';
    	html += '<div id="controller_button"><img class="b" id="prev" src="img/prev_o.png" /></div>';
    	html += '<div id="controller_button"><img class="b" id="play" src="img/pause_o.png" /></div>';
    	html += '<div id="controller_button"><img class="b" id="next" src="img/next_o.png" /></div>';
    	
    	$("img.b").live('mouseenter',
		function() { this.src = this.src.replace("_o", "_h");
		});
    	
    	$("img.b").live('mouseleave',
		function() { this.src = this.src.replace("_h", "_o");
		});
    	
    	
    	
    	$('#'+settings.cfg.controllerId).empty();
		$('#'+settings.cfg.controllerId).append(html);
		
		$('#prev').live('click',function(){
  			settings.curImg.stop(true,false);
  			settings.curImg.fadeOut(settings.cfg.fadeOutSpeed, function(){
				$(this).remove();
			});
			//*******************************
			//LOAD THE NEXT IMAGE
			methods.loadImg(settings.imgIndex-2);
  		});
  		$('#play').live('click',function(){
  			if($(this).hasClass('playing')){
  				settings.curImg.pause()
  				this.src = this.src.replace("pause_h", "play_h");
  			}else{
  				settings.curImg.resume()
  				this.src = this.src.replace("play_h", "pause_h");
  			}
  			$(this).toggleClass('playing');
  		});
  		$('#next').live('click',function(){
  			settings.curImg.stop(true,false);
  			settings.curImg.fadeOut(settings.cfg.fadeOutSpeed, function(){
				$(this).remove();
		});
			methods.loadImg(settings.imgIndex);
  		});
		
    },
    
    thumbnailControls : function(){
    	var html = [];
    	
    	
		html+= '<div id="thumbs" class="thumbnails left">';
		for(i=0;i<settings.thumb_in.length;i++){
			html+='<a href="#" class="thumb_link" onclick="return false"  id="'+i+'"><div class="img_container"><img class="thumbnail" width="'+settings.thumb_in[i].width+'" height="'+settings.thumb_in[i].height+'" src="'+settings.thumb_in[i].src+'" /></div></a>'
		}
		html+= '</div>';
    	//PAUSE PLAY BUTTON
    	//TODO: FIX - PAUSING ON FADING IMAGE HOLDS FADE
    	
    	$('#'+settings.cfg.thumbnailId).empty();
    	var calcWidth = (settings.thumb_in.length * settings.thumb_in[0].width+4)+settings.thumb_in.length * 8;
    	$('#'+settings.cfg.thumbnailId).width(calcWidth);
    	$('#'+settings.cfg.thumbnailId).append(html);
    	  	
    	$('#thumbs > a').live('click',function(){
    		var index = parseFloat($(this).attr('id'));
    		settings.curImg.stop(true,false);
    		settings.imgIndex = index;
    		console.log(index);
  			settings.curImg.fadeOut(settings.cfg.fadeOutSpeed, function(){
				$(this).remove();
			});
			//*******************************
			//LOAD THE NEXT IMAGE
			methods.loadImg(settings.imgIndex-1);
    	});
    	
    	
    //------------------------------------------------
    // DESTROY
    //------------------------------------------------
    }, destroy : function(){
    	$('#prev').die();
    	$('#next').die();
    	$('#thumbs > a').die();
    	settings.curImg.stop(true,false);
    }
  };

  $.fn.fs_slideshow = function( method ) {
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  };
})( jQuery );