var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
var trhead=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="first";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Last";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Handle";

trhead.append(th1,th2,th3);
thead.append(trhead);

var tbody=document.createElement("tbody");
var trbody=document.createElement("tr");


function tdcreate(tagname,contant){
    var ele=document.createElement(tagname);
    ele.innerHTML=contant;
    return ele;

}

var td1=tdcreate("td","Mark");
var td2=tdcreate("td","Otto");
var td3=tdcreate("td","mdo");


trbody.append(td1,td2,td3);
tbody.append(trbody);
table.append(thead,tbody);
document.body.append(table);
