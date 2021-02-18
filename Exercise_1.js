var vector = [];
var st;
st = prompt("Введіть елементи через кому: ", "");
vector = st.split(", ");
if(vector.length == 0)document.write("Ви не ввели елементи, або ввід не коректний");
else{
    var res = 0.0;
    for(var i = 0; i < vector.length; i++)
        {
            res += parseFloat(vector[i]);
        }
    res /= parseFloat(vector.length);
    document.write("<table border=\"5\" cellspacing=\"0\" cellpadding=\"5\">");
    document.write("<tr>");
    for(var i=0;i<vector.length;i++)
        {
            document.write("<td align=\"center\">");
            document.write(vector[i]);
            document.write("</td>");
        }
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td colspan=\""+vector.length+"\" align=\"center\">");
    document.write(res);
    document.write("</td")
    document.write("</tr>")
    document.write("<table>");
}
