// JavaScript Document
window.onload = function (){
		var music = document.getElementsByClassName("music")[0];
		var audio = document.getElementsByTagName("audio")[0];
		var music_disc = music.getElementsByTagName("img")[0];
		//音乐播放完毕，停止光盘转动效果
		audio.addEventListener("ended",function(e){
				music_disc.className="";							  
		},false);
		
		
		//点击音乐图标，控制音乐播放效果
		
		music.addEventListener("touchstart",function(e){
				if (audio.paused){
					audio.play();
					music_disc.className="play";
					//music_disc.style.animationPlayState = "running";
					//music_disc.style.webkitAnimationPlayState = "running";
			} else {
					audio.pause();
					music_disc.className="";
					//music_disc.style.animationPlayState = "paused";
					//music_disc.style.webkitAnimationPlayState = "running";
			}							  
		},false);
		
		/*
		music.ontouchstart = ...不行。。。
		music.onclick = function(){
			if (audio.paused){
					audio.play();
					music_disc.className="play";
					//music_disc.style.animationPlayState = "running";
					//music_disc.style.webkitAnimationPlayState = "running";
			} else {
					audio.pause();
					music_disc.className="";
					//music_disc.style.animationPlayState = "paused";
					//music_disc.style.webkitAnimationPlayState = "running";
			}
		};
		*/
		
		//点击屏幕切换到page2
		page1 = document.getElementById("page1");
		page2 = document.getElementById("page2");
		page3 = document.getElementById("page3");
		page1.onclick = function (){
			//console.log("here");
			
			//if (page1.style.display == 'block')
			//{
					//console.log("there");
					page1.style.display = "none";
					page2.style.display = "block"
			//}
			/*
			setTimeout(function(){
				page2.className = "page fadeOut";
				page3.className = "page fadeIn";
			},5500);
			*/
		};
};