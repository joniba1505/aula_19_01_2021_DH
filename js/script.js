function envio() {

    var nome = $("#nome").val()
var cidade = $("#cidade").val()


$.ajax({
   method: "POST",
   url: "http://localhost:3000/usuarios",
   data: {
       "id": 4,
       "nome": nome,
       "cidade": cidade
   }, 
success: function() {
    alert("Dados salvos com sucesso!")
},
error: function() {
    alert("Ocorreu um erro inesperado e os dados não foram salvos!")
}

})

}