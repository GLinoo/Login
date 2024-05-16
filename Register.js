let email = 'item1', user = 'item2'
let senha = 'item3', senha2 = 'item4'


function cadastroUser(){
    localStorage.setItem(email,document.getElementById('mail').value)
    localStorage.setItem(user,document.getElementById('usuario').value)
    localStorage.setItem(senha,document.getElementById('pass1').value)
    localStorage.setItem(senha2,document.getElementById('pass2').value)
    alert("Cadastro realizado com sucesso")
    window.location.href='login.html'

}
function mostrarDados(){
    alert(localStorage.getItem(email) + "\n" +
          localStorage.getItem(user) + "\n" +
          localStorage.getItem(senha) 
    
    )

}

function logarUser(){
let usuario = document.getElementById('user1').value 
let password = document.getElementById('senha1').value
let usu = localStorage.getItem(user)
let senh = localStorage.getItem(senha)
if(usuario == usu && password == senh){
    alert("Login realizado com sucesso")
    window.location.href=''
}else{
    alert("Usuario e/ou senha incorretos")
}
}