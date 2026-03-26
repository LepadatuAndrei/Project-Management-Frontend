import { Project } from "./project";

export class Acquisition {
    constructor(
        public idAcquisition: number,
        public acquisitionedObjectName:string,
        public amount:number,
        public unitOfMeasurement:string,
        public pricePerUnit:number,
        public currency:string,
        public acquisitionDate:Date,
        public IdResearchProject:number,
        public researchProject:Project
    ){}

}
