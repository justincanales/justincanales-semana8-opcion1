class Tareas {
    constructor(tarea){
        this.tarea = tarea
        this.agregarLista()
        this.reset()
        this.estados()
        this.borrar()
    }
    agregarLista(){
        let listaTareas = document.getElementById("listaTareas")
        let div = document.createElement("div")
        div.classList.add("row")
        div.innerHTML = `<strong class="col-3 mt-2"><input type="checkbox"
                         class="m-1">${this.tarea}</strong>
                         <button id="select" class="btn btn-ligth col-3 mb-3 mx-2">SELECT</button>
                         <button id="borrar" class="btn btn-info col-3 mb-3 mx-2">BORRAR</button><hr>`
        listaTareas.appendChild(div)
    }
    reset(){
        document.getElementById("formulario").reset()
    }
    estados(){
        document.getElementById("listaTareas").addEventListener("click",(e) => {
            if(e.target.id === "select"){
                e.target.classList.replace("btn-ligth","btn-success")
                e.target.innerText = "MENOR"
                e.target.setAttribute("id","prioridad")
            }else if(e.target.id === "prioridad"){
                e.target.classList.replace("btn-success","btn-warning")
                e.target.innerText = "MEDIO"
                e.target.setAttribute("id","prioridad1")
            }else if(e.target.id === "prioridad1"){
                e.target.classList.replace("btn-warning","btn-danger")
                e.target.innerText = "MAYOR"
                e.target.setAttribute("id","prioridad2")
            }else if(e.target.id === "prioridad2"){
                e.target.classList.replace("btn-danger","btn-ligth")
                e.target.innerText = "SELECT"
                e.target.setAttribute("id","select")
            }
        })
    }
    borrar(){
        document.getElementById("listaTareas").addEventListener("click",(e)=> {
            if(e.target.id === "borrar"){
                e.target.parentElement.remove()
            }
        })
    } 
}

document.getElementById("formulario").addEventListener("submit",(e) => {
    e.preventDefault()
    const tarea = document.getElementById("input").value
    const tareas = new Tareas(tarea.toUpperCase()) 
})