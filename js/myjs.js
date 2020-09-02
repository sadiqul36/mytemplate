function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function progress1(){
	var pr=document.getElementById('pr1');
	var parcent=document.getElementById('pr-parcent1');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress1();
function progress2(){
	var pr=document.getElementById('pr2');
	var parcent=document.getElementById('pr-parcent2');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress2();
function progress3(){
	var pr=document.getElementById('pr3');
	var parcent=document.getElementById('pr-parcent3');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress3();
function progress4(){
	var pr=document.getElementById('pr4');
	var parcent=document.getElementById('pr-parcent4');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress4();

function progress5(){
	var pr=document.getElementById('pr5');
	var parcent=document.getElementById('pr-parcent5');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress5();

function progress6(){
	var pr=document.getElementById('pr6');
	var parcent=document.getElementById('pr-parcent6');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress6();

function progress7(){
	var pr=document.getElementById('pr7');
	var parcent=document.getElementById('pr-parcent7');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress7();

function progress8(){
	var pr=document.getElementById('pr8');
	var parcent=document.getElementById('pr-parcent8');
	var counter=5;
	var progress=25;
	var id = setInterval(frame, 10);
	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
			}
			else
			{
			progress =progress+5;
			counter += 1;
			pr.style.width = progress + 'px';
			parcent.innerHTML = counter + '%';
		}
	}
}

progress8();

function progress9(){
	
	var parcent=document.getElementById('timer1');
	var counter=0;
	
	var id = setInterval(frame, 10);
	function frame(){
		if(counter == 55){
			clearInterval(id);
			}
			else
			{
			
			counter += 1;
			
			parcent.innerHTML = counter + '-PCs';
		}
	}
}

progress9();

function progress10(){
	
	var parcent=document.getElementById('timer2');
	var counter=5;
	
	var id = setInterval(frame, 10);
	function frame(){
		if(counter == 105){
			clearInterval(id);
			}
			else
			{
			
			counter += 1;
			
			parcent.innerHTML = counter + '-PCs';
		}
	}
}

progress10();

function progress11(){
	
	var parcent=document.getElementById('timer3');
	var counter=5;
	
	var id = setInterval(frame, 10);
	function frame(){
		if(counter == 99){
			clearInterval(id);
			}
			else
			{
			
			counter += 1;
			
			parcent.innerHTML = counter + '-PCs';
		}
	}
}

progress11();

function progress12(){
	
	var parcent=document.getElementById('timer4');
	var counter=5;
	
	var id = setInterval(frame, 10);
	function frame(){
		if(counter == 55){
			clearInterval(id);
			}
			else
			{
			
			counter += 1;
			
			parcent.innerHTML = counter + '-PCs';
		}
	}
}

progress12();