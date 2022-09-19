function calcular(){

var data =  new Date()
var ano =  data.getFullYear()
var fano = document.getElementById('data')
var res = document.getElementById('txt')

if(fano.value.length == 0 || Number(fano.value)>ano){
    window.alert('[Erro] Digite novamente!')
}
else{
    var img = document.getElementById('imagen')
    var fsex = document.getElementsByName('radsex') /* usamos o name aqui para englobar M e F e depois usamos [] para escolher se é o 1 ou 2 */
    var idade = ano - Number(fano.value)
    var genero = ''
        if(fsex[0].checked){
            genero = "Homem"
            
            if(idade >=0 && idade<5){
                img.src = "imagens/bebeazul.jfif"
            }
            else if(idade >=6 && idade <14){
                img.src = "imagens/criancam.jfif"
            }
            else if(idade >=15 && idade<20){
                img.src = "imagens/adolecente.jfif"
            }
            else if(idade >=20 && idade <60){
                img.src = "imagens/adulto.jfif"
            }
            else if(idade>60){
                img.src = "imagens/idoso.jfif"
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher"

            if(idade >=0 && idade<5){
                img.src = "imagens/beberosa.jfif"
            }
            else if(idade >=6 && idade <14){
                img.src = "imagens/criancaf.jfif"
            }
            else if(idade >=15 && idade<20){
                img.src = "imagens/adolecentef.jfif"
            }
            else if(idade >=20 && idade <60){
                img.src = "imagens/adultof.jfif"
            }
            else if(idade>60){
                img.src = "imagens/idosof.jfif"
            }
        }   

        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
    
        


}

}