$('#submit').click(function(e){
    const date = $('#date').val();
    e.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=lF8GLGPCt5sj8LQpwp3DH5g9rKeLG1wqlx7wuUqa&date=${date}`,
        success: function(resposta){
            mostra(resposta)
            console.log(resposta)
            console.log(date)
        },
        erro: function(erro) {
            showError(erro)
            console.log(erro)
        }
    })
})


$('#date').keydown(function(event){
    if (event.which == 13) {
        $('#submit').click();
    }
})

function mostra(resposta){
    if(resposta.media_type == 'video'){
        $('.divimagem').css('display', 'none');
        $('.textimag').css('display', 'flex').css('textAlign', 'center');
        $('.divideo').css('display', 'flex');
        $('#vid').attr("src", resposta.url).css('justifyContent', 'center');
        $('.ptext').css("display", "flex").css('textAlign', 'center');
        $('#text').text(resposta.explanation);
        $('#tvid').text(resposta.title);
        $('.conteiner'). css("display","flex");
    } else{
        $('.divimagem').css('display', 'flex');
        $('.textimag').css('display', 'flex').css('textAlign', 'center');
        $('.divideo').css("display", "none");
        $('#img').attr("src", resposta.url).css('justifyContent', 'center');
        $('.ptext').css("display", "flex").css('textAlign', 'center');
        $('#text').text(resposta.explanation);
        $('#timg').text(resposta.title);
        $('.conteiner'). css("display","flex");
    }
}