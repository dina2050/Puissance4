var div = document.getElementsByTagName("div")[1]
var table = document.createElement("table")
div.appendChild(table)
var pions = document.getElementsByClassName("pions")[0]
var pawn = document.createElement("div")
var click1 = null;
var click2 = null;

for (let i = 0; i < 6; i++) {
    var tr = document.createElement("tr")
    table.appendChild(tr)
    tr.id = i
    for (let j = 0; j < 6; j++) {
        var cell = document.createElement("td")
        tr.appendChild(cell)
        cell.className = "cell"
        cell.id = i + "-" + j
    }
}


for (let k = 0; k < 6; k++) {
    var btn = document.createElement("div")
    pions.appendChild(btn)
    btn.id = k
    btn.addEventListener("click", function () {

        colNum = this.id;
        cells = document.querySelectorAll("td[id$='-" + colNum + "']:not(.played)")
        console.log(cells);
        
        var lastEmptyCell = cells[cells.length - 1];
        lastEmptyCell.classList.add("pawn")
        lastEmptyCell.classList.add("played")
        if(click1==null){
            click1=this
            lastEmptyCell.style.backgroundColor = "red"
        } else {
            click2=this
            lastEmptyCell.style.backgroundColor = "blue"
            click1=null
            click2=null
        }
    });

}