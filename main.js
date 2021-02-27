
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var dia = new Date();
    var hora = dia.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/images/manha.png';
        document.body.style.background = '#e7b173';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/images/tarde.png';
        document.body.style.background = '#fe4800'
    } else {
        //Boa noite!
        img.src = 'imagens/images/noite.png';
        document.body.style.background = '#032042';
    }
}