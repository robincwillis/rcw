	var tumblr_api_read = null; // this is important do not remove

	$(document).ready(function() {	
			// setup our namespace
			$.tumblr = {};
			// modify these
			$.tumblr.url = "http://robincwillis.tumblr.com/api/read/json?callback=?";
			$.tumblr.numPostsToDisplay = 6;
			$.tumblr.videoWidth='480'; // youtube default 400
			$.tumblr.videoHeight='320'; // youtube default 325
			$.tumblr.imagePath = 'http://chris-tran.com/images/tumblr/';	
			$.tumblr.postCount = 0;
 			reloadTumblr();
  });		
  
  function reloadTumblr(){  	
  	$("#tumblrFeed").empty();
  
  	$.ajax({
		  url: $.tumblr.url,
		  dataType: 'script',
		  timeout: 10000,
      success:function(){ 
      	$("#tumblrFeed").empty();
      	if ((tumblr_api_read == undefined) || (tumblr_api_read == null)) {
      		$("#tumblrFeed").append("<div class='title' href='#'>unable to load Tumblr</div>");	  			
    		} else {
    			$.tumblr.postCount = 0;
	        $.each(tumblr_api_read.posts.slice(0, 10), function(i,post){
						if ($.tumblr.postCount >= $.tumblr.numPostsToDisplay) {
							return;
						}    			
	    			parseTumblrJSON(post);
	    			$.tumblr.postCount++;
	  			});
    		}
      },
      error:function (xhr, statusTxt, errorTxt){
      } 					      
		});  	
    }

	function parseTumblrJSON(post) {

		var d = Date.parse(post["date-gmt"]);
		var dateFmt = d.toString('MMMM d yyyy');
		
    switch(post.type)
    {		    	
    	case "regular":
    	{		
    		$("#tumblrFeed").append("<h3>" + post["regular-title"] + "</h3>");
    		$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");	
    		$("#tumblrFeed").append("<p>" + post["regular-body"] + "</p>");
    		break;
    	}
    	case "link":
    	{
    		$("#tumblrFeed").append("<h3><a class='title' href='" + post["link-url"] + "' target='_blank'>" + post["link-text"] + "</a></h3>");	
    		$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");						
    		$("#tumblrFeed").append("<p>" + post["link-description"] + "</p>");
    		break;
    	}		    	
    	case "quote":
    	{	
    		$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");	
    		$("#tumblrFeed").append("<p>" + post["quote-text"] + "</p>");
    		break;
    	}		    	
    	case "photo":
    	{
			$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");						
    		$("#tumblrFeed").append("<p><img src='" + post["photo-url-500"] + "'/><br/>" + post["photo-caption"] + "</p>");
    		break;
    	}
    	case "conversation":
    	{	
    		$("#tumblrFeed").append("<h3>" + post["conversation-title"] + "</h3>");
			$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");								    		
    		var html = '';
			for(var i = 0; i < post["conversation"].length; i++) {
				var conv = post["conversation"][i];						
				html += "<div>" + conv.label + "</div>";
				html += "<div>" + conv.phrase + "</div>";
			}
    		$("#tumblrFeed").append("p'>" + html + "</p>");
    		break;
    	}
    	case "audio":
    	{	
    		$("#tumblrFeed").append("<h3>" + post["audio-caption"] + "</h3>");
    		$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");	
    		$("#tumblrFeed").append("<p>" + post["audio-player"] + "</p>");
    		break;
    	}
    	case "video":
    	{	
    		$("#tumblrFeed").append("<h3>" + post["video-caption"] + "</h3>");
    		$("#tumblrFeed").append("<div class='date'>" + dateFmt + "</div>");	
    		// resize our video code if possible
    		var vdo = post["video-player"];
    		var re = new RegExp('width=\"([a-zA-Z0-9]*)\"', 'g');
    		vdo = vdo.replace(re, 'width="' + $.tumblr.videoWidth + '"');
    		re = new RegExp('height=\"([a-zA-Z0-9]*)\"', 'g');
    		vdo = vdo.replace(re, 'height="' + $.tumblr.videoHeight + '"');    		
    		re = new RegExp('400,320', 'g');
    		vdo = vdo.replace(re, $.tumblr.videoWidth + ',' + $.tumblr.videoHeight);
    		re = new RegExp('400,250', 'g');
    		vdo = vdo.replace(re, $.tumblr.videoWidth + ',' + $.tumblr.videoHeight);
    		$("#tumblrFeed").append("<div'>" + vdo + "</div>");
    		break;
    	}		    	
    	default:
    		break;
    }
    $("#tumblrFeed").append("<div class='clear'>&nbsp;</div>");
	}	
	

