function onload(){
	var player1=null;
	var player2=null;
	var player1score = 0;
	var player2score = 0;
	var ball = null;
	var speedx =null;
	var speedy = null;
	var gameboard = null;
	var player1y = null;
	var player1width = null;
	var player1height = null;
	var player1left;
	var player2y = null;
	var player2width = null;
	var player2height = null;
	var gameboardheight;
	var gameboardwidth;
	var ballleft =null;
	var balltop = null;
	var balld = null;
	var int = null;
	var increase = null;
	function moveplayer1(event){
		// console.log("here");
		if(event.which == 87 && player1y>0){
			player1y-=5;
			player1.style.top = player1y+"px";
			// console.log(player1.style.top);
			// console.log(player1y,player2y);
		}
		if(event.which == 83 && player1y<gameboardheight-player1height){
			player1y+=5;
			player1.style.top = player1y+"px";
			// console.log(player1y,player2y);
		}
		// 87 83 38 40
	}
	function moveplayer2(event){
		// console.log("here");
		if(event.which == 38 && player2y >0){
			player2y-=5;
			player2.style.top = player2y+"px";
			// console.log(player1y,player2y);
		}
		if(event.which == 40 && player2y<gameboardheight-player2height){
			player2y+=5;
			player2.style.top = player2y+"px";
			// console.log(player1y,player2y);

		}
	}
	function increaseSpeed(){
		speedx *= 1.1;
		speedy *= 1.1;
	}
	function moveball(){
		if(balltop<=0 || balltop >= gameboardheight - balld){
			speedy *= -1;
		}
		if(ballleft<=0 ){
			if(balltop >= player1y - (balld / 2) && balltop <= player1y + player1height - (balld / 2)){
				speedx *= -1;
			}else{
				ballleft = (gameboardwidth - (2 * player1width))/2 - balld/2;
				balltop = (gameboardheight/2) - (balld/2);
				reset();
				player2score++;

				// speedx = 0;
				// speedy = 0;
				// var cont = window.confirm("Game Over! wanna play Again?");
				// if(cont){
				// 	clearInterval(int);
				// 	clearInterval(increase);
				// 	location.reload();
				// }
			}
		}
		if(ballleft >= gameboardwidth - balld - (2*player1width)){
			if(balltop >= player2y - (balld / 2) && balltop <= player2y + player2height - (balld / 2)){
				speedx *= -1;
			}else{
				ballleft = (gameboardwidth - (2 * player1width))/2 - balld/2;
				balltop = (gameboardheight/2) - (balld/2);
				reset();
				player1score++;
				// speedx = 0;
				// speedy = 0;
				// var cont = window.confirm("Game Over! wanna play Again?");
				// if(cont){
				// 	// clearInterval(int);
				// 	// clearInterval(increase);

				// 	// location.reload();
				// }
			}
		}
		ballleft += speedx;
		balltop +=speedy;
		ball.style.left = ballleft + "px";
		ball.style.top = balltop + "px";
		//console.log(balltop,ballleft);

	}
	function reset(){
		do{
			speedx = Math.floor(Math.random() * 11) - 5;
		}while(speedx===0);
		speedy = Math.floor(Math.random() * 11) - 5;
	}
	function startgame(){
		if(event.which===32){
		player1= document.getElementById("leftplayer");
		var boundrec = player1.getBoundingClientRect();
		// console.log(player1.getBoundingClientRect());
		player1y = boundrec.top;
		console.log(player1y);
		player1width = boundrec.width;
		player1height = boundrec.height;
		player2= document.getElementById("rightplayer");
		console.log(player2y);
		boundrec = player2.getBoundingClientRect();
		player2y = boundrec.top;
		player2height = boundrec.height;
		player2width = boundrec.width;
		ball = document.getElementById("ball");
		boundrec = ball.getBoundingClientRect();
		ballleft = boundrec.left;
		balltop = boundrec.top;
		balld = boundrec.width;
		console.log(ballleft,balltop,balld);
		gameboard= document.getElementById("gameboard");
		boundrec = gameboard.getBoundingClientRect();
		gameboardheight =boundrec.height;
		gameboardwidth = boundrec.width;
		player1y =  player1y - boundrec.top; 
		player2y = player2y - boundrec.top;
		ballleft = ballleft - boundrec.left - player1width; 
		balltop = balltop -boundrec.top;
		console.log(player1y,player2y,ballleft,balltop,balld);
		do{
			speedx = Math.floor(Math.random() * 11) - 5;
		}while(speedx===0);
		speedy = Math.floor(Math.random() * 11) - 5;
		document.addEventListener('keydown',moveplayer1);
		document.addEventListener('keydown',moveplayer2);
		int = setInterval(moveball,100);
		increase = setInterval(increaseSpeed,10000);
		document.removeEventListener("keydown",startgame);
	}
	}
	document.addEventListener("keydown",startgame);


}