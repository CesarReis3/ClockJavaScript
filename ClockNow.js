function updateClock(){
    var date = new Date()
    var dnome = date.getDay() - 1
    var mes = date.getMonth()
    var dnumero = date.getDate()
    var ano = date.getFullYear()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var segundos = date.getSeconds()
    var per = "AM"


    if(hora == 0){
        hora = 12
    }

    if(hora > 12){
        hora = hora - 12;
        per = "PM"
    }

    if(dnumero < 10){
        dnumero = `0${dnumero}`
    }

    if(hora < 10){
        hora = `0${hora}`
    }

    if(minutos < 10){
        minutos = `0${minutos}`
    }

    if(segundos < 10){
        segundos = `0${segundos}`
    }


    var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","junho","Julho","Agosto","Outubro","Novembro","Dezembro"]
    var semana =["Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado","Domingo"]
    var ids = ["dianome","mes","dianumero","ano","horas","minutos","segundos","periodos"]
    var valores = [semana[dnome],meses[mes],dnumero,ano,hora,minutos,segundos,per]

    for(var i = 0; i < ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = valores[i]
    }
    






}

function initClock(){
    updateClock()
    window.setInterval("updateClock()", 1)

}