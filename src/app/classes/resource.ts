import { ResourceAllocation } from "./resource-allocation";

export class Resource {
    constructor(
        public idResource:number,
        public resourceName:string,
        public resourceDescription:string,
        public totalAmount:number,
        public resourceAllocations:ResourceAllocation[]
    ){}
}
