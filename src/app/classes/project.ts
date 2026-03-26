import { Moment } from "moment";
import { Acquisition } from "./acquisition";
import { Budget } from "./budget";
import { ResourceAllocation } from "./resource-allocation";
import { Stage } from "./stage";
import { TeamMember } from "./team-member";

export class Project {
    constructor(
        public idProject:number,
        public projectName:string,
        public projectDescription:string,
        public projectObjectives:string,
        public projectCreationDate:Date,
        public teamMembers:TeamMember[],
        public idBudget:number,
        public budget:Budget,
        public resourceAllocations: ResourceAllocation[],
        public stages:Stage[],
        public acquisitions:Acquisition[]
    ){}
}
