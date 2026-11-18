
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
} 

function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })

}

ativacaoMenu()

function sobreMim(){
    const experiencia = document.querySelectorAll('.experiencia_content div');
    const botao = document.querySelectorAll('.experiencia_content ul li')
    const Educação = document.querySelectorAll('.educação_content div');
    const botaoEducação = document.querySelectorAll('.educação_content ul li')


    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    Educação[0].classList.add('ativo')
    botaoEducação[0].classList.add('ativo')

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }

        function slideShow2(index){
        Educação.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducação.forEach((item)=>{
            item.classList.remove('ativo')
        });
        Educação[index].classList.add('ativo')
        botaoEducação[index].classList.add('ativo')
    }

    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    botaoEducação.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
}
sobreMim();




const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if(buttom == 'design'){
        lista[0].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[1].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[2].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }

        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }

        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
});