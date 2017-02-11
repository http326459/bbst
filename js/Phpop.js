
//公用弹框js

//实现滚动条无法滚动
var mo=function(e){e.preventDefault();};

/***禁止滑动***/
function stop(){
        document.body.style.overflow='hidden';        
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

/***取消滑动限制***/
function move(){
        document.body.style.overflow='auto';//出现滚动条
        document.removeEventListener("touchmove",mo,false);        
}
//蒙层
function modal_hy(){
	var modal=document.createElement('div');
	//location.href ="#top";
	modal.id="b_modal";
	modal.className="modal";
	document.body.appendChild(modal);
}

//弹框a

function bouncedaa(){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//活动规则框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "bouncedone";
	var html='<div class="inco"><img src="images/act.png"/>'+
				'<div class="shut"><a href="#" id="off" class="off"><img src="images/shut.png"/></a></div>'+
				'<a href="#" class="know" id="queding"></a></div>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('off');
	var close1=document.getElementById('queding');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
	close1.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};



//弹框b
function bouncedbb(){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//活动规则框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "bouncedtwo";
	var html='<div class="intwo"><img src="images/takk.png"/>'+
					'<a href="#" id="queding"></a>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('queding');
	modal.style.display="block";
	box.style.display="block";
	//stop();
	close.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};

