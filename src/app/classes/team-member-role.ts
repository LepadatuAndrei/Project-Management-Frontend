import { TeamMember } from "./team-member";

export class TeamMemberRole {
    constructor(
        public idRole:number,
        public roleName:string,
        public roleDescription:string,
        public idTeamMember:number,
        public teamMember:TeamMember
    ){}
}
