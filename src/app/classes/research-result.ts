import { Stage } from "./stage";

export class ResearchResult {
    constructor(
        public idResult:number,
        public resultName:string,
        public date:Date,
        public idProjectStage:number,
        public projectStage:Stage
    ){}
}
