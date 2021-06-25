let player; //YouTube Player
let currentPlay = 0; //記錄目前撥到第幾首歌
var s=0;
var x="";
var currenttime=0;
var playTime=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
//YouTube API Ready
function onYouTubeIframeAPIReady(){
	player = new YT.Player("player",{
		height:"390",
		width:"640",
		videoId:playList[currentPlay],
		playerVars:{
			autoplay:0, //是否自動撥放
			controls:0, //是否顯示控制項
			iv_load_policy:3
			
		},
		events:{
			onReady:onPlayerReady,
			onStateChange:onPlayerStateChange
		}
	});
}

function onPlayerReady(event){
		$("#1").on("click",function(){
			currentPlay=0;
			player.cueVideoById({
			videoId:playList[0],
			suggestedQuality:"large"
			});
		});
	
		$("#2").on("click",function(){	
			currentPlay=1;
			player.cueVideoById({
				videoId:playList[1],
				suggestedQuality:"large"
				});
		});
				$("#3").on("click",function(){	
			currentPlay=2;
			player.cueVideoById({
				videoId:playList[2],
				suggestedQuality:"large"
				});
		});
				$("#4").on("click",function(){	
			currentPlay=3;
			player.cueVideoById({
				videoId:playList[3],
				suggestedQuality:"large"
				});
		});
				$("#5").on("click",function(){	
			currentPlay=4;
			player.cueVideoById({
				videoId:playList[4],
				suggestedQuality:"large"
				});
		});
		
		$("#btm").on("click",function(){
			x=document.getElementById("auto").value;
			currenttime=0;
			for (let i = 0; i < x.length; i++) {
				playTime[i]=x[i]*15;
			}
			$("h2").text(x);
			//playTime=[15,30,60,75,90];
			s=1;
			player.loadVideoById({
			videoId:playList[currentPlay],
			startSeconds:playTime[0],
			endSeconds:playTime[0]+1,
			suggestedQuality:"large"
			});
			player.playVideo();
			player.setPlaybackQuality(small);
	});
		
}	

//打說明 打譜 給填譜和播放
function onPlayerStateChange(event){
	
	if(currenttime==x.length){
		s=0;
		currenttime=0;
		player.stopVideo()
		
	}
	if(Math.floor(player.getCurrentTime())==playTime[currenttime]+1 && s==1){
		currenttime++;
		player.loadVideoById({
		videoId:playList[currentPlay],
		startSeconds:playTime[currenttime],
		endSeconds:playTime[currenttime]+1,
		suggestedQuality:"large"
		});
	}

	
	
}

	