function start() {

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

	//Game Loop
    var jogo = {}
    var tecla = {
        W: 87,
        S: 83,
        D: 68
    }
    jogo.pressionou = [];

    //Verifica se o usuario pressionou alguma tecla	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    jogo.timer = setInterval(loop, 30);
    function loop() {
        movefundo();
        movejogador();
	}

    //Funcao que movimenta o fundo do jogo
	function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda - 2);
    }

    //Funcao que movimenta o jogador
    function movejogador() {
	
        if (jogo.pressionou[tecla.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);
        
        }
        
        if (jogo.pressionou[tecla.S]) {
            
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);	
        }
        
        if (jogo.pressionou[tecla.D]) {
            
            //Chama funcao Disparo	
        }
    
        }

}