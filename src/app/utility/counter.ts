export class Counter {
    count(start:number, max: number){
        var list:number[] = [];
        for(let i = start; i < max; i++){
            list.push(i);
        }
        return list;
    }
}
