function Login() {
    const nameUser = document.getElementById("playername").value
    localStorage.setItem("playername", nameUser)
    window.location = "gamepage.html"
}