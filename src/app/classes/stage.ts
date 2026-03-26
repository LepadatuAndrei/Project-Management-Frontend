import { Budget } from "./budget";
import { Project } from "./project";
import { Report } from "./report";
import { ResearchResult } from "./research-result";

export class Stage {
    constructor(
        public idStage:number,
        public stageName:string,
        public tasks:string,
        public stageStatus:string,
        public idResearchProject:number,
        public researchProject:Project,
        public idBudget:number,
        public budget:Budget,
        public reports:Report[],
        public researchResults:ResearchResult[]
    ){}
}
