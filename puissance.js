var div = document.getElementsByTagName("div")[1]
var table = document.createElement("table")
div.appendChild(table)
var pions = document.getElementsByClassName("pions")[0]

for(let i=0; i<6; i++){
    var tr = document.createElement("tr")
    table.appendChild(tr)
    for (let j=0; j<6; j++){
        var cell = document.createElement("td")
        tr.appendChild(cell)
        cell.id="cell"
    }
}

for (let k=0; k<6;k++){
    var btn=document.createElement("div")
    pions.appendChild(btn)
    var pawn = document.createElement("div")
    btn.addEventListener("click",function(){
        cell.classList.add("pawn")
    });
    
}