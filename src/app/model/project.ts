import { Sector } from './sector';
import { SectorMapper } from './sector-mapper';
import { Donor } from './donor';
import { GlobalText } from '../../texts/global';
import { DistributionsComponent } from '../modules/projects/distributions/distributions.component';
import { DatePipe } from '@angular/common';

export class Project {
    static __classname__ = 'Project';
    /**
     * Project's id
     * @type {number}
     */
    id: number;
    /**
     * Project's name
     * @type {string}
     */
    name = '';
    /**
    * Project's sector
    * @type {string[]}
    */
    sectors_name: string[] = [];
    /**
     * Project's sector
     * @type {Sector[]}
     */
    sectors: Sector[] = [];
    /**
     * Project's start_date
     * @type {Date}
     */
    start_date: Date;
    /**
     * Project's end_date
     * @type {Date}
     */
    end_date: Date;
    /**
     * Project's number_of_households
     * @type {number}
     */
    number_of_households: number;
    /**
    * Project's donors
    * @type {string[]}
    */
    donors_name: string[] = [];
    /**
     * Project's donors
     * @type {Donor[]}
     */
    donors: Donor[] = [];
    /**
     * Project's iso3
     * @type {string}
     */
    iso3: string;
    /**
     * Project's target beneficiaries
     * @type {Float32Array}
     */
    value: Float32Array;
    /**
     * Project's notes
     * @type {string}
     */
    notes: string;
     /**
     * Project's reached beneficiaries
     * @type {number}
     */
    reached_benef: number;

    constructor(instance?) {

        if (instance !== undefined) {
            this.id = instance.id;
            this.name = instance.name;
            this.start_date = instance.start_date ? instance.start_date : new DatePipe('en-US').transform(new Date(), 'yyyy-dd-MM');
            this.end_date = instance.end_date ? instance.end_date : new DatePipe('en-US').transform(new Date(), 'yyyy-dd-MM');
            this.number_of_households = instance.number_of_households;
            this.iso3 = instance.iso3 ? instance.iso3 : '';
            this.value = instance.value ? instance.value : null;
            this.notes = instance.notes ? instance.notes : '';
            this.reached_benef = instance.reached_benef;
        }
    }

    public static getDisplayedName() {
        return GlobalText.TEXTS.project;
    }

    /**
    * return Project properties name displayed
    */
    static translator(): Object {
        return {
            name: GlobalText.TEXTS.model_project_name,
            sectors_name: GlobalText.TEXTS.model_sectors_name,
            start_date: GlobalText.TEXTS.model_project_start_date,
            end_date: GlobalText.TEXTS.model_project_end_date,
            number_of_households: GlobalText.TEXTS.model_project_number_of_households,
            donors_name: GlobalText.TEXTS.model_project_donors_name,
            notes: GlobalText.TEXTS.model_notes,
            value: GlobalText.TEXTS.model_project_value,
            reached_benef: GlobalText.TEXTS.add_distribution_beneficiaries_reached
        };
    }

    public static formatArray(instance): Project[] {
        const projects: Project[] = [];
        if (instance) {
            instance.forEach(element => {
                projects.push(this.formatProject(element));
            });
        }
        return projects;
    }

    public static formatProject(element: any): Project {
        const project = new Project(element);
        project.sectors = [];
        project.donors = [];

        if (element.sectors) {
            element.sectors.forEach(sector => {
                project.sectors.push(new Sector(sector));
                project.sectors_name.push(sector.name);
            });
        }

        if (element.donors) {
            element.donors.forEach(donor => {
                project.donors.push(new Donor(donor));
                project.donors_name.push(donor.shortname);
            });
        }

        const reachedBeneficiaries = [];
        if (element.distributions) {
            element.distributions.forEach(distribution => {
                distribution.distribution_beneficiaries.forEach(distributionBeneficiary => {
                    reachedBeneficiaries.push(distributionBeneficiary.beneficiary.id);
                });
            });
        }
        const uniqueReachedBeneficiaries = reachedBeneficiaries ? [new Set(reachedBeneficiaries)] : [];
        project.reached_benef = uniqueReachedBeneficiaries[0].size;
        return project;
    }

    public static formatForApi(element): any {
        const project = new Project(element);
        if (element.sectors_name) {
            element.sectors_name.forEach(sector => {
                const newSector = new Sector();
                newSector.id = sector.id;
                project.sectors.push(new Sector(newSector));
            });
        } else {
            project.sectors = [];
        }
        if (element.donors_name) {
            element.donors_name.forEach(donor => {
                const newDonor = new Donor();
                newDonor.id = donor.id;
                project.donors.push(new Donor(newDonor));
            });
        } else {
            project.donors = [];
        }
        return project;
    }

    public static formatFromModalAdd(object, data) {
        return object;
    }

    public static getAddDescription(): String {
        return GlobalText.TEXTS.project_description;
    }

    mapAllProperties(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        const donorsArray = [];
        if (selfinstance.donors) {
            selfinstance.donors.forEach(element => {
                donorsArray.push(element);
            });
        }

        const sectorsArray = [];
        if (selfinstance.sectors) {
            selfinstance.sectors.forEach(element => {
                sectorsArray.push(element);
            });
        }

        return {
            id: selfinstance.id,
            name: selfinstance.name,
            start_date: selfinstance.start_date,
            end_date: selfinstance.end_date,
            iso3: selfinstance.iso3,
            notes: selfinstance.notes,
            value: selfinstance.value,
            donors_name: donorsArray,
            sectors_name: sectorsArray,
            reached_benef: selfinstance.reached_benef
        };
    }

    /**
    * return a Project after formatting its properties
    */
    getMapper(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            name: selfinstance.name,
            sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
            start_date: selfinstance.start_date,
            end_date: selfinstance.end_date,
            number_of_households: selfinstance.number_of_households,
            donors_name: selfinstance.donors_name,
            reached_benef: selfinstance.reached_benef

        };
    }

    /**
    * return a Project after formatting its properties for the modal details
    */
    getMapperDetails(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            name: selfinstance.name,
            sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
            start_date: selfinstance.start_date,
            end_date: selfinstance.end_date,
            number_of_households: selfinstance.number_of_households,
            value: selfinstance.value,
            donors_name: selfinstance.donors_name,
            reached_benef: selfinstance.reached_benef
        };
    }

    /**
     * return a Project after formatting its properties for the modal add
     */
    getMapperAdd(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            name: selfinstance.name,
            sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
            start_date: selfinstance.start_date,
            end_date: selfinstance.end_date,
            donors_name: selfinstance.donors_name,
            value: selfinstance.value,
            notes: selfinstance.notes
        };
    }

    /**
    * return a Project after formatting its properties for the modal update
    */
    getMapperUpdate(selfinstance: any, data?: any): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        let obj;

        if (data && Number(data.number_of_households) === 0) {
            obj = {
                name: selfinstance.name,
                sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
                start_date: selfinstance.start_date,
                end_date: selfinstance.end_date,
                value: selfinstance.value,
                donors_name: selfinstance.donors_name,
            };
        } else {
            obj = {
                sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
                start_date: selfinstance.start_date,
                end_date: selfinstance.end_date,
                value: selfinstance.value,
                donors_name: selfinstance.donors_name,
            };
        }

        return obj;
    }

    /**
    * return a Project after formatting its properties for the box properties
    */
    getMapperBox(selfinstance): Object {

        if (!selfinstance) {
            return selfinstance;
        }
        return {
            start_date: selfinstance.start_date,
            end_date: selfinstance.end_date,
            donors_name: this.mapDonors(selfinstance.donors_name),
            sectors_name: SectorMapper.mapSectors(selfinstance.sectors_name),
            value: selfinstance.value,
            reached_benef: selfinstance.reached_benef,
            number_of_households: selfinstance.number_of_households,
        };
    }

    /**
    * return the type of Project properties
    */
    getTypeProperties(selfinstance): Object {
        return {
            name: 'text',
            sectors_name: 'image',
            start_date: 'date',
            end_date: 'date',
            number_of_households: 'number',
            donors_name: 'text',
            reached_benef: 'number'

        };
    }

    /**
    * return the type of Project properties for modals
    */
    getModalTypeProperties(selfinstance): Object {
        return {
            name: 'text',
            sectors_name: 'select',
            start_date: 'date',
            end_date: 'date',
            donors_name: 'selectDonor',
            value: 'number',
            reached_benef: 'number'
        };
    }

    mapDonors(donors: any) {
        let donorString = '';
        donors.forEach(donor => {
            donorString = donorString === '' ? donor : donorString + ', ' + donor;
        });

        return donorString;
    }
}
