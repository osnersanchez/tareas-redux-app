export class Todo{
    public Id: number;
    public Texto: string;
    public Complet: boolean

    constructor(texto:string){
        this.Texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.Complet = false;
        this.Id = Math.random();
    }
    
    
}