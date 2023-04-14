let arr = [];
let boll=[0,0,0,0,0];
for(let i=0;i<5;i++){
    arr[i]=boll;
}
showCaro();

function btn() {
    let x = prompt("nhap x:");
    let y = prompt("nhap y:");
    arr[x][y] = "x";
    showCaro();
}

function showCaro() {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result = result + arr[i][j] + "&#160;";
        }
        result += "<br/>";
    }
    document.getElementById("caro").innerHTML = result;

}