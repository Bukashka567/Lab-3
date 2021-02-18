
function Start2() {
        var inv = document.getElementById('n1');
        var n = inv.value;
        for(var i=0;i<n;i++)
        {
            document.write("| ");
            for(var j=0;j<n;j++)
                {
                    document.write("<input type=\"text\" id=\""+ i +"_"+j+"\" >");
                }
            document.write(" |<BR>");
        }
        document.write("<button onclick=\"Start3("+n+")\">Показати результат</button>");
    }

function Start3(n)
    {
        var res = 1;
        var count = 0;
        var mas=[];
        document.write("<BR>");
        for(var i=0;i<n;i++)
        {
            mas[i]=[];
            for(var j=0;j<n;j++)
                {
                    var inv = document.getElementById(i+"_"+j);
                    if(inv.value < 0 && i % 2 != 0 && j % 2 != 0)
                        {
                            res *= inv.value;
                            count++;
                        }
                    mas[i][j] = inv.value;
                }
        }
        if(count != 0)document.write("Добуток чисел з непарними індексами і відємним значенням: " + res);
        else{
            document.write("Матриця не містить таких компонентів!");
        }
    }
