var guess = 0
var y = Math.floor(Math.random() * 10 + 1);
function invia() {
    var x = document.getElementById("numeru").value
    console.log(y, x)
    guess++;
    if (1 <= x && x <= 10) {
    if (x == y) {
        alert("PARABÉNS MEU CARO AMIGO!!! VOCÊ ACERTOU EM " + guess + " TENTATIVA(S)")
        guess = 0
    } else if (x > y) {
    
     alert("Opa, resposta errada!! Tente um número menor")
    } else {
        
    alert("Opa, resposta errada!! Tente um número maior")
    } 
}

}

function preiagain() {
    y = Math.floor(Math.random() * 10 + 1)
}