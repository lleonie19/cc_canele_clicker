let nb = 0;
function ajouter()
{
    let p = document.getElementById("nombre");
    nb++;
    p.innerText = nb;
}
document.addEventListener("click",ajouter);
