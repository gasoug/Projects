const jogo_da_velha = {
    placarX: 0,
    placarO: 0,
    tabuleiro: ['','','','','','','','',''],
    simbolos: { 
        jogador: ['X','O'],
        turno: 0,
        trocar: function(){
            this.turno = (this.turno === 0 ? 1 : 0)
        }
},
    container: null,
    gameover: false,
    vitoria: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

init: function(cont){
    this.container = cont
},  
start: function(){
    this.tabuleiro.fill('')
    let placar = document.getElementById('placar').innerHTML = '<p><strong>PLACAR</strong></p><hr size="2" noshade="noshade"/><p><strong style="color:blue;">Player O '+'<strong style="color:black"> - ' + this.placarO + ' | <strong style="color:purple;"> Player X '+'<strong style="color:black"> - ' + this.placarX
    let joga = document.getElementById('player').innerHTML = ' '
    this.draw()
    this.gameover = false    
},

jogadas: function(position){
    let joga = document.getElementById('player').innerHTML = '<p>Passou a vez do Player <strong style="color:blue;">'+ this.simbolos.jogador [ this.simbolos.turno] + '</strong></p>'
    if(this.gameover) return false;
    if(this.tabuleiro[position] === ''){
       this.tabuleiro[position] = this.simbolos.jogador [ this.simbolos.turno ]
       this.draw()

       let vitoria_indice = this.win ( this.simbolos.jogador [ this.simbolos.turno] )
       if(vitoria_indice >= 0 ){
        joga = document.getElementById('player').innerHTML = '<h3 style="color:green;">O Player ' + this.simbolos.jogador [ this.simbolos.turno ] + ' foi o VENCEDOR!</h3><h3>Clique em <strong style="color:green;"> JOGAR </strong> para iniciar um novo jogo.</h3>'
        this.end_game()
       } else {
           this.simbolos.trocar()
       }
       return true
    } else{
        return false   
    }
},

end_game: function(){
    this.gameover = true    
},

win: function(simbolo){
    for (i in this.vitoria) {
     if(this.tabuleiro [ this.vitoria[i][0] ] == simbolo &&  
        this.tabuleiro [ this.vitoria[i][1] ] == simbolo &&   
        this.tabuleiro [ this.vitoria[i][2] ] == simbolo){
            //console.log(simbolo)
           
                if(simbolo == 'X'){
                   this.placarX++
                }
                if(simbolo == 'O'){
                   this.placarO++
                }
            
            console.log("Placar: Player O - " + this.placarO + " | Player X - " + this.placarX)
            return i     
        }   
    } 
    return -1   
},

draw: function(){
    let content = ''
    for(i in this.tabuleiro){
        content += '<div onclick="jogo_da_velha.jogadas(' + i + ')">' + this.tabuleiro[i] + '</div>'
    }
    this.container.innerHTML = content   
}    
}