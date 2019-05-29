import { CustomModel } from './custom-models/custom-model';
import { DateModelField } from './custom-models/date-model-field';
import { MultipleObjectsModelField } from './custom-models/multiple-object-model-field';
import { NumberModelField } from './custom-models/number-model-field';
import { ObjectModelField } from './custom-models/object-model-field';
import { SingleSelectModelField } from './custom-models/single-select-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { NationalId } from './national-id';
import { Phone } from './phone';
import { Profile } from './profile';
import { VulnerabilityCriteria } from './vulnerability-criteria';

export class Gender extends CustomModel {

    public fields = {
        name: new TextModelField({}),
        id: new TextModelField({})
    };

    constructor(id: string, name: string) {
        super();
        this.set('id', id);
        this.set('name', name);
    }
}

export class ResidencyStatus extends CustomModel {

    public fields = {
        name: new TextModelField({}),
        id: new TextModelField({})
    };

    constructor(id: string, name: string) {
        super();
        this.set('id', id);
        this.set('name', name);
    }
}


export class BeneficiaryStatus extends CustomModel {

    public fields = {
        name: new TextModelField({}),
        id: new TextModelField({})
    };

    constructor(id: string, name: string) {
        super();
        this.set('id', id);
        this.set('name', name);
    }
}

export class Beneficiary extends CustomModel {
    title = this.language.beneficiary;
    matSortActive = 'localFamilyName';
    public fields = {
        id : new NumberModelField(
            {
                title: this.language.id,
                isDisplayedInTable: true,
            },
        ),
        localGivenName: new TextModelField(
            {
                title: this.language.model_firstName,
                placeholder: null,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isRequired: true,
                isSettable: true,
                isLongText: false,
                displayValue: '',
            }
        ),
        localFamilyName: new TextModelField(
            {
                title: this.language.model_familyName,
                placeholder: null,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isRequired: true,
                isSettable: true,
                isLongText: false,
                displayValue: '',
            }
        ),
        enGivenName: new TextModelField(
            {
                title: this.language.add_beneficiary_getEnglishGivenName,
                placeholder: null,
                isDisplayedInModal: false,
                isDisplayedInTable: false,
                isRequired: true,
                isSettable: true,
                isLongText: false,
            }
        ),
        enFamilyName: new TextModelField(
            {
                title: this.language.add_beneficiary_getEnglishFamilyName,
                placeholder: null,
                isDisplayedInModal: false,
                isDisplayedInTable: false,
                isRequired: true,
                isSettable: true,
                isLongText: false,
            }
        ),
        gender: new SingleSelectModelField(
            {
                title: this.language.gender,
                placeholder: null,
                isRequired: true,
                isSettable: true,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isEditable: true,
                options: [
                    new Gender('0', this.language.add_distribution_female),
                    new Gender('1', this.language.add_distribution_male)
                ],
                bindField: 'name',
                apiLabel: 'id',

            }
        ),
        dateOfBirth: new DateModelField({
            title: this.language.model_dateofbirth,
            placeholder: null,
            isDisplayedInModal: true,
            isDisplayedInTable: true,
            isRequired: true,
            isSettable: true,
            isEditable: true,
        }),
        residencyStatus: new SingleSelectModelField(
            {
                title: this.language.model_residencystatus,
                placeholder: null,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isRequired: true,
                isSettable: true,
                isLongText: false,
                options: [
                    new ResidencyStatus('refugee', this.language.residency_refugee),
                    new ResidencyStatus('IDP', this.language.residency_idp),
                    new ResidencyStatus('resident', this.language.residency_resident)
                ],
                bindField: 'name',
                apiLabel: 'id',
                value: new ResidencyStatus('resident', this.language.residency_resident)
            }
        ),
        beneficiaryStatus: new SingleSelectModelField(
            {
                title: this.language.model_beneficiaries_status,
                isDisplayedInModal: true,
                isDisplayedInTable: false,
                options: [
                    new BeneficiaryStatus('0', this.language.beneficiaries_member),
                    new BeneficiaryStatus('1', this.language.beneficiaries_head)
                ],
                isRequired: true,
                isSettable: true,
                isEditable: true,
                bindField: 'name',
                apiLabel: 'id',
            }
        ),
        nationalIds: new MultipleObjectsModelField<NationalId>(
            {
                title: this.language.model_beneficiaries_nationalids,
                isDisplayedInModal: true,
                isDisplayedInTable: false,
                displayTableFunction: null,
                displayModalFunction: null,
                value: []
            }
        ),
        phones: new MultipleObjectsModelField<Phone>(
            {
                title: this.language.phone,
                isDisplayedInModal: true,
                isDisplayedInTable: false,
                displayTableFunction: null,
                displayModalFunction: null,
                nullValue: this.language.null_none,
                value: []
            }
        ),
        vulnerabilities: new MultipleObjectsModelField<VulnerabilityCriteria>(
            {
                title: this.language.model_vulnerabilities,
                isDisplayedInModal: true,
                isDisplayedInTable: true,
                isImageInTable: true,
                displayTableFunction: null,
                displayModalFunction: null,
                value: []
            }
        ),
        localFullName: new TextModelField(
            {
                title: this.language.model_donor_fullname,
                placeholder: null,
                isDisplayedInModal: false,
                isDisplayedInTable: false,
                isRequired: true,
                isSettable: true,
                isLongText: false,
            }
        ),
        profile: new ObjectModelField<Profile>({

        }),
        distributionId: new NumberModelField({

        })
    };


    public static apiToModel(beneficiaryFromApi: any): Beneficiary {
        const newBeneficiary = new Beneficiary();

        newBeneficiary.set('id', beneficiaryFromApi.id);
        newBeneficiary.set('localGivenName', beneficiaryFromApi.local_given_name);
        newBeneficiary.set('localFamilyName', beneficiaryFromApi.local_family_name);
        newBeneficiary.set('enGivenName', beneficiaryFromApi.en_given_name);
        newBeneficiary.set('enFamilyName', beneficiaryFromApi.en_family_name);
        newBeneficiary.fields.localFamilyName.displayValue = beneficiaryFromApi.en_family_name ?
            beneficiaryFromApi.local_family_name + ' (' + beneficiaryFromApi.en_family_name + ')' :
            beneficiaryFromApi.local_family_name;
        newBeneficiary.fields.localGivenName.displayValue = beneficiaryFromApi.en_given_name ?
            beneficiaryFromApi.local_given_name + ' (' + beneficiaryFromApi.en_given_name + ')' :
            beneficiaryFromApi.local_given_name;
        newBeneficiary.set('dateOfBirth', DateModelField.formatFromApi(beneficiaryFromApi.date_of_birth));
        const status = beneficiaryFromApi.status ? '1' : '0';
        newBeneficiary.set('beneficiaryStatus', newBeneficiary.getOptions('beneficiaryStatus')
                .filter((option: BeneficiaryStatus) => option.get<string>('id') === status)[0]);
        newBeneficiary.set('localFullName',
        (beneficiaryFromApi.local_given_name ? beneficiaryFromApi.local_given_name : '') + ' ' +
        (beneficiaryFromApi.local_family_name ? beneficiaryFromApi.local_family_name : ''));

        newBeneficiary.set('residencyStatus',
            beneficiaryFromApi.residency_status ?
            newBeneficiary.getOptions('residencyStatus')
                .filter((option: ResidencyStatus) => option.get('id') === beneficiaryFromApi.residency_status)[0] :
            newBeneficiary.get('residencyStatus'));

        newBeneficiary.set('gender',
            beneficiaryFromApi.gender >= 0 ?
            newBeneficiary.getOptions('gender').filter((option: Gender) => option.get('id') === beneficiaryFromApi.gender.toString())[0] :
            null);

        newBeneficiary.set('nationalIds',
            beneficiaryFromApi.national_ids && beneficiaryFromApi.national_ids.length !== 0 ?
            beneficiaryFromApi.national_ids.map(nationalId => NationalId.apiToModel(nationalId)) :
            [new NationalId()]);

        newBeneficiary.set('phones',
            beneficiaryFromApi.phones && beneficiaryFromApi.phones.length !== 0 ?
            beneficiaryFromApi.phones.map(phone => Phone.apiToModel(phone)) :
            [new Phone(), new Phone()]);

        if (newBeneficiary.get<Phone[]>('phones').length === 1) {
            newBeneficiary.get<Phone[]>('phones').push(new Phone());
        }

        newBeneficiary.set('vulnerabilities',
            beneficiaryFromApi.vulnerability_criteria ?
            beneficiaryFromApi.vulnerability_criteria.map(criteria => VulnerabilityCriteria.apiToModel(criteria)) :
            []);

        newBeneficiary.set('profile', beneficiaryFromApi.profile ? Profile.apiToModel(beneficiaryFromApi.profile) : new Profile());


        newBeneficiary.fields.vulnerabilities.displayTableFunction = value => value;
        newBeneficiary.fields.vulnerabilities.displayModalFunction =
            value => value.map((vulnerability: VulnerabilityCriteria) => vulnerability.get('name'));
        newBeneficiary.fields.phones.displayTableFunction = value => value.map((phone: Phone) => phone.get('number'));
        newBeneficiary.fields.phones.displayModalFunction = value => value.map((phone: Phone) => phone.get('number'));
        newBeneficiary.fields.nationalIds.displayModalFunction = value => value.map((nationalId: NationalId) => nationalId.get('number'));

        return newBeneficiary;

    }

    public modelToApi(): Object {
        return {
            id: this.fields.id.formatForApi(),
            local_given_name: this.fields.localGivenName.formatForApi(),
            local_family_name: this.fields.localFamilyName.formatForApi(),
            en_given_name: this.fields.enGivenName.formatForApi(),
            en_family_name: this.fields.enFamilyName.formatForApi(),
            gender: this.fields.gender.formatForApi(),
            date_of_birth: this.fields.dateOfBirth.formatForApi(),
            residency_status: this.fields.residencyStatus.formatForApi(),
            status: this.fields.beneficiaryStatus.formatForApi(),
            vulnerability_criteria: this.get<VulnerabilityCriteria[]>('vulnerabilities').map(vulnerability => vulnerability.modelToApi()),
            phones: this.get<Phone[]>('phones').map(phone => phone.modelToApi()),
            national_ids: this.get<NationalId[]>('nationalIds').map(nationalId => nationalId.modelToApi()),
            profile: this.get('profile') ? this.get('profile').modelToApi() : null
        };
    }

    public  mapVulnerability(name: string): string {
        if (!name) {
            return '';
        }
        switch (name) {
            case 'pregnant':
                name = 'assets/images/households/pregnant.png';
                break;
            case 'disabled':
                name = 'assets/images/households/disabled.png';
                break;
            case 'lactating':
                name = 'assets/images/households/lactating.png';
                break;
            case 'solo parent':
                name = 'assets/images/households/solo-parent.png';
                break;
            case 'nutritional issues':
                name = 'assets/images/households/nutritional-issues.png';
                break;
            default: return name;
        }
        return name;
    }

    public getIdentifyingName() {
        return this.get('localGivenName') + ' ' + this.get('localFamilyName');
    }
}

export interface BeneficiaryOptions {
    vulnerabilityList: Array<VulnerabilityCriteria>;
    countryCodesList: Array<any>;
    genderList: any;
    nationalIdList: any;
    residencyStatusList: any;
    phoneList: any;
}


