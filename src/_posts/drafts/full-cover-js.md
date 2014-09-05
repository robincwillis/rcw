	var wR = window.innerWidth/window.innerHeight;
  var iR = this.currentVideo.player.videoWidth === 0 && this.currentVideo.player.videoHeight === 0 ? this.currentVideo.$el.width() / this.currentVideo.$el.height() : this.currentVideo.player.videoWidth / this.currentVideo.player.videoHeight;

	if(iR < wR){
	//if( window.innerWidth / window.innerHeight > 1 ){
		var marginTop = (window.innerHeight - this.currentVideo.$el.height())/2;
		this.currentVideo.$el.css({'width':'100%','height':'auto','margin-top': marginTop + "px", 'margin-left':'0px'});
	}else{
		var marginLeft = (window.innerWidth - this.currentVideo.$el.width())/2;
		this.currentVideo.$el.css({'height':'100%','width':'auto','margin-left': marginLeft + "px", 'margin-top':'0px' });
	}