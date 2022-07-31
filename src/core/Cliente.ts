export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    
    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }
    
    static vazio() {
        return new Cliente('', 0, null)
    }

    get id() {
        return this.#id
    }

    set id(v: string) {
        this.#id = v
    }
    
    get nome() : string {
        return this.#nome
    }
    
    set nome(v : string) {
        this.#nome = v;
    }

    get idade() : number {
        return this.#idade
    }
    
    set idade(v : number) {
        this.#idade = v;
    }
    
}