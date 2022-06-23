const vetor = []

function addValor(area){
    if(vetor.length == 0){
        area.innerHTML = 'X'
        vetor.push('X')
        saoIguais()
        return
    }
    if(area.innerText == ''){
        if((vetor[vetor.length-1] == 'X') && (vetor.length<10)){
            area.innerHTML = 'O'
            vetor.push('O')
            saoIguais()
            return
        }
        if((vetor[vetor.length-1] == 'O') && (vetor.length<10)){
            area.innerHTML = 'X'
            vetor.push('X')
            saoIguais()
            return
        } 
    }
}

function saoIguais(){
    let n1,n2,n3,n4,n5,n6,n7,n8,n9
    let count = 0

    n1 = document.getElementById('n1')
    n2 = document.getElementById('n2')
    n3 = document.getElementById('n3')
    n4 = document.getElementById('n4')
    n5 = document.getElementById('n5')
    n6 = document.getElementById('n6')
    n7 = document.getElementById('n7')
    n8 = document.getElementById('n8')
    n9 = document.getElementById('n9')

    let vet = [n1,n2,n3,n4,n5,n6,n7,n8,n9]

    if((n1.innerText != '') && (n1.innerText == n2.innerText) && (n1.innerText == n3.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n4.innerText != '') && (n4.innerText == n5.innerText) && (n4.innerText == n6.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n7.innerText != '') && (n7.innerText == n8.innerText) && (n7.innerText == n9.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n1.innerText != '') && (n1.innerText == n4.innerText) && (n1.innerText == n7.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n2.innerText != '') && (n2.innerText == n5.innerText) && (n2.innerText == n8.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n3.innerText != '') && (n3.innerText == n6.innerText) && (n3.innerText == n9.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n5.innerText != '') && (n5.innerText == n1.innerText) && (n5.innerText == n9.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    if((n5.innerText != '') && (n5.innerText == n3.innerText) && (n5.innerText == n7.innerText)){
        document.querySelector('h1').innerHTML = 'GANHOU!!!'
        vetor.length = 9
        return
    }
    for(let i=0; i<9; i++){
        if(vet[i].innerText != ''){
            count++
        }
        if(count == 9){
            document.querySelector('h1').innerHTML = 'EMPATOU!!!'
            return
        }
    }
}

document.querySelector('h2').addEventListener('click', function(){document.location.reload(true)})

document.getElementById('n1').onclick = function(){addValor(this)}
document.getElementById('n2').onclick = function(){addValor(this)}
document.getElementById('n3').onclick = function(){addValor(this)}
document.getElementById('n4').onclick = function(){addValor(this)}
document.getElementById('n5').onclick = function(){addValor(this)}
document.getElementById('n6').onclick = function(){addValor(this)}
document.getElementById('n7').onclick = function(){addValor(this)}
document.getElementById('n8').onclick = function(){addValor(this)}
document.getElementById('n9').onclick = function(){addValor(this)}
