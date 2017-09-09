var container=document.querySelector('.container');
var n;
n=document.querySelectorAll('.container div'); //Getting a nodelist of divs inside container
var r1=document.querySelectorAll('.r1');
var r2=document.querySelectorAll('.r2');
var r3=document.querySelectorAll('.r3');
var r4=document.querySelectorAll('.r4');
var c1=document.querySelectorAll('.c1');
var c2=document.querySelectorAll('.c2');
var c3=document.querySelectorAll('.c3');
var c4=document.querySelectorAll('.c4');
var rows=[r1,r2,r3,r4];
var columns=[c1,c2,c3,c4];
//console.log(rows);
//console.log(columns);
var arr=[];
for(var i=0;i<n.length;i++)
{
arr[i]=n[i];
//console.log(arr[i].dataset.number);
}
//console.log(arr); //Huihui converted nodeList to array
//console.log(check());
//for(var i=0;i<4;i++)  
//addAtRandom();
    

document.body.onkeydown = function(e) {
    var code = e.keyCode;
    if(code == 37) {
        // Left
        left();
    }
    else if(code == 38) {
        // Top
        up();
    }
    else if(code == 39) {
        // Right
        right();
    }
    else if(code == 40) {
        // Down
        down();
    }
    else {
        return true;
    }
}
function addAtRandom()
{
    if(check()==0)
        ;
    else
     {
        while(1)
            {
                var x=Math.floor(Math.random()*16);
                if(arr[x].innerHTML=="")
                    {
                        var y=Math.floor(Math.random()*2+2)
                        if(y==3)
                            y=4;
                        arr[x].innerHTML=`${y}`;
                        arr[x].dataset.content=`${y}`;
                        break;
                    }
            }
     }
}
function check()
{
     var flag=0;
    for(var i=0;i<16;i++)
        {
            if(arr[i].innerHTML=="")
                {
            return 1;
            }
        }
       return flag;
}
function right()
{ 
    var calc=[];
    var counter=0;
    for(var i=0;i<4;i++)
        {
              for(var l=0;l<4;l++)
                        {
                            if(rows[i][l].innerHTML!="")
                                {
                                    for(var b=l;b<4;b++)
                                        if(rows[i][b].innerHTML=="")
                                            counter++;
                                }
                        }
            for(var j=0;j<4;j++)
                {
                  
                    
                    if(rows[i][j].innerHTML!="")
                        {
                    calc.push(rows[i][j].innerHTML);
                              rows[i][j].innerHTML="";
                    rows[i][j].dataset.content="";
                        }
                    
                    
                }
            if(calc.length==4&&calc[0]==calc[1]&&calc[2]==calc[3])
                               {
                                   calc[0]=calc[0]*2;
                                   calc[1]=calc[2]*2;
                                   counter++;
                                   calc.pop();
                                   calc.pop();
                               }
            else{
            // console.log(calc);
            for(var k=calc.length-1;k>0;k--)
                       {
                           
                            if(calc[k]==calc[k-1])
                                    {
                                     calc[k-1]*=2;
                                     calc.splice(k,1);
                                     k--;
                                     counter++;
                                    }
                       }
            }
            //console.log(calc);
            var a=3;
            while(calc.length!=0)
                {
                    
                    var temp=calc.pop();
                    rows[i][a].innerHTML=temp;
                    rows[i][a].dataset.content=temp;
                    a--;
                }
            
           
        }
    if(counter!=0)
    addAtRandom();
    gameEnd();
}
function left()
{
    var calc=[];
    var counter=0;
    for(var i=0;i<4;i++)
        {
            
            for(var l=3;l>=0;l--)
                        {
                            if(rows[i][l].innerHTML!="")
                                {
                                    for(var b=l;b>=0;b--)
                                        if(rows[i][b].innerHTML=="")
                                            counter++;
                                }
                        }
            for(var j=0;j<4;j++)
                {

                    
                    
                    if(rows[i][j].innerHTML!="")
                        {
                    calc.push(rows[i][j].innerHTML);
                            rows[i][j].innerHTML="";
                    rows[i][j].dataset.content="";
                        }

                    
                }
            
             if(calc.length==4&&calc[0]==calc[1]&&calc[2]==calc[3])
                               {
                                  calc[0]=calc[0]*2;
                                   calc[1]=calc[2]*2;
                                   counter++;
                                   calc.pop();
                                   calc.pop();
                               }
                           else{
             //console.log(calc);
            for(var k=0;k<calc.length;k++)
                       {
                          
                            if(calc[k]==calc[k+1])
                                    {
                                     calc[k+1]*=2;
                                    calc.splice(k,1);
                                     k++;
                                     counter++;
                                    }
                       }
                           }
            //console.log(calc);
            var a=0;
            while(calc.length!=0)
                {
                    
                    var temp=calc.shift();
                    rows[i][a].innerHTML=temp;
                    rows[i][a].dataset.content=temp;
                    a++;
                }
            
           
        }
    //console.log(counter);
    if(counter!=0)
    addAtRandom();
        gameEnd();

}
function down(){
    var counter=0;
    var calc=[];
    for(var i=0;i<4;i++)
        {
             for(var l=0;l<4;l++)
                        {
                            if(columns[i][l].innerHTML!="")
                                {
                                    for(var b=l;b<4;b++)
                                        if(columns[i][b].innerHTML=="")
                                            counter++;
                                }
                        }
            for(var j=0;j<4;j++)
                {
                   
                    
                    if(columns[i][j].innerHTML!="")
                        {
                    calc.push(columns[i][j].innerHTML);
                            columns[i][j].innerHTML="";
                    columns[i][j].dataset.content="";
                        }
                    
                    
                }
             if(calc.length==4&&calc[0]==calc[1]&&calc[2]==calc[3])
                               {
                                   calc[0]=calc[0]*2;
                                   calc[1]=calc[2]*2;
                                   counter++;
                                   calc.pop();
                                   calc.pop();
                               }
            else
                {
             //console.log(calc);
            for(var k=calc.length-1;k>=0;k--)
                       {
                          
                           
                            if(calc[k]==calc[k-1])
                                    {
                                     calc[k-1]*=2;
                                    calc.splice(k,1);
                                     k--;
                                     counter++;
                                    }
                       }
                }
            //console.log(calc);
            var a=3;
            while(calc.length!=0)
                {
                    
                    var temp=calc.pop();
                    columns[i][a].innerHTML=temp;
                    columns[i][a].dataset.content=temp;
                    a--;
                }
            
           
        }
    if(counter!=0)
    addAtRandom();
    gameEnd();
}
function up(){
    var counter=0;
    var calc=[];
    for(var i=0;i<4;i++)
        {
                    for(var l=3;l>=0;l--)
                        {
                            if(columns[i][l].innerHTML!="")
                                {
                                    for(var b=l;b>=0;b--)
                                        if(columns[i][b].innerHTML=="")
                                            counter++;
                                }
                        }
            for(var j=0;j<4;j++)
                {

                    if(columns[i][j].innerHTML!="")
                        {
                    calc.push(columns[i][j].innerHTML);
                            columns[i][j].innerHTML="";
                    columns[i][j].dataset.content="";
                        }
                    
                    
                }
            
            if(calc.length==4&&calc[0]==calc[1]&&calc[2]==calc[3])
                               {
                                   calc[0]=calc[0]*2;
                                   calc[1]=calc[2]*2;
                                   counter++;
                                   calc.pop();
                                   calc.pop();
                               }
            else
                {
            for(var k=0;k<calc.length;k++)
                       {
                           
                            if(calc[k]==calc[k+1])
                                    {
                                     calc[k+1]*=2;
                                    calc.splice(k,1);
                                     k++;
                                        counter++;
                                    }
                       }
                }
            //console.log(calc);
            var a=0;
            while(calc.length!=0)
                {
                    
                    var temp=calc.shift();
                    columns[i][a].innerHTML=temp;
                    columns[i][a].dataset.content=temp;
                    a++;
                }
            
           
        }
    if(counter!=0)
    addAtRandom();
    gameEnd();
    
}
function gameEnd(){
}