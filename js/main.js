document.body.style.backgroundImage='url(img/0-start.jpg)';
document.body.style.backgroundSize='cover';
document.body.style.height=100+'%';
let button=document.getElementById('button');
button.style.position='absolute';
button.style.top=75+'%';
button.style.left=80+'%';
let set=document.getElementById('set');
let time=document.getElementById('time');
let points=0;// очки
let time1=60;// час

button.onclick=function(){
    button.hidden=true;
    document.body.style.backgroundImage='url(img/fon.jpg)';
    document.body.style.backgroundSize='cover';
    document.body.style.height=100+'%';
    
    set.innerHTML='Ваш счет: '+points;
    set.style.position='absolute';
    set.style.top=3+'%';
    set.style.left=45+'%';
    set.style.color="white";
    set.style.zIndex=100;
    set.style.textShadow=4+'px' +4+'px' +4+'px'+'red';
    
    time.style.position='absolute';
    time.style.top=6+'%';
    time.style.left=45+'%';
    time.style.color="white";
    time.style.zIndex=98;
    time.style.textShadow=4+'px'+4+'px'+'red';
    function timeOuts(){
        time1--;
        class bird{
            constructor(pointsB,positionX,positionY,picture,height,width){
                this.pointsB=pointsB
                this.positionX=positionX
                this.positionY=positionY
                this.picture=picture
                this.height=height
                this.width=width
            }
            displayInformation=function(){
                var div=document.createElement('div');
                document.body.append(div);
                div.style.position='absolute';
                div.style.top=this.positionX+'%';
                div.style.left=this.positionY+'%';
                div.style.backgroundImage='url("img/'+this.picture+'.png")';
                div.style.backgroundSize='cover';
                div.style.height=this.height+'px';
                div.style.width=this.width+'px';
                div.style.zIndex=97;
                var pointsA=this.pointsB;
                div.innerHTML;
                setTimeout(() => div.remove(), 1000);
                div.onclick=function(){
                    div.style.backgroundImage='url(img/bang.png)';
                    div.style.backgroundSize='cover';
                    div.style.position='absolute';
                    div.style.top=this.positionX+'%';
                    div.style.left=this.positionY+'%';
                    div.style.height=86+'px';
                    div.style.width=86+'px';
                    div.style.zIndex=96;
                    points=points+pointsA;
                    set.innerHTML='Ваш счет: '+points;
                }
            }
        }
        var blackB=new bird(10,Math.random()*80,Math.random()*90,1,123,92);
        blackB.displayInformation();
        var redB=new bird(20,Math.random()*80,Math.random()*90,2,106,114);
        redB.displayInformation();
        var blueB=new bird(50,Math.random()*80,Math.random()*90,3,62,80);
        blueB.displayInformation();
        var pig=new bird((-100),Math.random()*80,Math.random()*90,4,120,126);
        pig.displayInformation();
        set.innerHTML='Ваш счет: '+points;
        time.innerHTML='Время: '+time1;
        if(time1==0){
            if(points>=800){
                function end(){
                    document.body.style.backgroundImage='url(img/win.jpg)';
                    document.body.style.backgroundSize='cover';
                    document.body.style.height=100+'%';
                    document.body.style.zIndex=99;
                }
                end();
            }
            else {
                function end2(){
                    document.body.style.backgroundImage='url(img/lose.jpg)';
                    document.body.style.backgroundSize='cover';
                    document.body.style.height=100+'%';
                    document.body.style.zIndex=99;
                }
                end2();
            }
        }
    }
    var int= setInterval(timeOuts,1000);
    setTimeout(()=>{clearInterval(int)},61000);
}