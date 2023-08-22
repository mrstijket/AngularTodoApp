export class Model{
    user;
    items;

    constructor(){
        this.user = "Dogu";
        this.items = [
            new TodoItem("Kahvalti",false),
            new TodoItem("Ders",false),
            new TodoItem("Kitap",false),
            new TodoItem("Spor",false)
          ];
    }
}

export class TodoItem{
    description;
    check_state;

    constructor(description: any, check_state: any){
        this.description = description;
        this.check_state = check_state;
    }
}