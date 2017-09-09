var nodes=document.querySelectorAll('.container div');

for(var i=0;i<15;i++)
    {
        if((nodes[i].innerHTML)%4096==0&&(nodes[i].innerHTML!=0))
            {
                var x=Math.floor(Math.random()*170);
                var y=Math.floor(Math.random()*50);
                var z=Math.floor(Math.random()*250);
                var s='rgb'+'('+x+','+y+','+z+')';
                console.log(s);
                nodes[i].style.backgroundColor=s;
            }
    }