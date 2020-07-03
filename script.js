function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora =  data.getHours()
msg.innerHTML = `a hora atual eh ${hora} `
msg.onmouseout="aviso()"

if(hora>=0 && hora<12){
    img.src="manha.png"
    document.body.style.background = "#f0c9ba"
}else if(hora>=12 && hora<18){
    img.src = "tarde.png"
    document.body.style.background = "#f4a16e"
}else{
    img.src = "noite.png"
    document.body.style.background = "#a391bc"
}

function aviso(){
    alert("não saia ainda")
}

}
