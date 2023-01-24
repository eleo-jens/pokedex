export class Pokemon {
    Id : number;
    Name: string; 
    Height: number; 
    Weight: number;
    Spicie : string; 
    Description : string;
    FirstType : string;
    SecondType: string; 

    constructor (id: number, name: string, 
        height: number, weight: number, spicie: string, 
        description: string, firstType: string, secondType: string){
        this.Id = id,
        this.Name = name,
        this.Height = height,
        this.Weight = weight,
        this.Spicie = spicie,
        this.Description = description,
        this.FirstType = firstType,
        this.SecondType = secondType
    }
}