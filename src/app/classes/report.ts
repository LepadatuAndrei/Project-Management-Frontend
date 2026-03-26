import { Stage } from "./stage";

export class Report {
    constructor(
        public idReport:number,
        public reportName:string,
        public reportCreationDate:Date,
        public idProjectStage:number,
        public ProjectStage:Stage
    ){}
}
