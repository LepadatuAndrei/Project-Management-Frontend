import { TeamMember } from "./team-member";

export class TeamMemberTask {
    constructor(
        public idTask:number,
        public taskName:string,
        public taskDescription:string,
        public taskCreationDate:Date,
        public taskDeadline:Date|null,
        public taskStatus:string,
        public idTeamMember:number,
        public teamMember:TeamMember
    ){}
}
