export class Coder{
    
    static valor = 1

    constructor( id, nombre, seleccionado = false, url){
        this.id = id
        this.nombre = nombre
        this.seleccionado = seleccionado
        this.url = url
    }
}