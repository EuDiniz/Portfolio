let menuVisible = false;
//Função que oculta o mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta o  menu uam vez que seleciono uma opção
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Função que aplica as animações das habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


// scrolling para aplicar da animação da barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Envio de Mensagem para o Whatsapp
const evento = document.getElementById('send')
const enviarCONTATO =() =>{
    let Nome = document.getElementById('Nome').value;
    let TemadoAssunto = document.getElementById('TemadoAssunto').value;
    let Mensagem = document.getElementById('Mensagem').value;
    let numero= 5531985096683;
    var win= window.open(`https://wa.me/${numero}?text=Olá%20Meu%20nome%20é%20${Nome}%20${TemadoAssunto}, Mensagem:%20${Mensagem} `,' _blank');
}

evento.addEventListener('click', enviarCONTATO)
    