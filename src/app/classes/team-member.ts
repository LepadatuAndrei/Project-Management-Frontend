import { Project } from "./project";
import { TeamMemberRole } from "./team-member-role";
import { TeamMemberTask } from "./team-member-task";
import { User } from "./user";

export class TeamMember {
    constructor(
        public idTeamMember:number,
        public teamJoinDate:Date,
        public idResearcher:number,
        public researcher:User,
        public teamMemberTasks:TeamMemberTask[],
        public idResearchProject:number,
        public researchProject:Project,
        public idTeamMemberRole:number,
        public teamMemberRole:TeamMemberRole
    ){}
}
