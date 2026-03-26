import { TeamMember } from "./team-member";

export class User {
    constructor(
        public idUser:number,
        public username:string,
        public emailAddress:string,
        public displayName:string,
        public registerDate:Date,
        public userRole:string,
        public memberships:TeamMember[]
    ){}
}
