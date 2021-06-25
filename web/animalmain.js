
$(function(){
	//儲存目前作答到第幾題
	var currentQuiz = null;
	var list=[0,0,0,0,0];
	//當按鈕按下後，要做的事情
	$("#startButton").on("click",function(){
		
		//如果還沒開始作答就從這裡開始
		if(currentQuiz==null){
			currentQuiz=0;
			//顯示題目
			$("#question").text(questions[0]);
			//將選項區清空(可以試著先不寫)
			$("#options").empty();
			//將選項逐個加入
			scores.forEach(function(element,index,array){
			$("#options").append(`<input name='options' type='radio'
			value='${index}'><label class="test_options">${element[0]}</label><br><br>`);
			});
			//將按鈕上的文字換成Next
			$("#startButton").attr("value","Next");
		}
		
		else{
			//已經開始作答從這邊繼續
			//巡訪哪一個選項有被選取
			$.each($(":radio"),function(i,val){
				if(val.checked){
					currentQuiz=currentQuiz+1;
					//算分
					if(currentQuiz==5 || currentQuiz==10 || currentQuiz==14 || currentQuiz==18 || currentQuiz==24 || currentQuiz==30)
						list[0]=list[0]+(5-i);
					else if(currentQuiz==3 || currentQuiz==6 || currentQuiz==13 || currentQuiz==20 || currentQuiz==22 || currentQuiz==29)
						list[1]=list[1]+(5-i);
					else if(currentQuiz==2 || currentQuiz==8 || currentQuiz==15 || currentQuiz==17 || currentQuiz==25 || currentQuiz==28)
						list[2]=list[2]+(5-i);
					else if(currentQuiz==1 || currentQuiz==7 || currentQuiz==11 || currentQuiz==16 || currentQuiz==21 || currentQuiz==26)
						list[3]=list[3]+(5-i);
					else if(currentQuiz==4 || currentQuiz==9 || currentQuiz==12 || currentQuiz==19 || currentQuiz==23|| currentQuiz==27)
						list[4]=list[4]+(5-i);
					

					
					
					if(currentQuiz==30){
						
						$("#options").empty();
						$("#question").empty();//.text("測驗結果");
						ans.forEach(function(element,index,array){
						$("#options").append(`<tr height="20">`);
						$("#options").append(`<td><img src=${pic[index]} width="50" heigh="50"></td ><td width="100">${ans[index]}  </td><td width="80"> ${list[index]}分</td>`);
						$("#options").append(`<td>${detail[index]}</td>`);
						$("#options").append(`</tr>`);
						});
						
						currentQuiz=null;
						$("#startButton").attr("value","重新開始");
						
					}
					else{
						//指定下一題，原始資料從1開始，所以要-1
						//顯示新的題目
						$("#question").text(questions[currentQuiz]);
						$("#options").empty();
						scores.forEach(function(element,index,array){
						$("#options").append(`<input name='options' type='radio' value='${index
						}'><label class="test_options">${element[0]}</label><br><br>`);
						});
					}
					return false; //跳離迴圈的方式
				}
			});
		}
	});
});


