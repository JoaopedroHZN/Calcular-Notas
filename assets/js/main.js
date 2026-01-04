const inputg1 = document.getElementById('g1')
const inputg2 = document.getElementById('g2')
const botao = document.getElementById('botao')
const result = document.getElementById('media-final')

botao.addEventListener('click',function mostrar(){
    if (inputg1.value === '' || inputg2.value === '') {
        alert('Preencha todas as notas');
        return;
    }
    const notag1 = Number(inputg1.value);
    const notag2 = Number(inputg2.value);
    console.log(notag1);
    console.log(notag2);

    if (isNaN(notag1)  || isNaN(notag2)){
        alert('Erro valor Invalido !');
        return;
    }
    const media = (notag1 + (notag2 * 2)) / 3;
    
    result.textContent = `Sua Media Final e: ${media.toFixed(2)}`;
    if (media >= 6.0){
        result.style.backgroundColor ='green'
        result.style.color = 'white';
    }
    else{
        result.style.backgroundColor = 'red'
        result.style.color = 'white';
    }
})
