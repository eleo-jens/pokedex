export class pokemonListItem {
    Id : number; 
    Name : string; 
    Svg : string

    constructor (id: number, name: string, svg: string){
        this.Id = id; 
        this.Name = name, 
        this.Svg = svg
    }
}