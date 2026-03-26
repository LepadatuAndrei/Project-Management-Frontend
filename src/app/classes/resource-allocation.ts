import { Project } from "./project";
import { Resource } from "./resource";

export class ResourceAllocation {
    constructor(
        public idAllocation:number,
        public allocationTime:Date,
        public deallocationTime:Date,
        public amount:number,
        public idResource:number,
        public resource:Resource,
        public idResearchProject:number,
        public researchProject:Project
    ){}
}
