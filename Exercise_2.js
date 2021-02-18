function Start1() {
    var inv_1 = document.getElementById('n1');
    var inv_2 = document.getElementById('n2');
    var n = inv_1.value;
    var m = inv_2.value;
    var mas=[];
    for(var i=0;i<n;i++)
    {
        mas[i]=[];
        document.write("| ");
        for(var j=0;j<m;j++)
            {
                var res = Math.cos(i-j);
                if(res>0)document.write("+"+ res.toFixed(3) + " ");
                else document.write(res.toFixed(3) + " ");
                mas[i][j]=res.toFixed(3);
            }
        document.write(" |<BR>");
    }

}

function Start2() {
    var inv_1 = document.getElementById('n1');
    var inv_2 = document.getElementById('n2');
    var n = inv_1.value;
    var m = inv_2.value;
    for(var i=0;i<n;i++)
    {
        document.write("| ");
        for(var j=0;j<m;j++)
            {
                document.write("<input type=\"text\" id=\""+ i +"_"+j+"\" >");
            }
        document.write(" |<BR>");
    }
    document.write("<button onclick=\"Start3("+n+","+m+")\">Вивести</button>");
}
function Start3(n,m)
    {
        console.log(n+" "+m);
        var mas=[];
        document.write("<BR>");
        for(var i=0;i<n;i++)
        {
            mas[i]=[];
            document.write("| ");
            for(var j=0;j<m;j++)
                {
                    var inv = document.getElementById(i+"_"+j);
                    mas[i][j]=inv.value;
                    document.write(inv.value + " ");
                }
            document.write(" |<BR>");
        }
    }
