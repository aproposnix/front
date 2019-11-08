import { CustomModel } from './custom-models/custom-model';
import { NumberModelField } from './custom-models/number-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { BooleanModelField } from './custom-models/boolan-model-field';
import { ObjectModelField } from './custom-models/object-model-field';

export class OrganizationServices extends CustomModel {

    title = 'Organization Services';
    matSortActive = 'name';

    public fields = {
        id: new NumberModelField({

        }),
        name: new TextModelField({
            title: 'Service Name',
            isDisplayedInModal: true,
            isDisplayedInTable: true,
        }),
        country: new TextModelField({
            title: 'Country',
            isDisplayedInTable: true,
            isDisplayedInModal: true,
        }),
        enabled: new BooleanModelField({
            title: 'Enabled',
            isDisplayedInModal: true,
            isDisplayedInTable: true,
            isEditable: true
        }),
        parameters: new ObjectModelField({
            title: 'Parameters',
            isDisplayedInModal: true,
            isDisplayedInTable: false,
            isEditable: true
        }),
        parametersSchema: new ObjectModelField({
        }),
    };

    public static apiToModel(organizationServicesFromApi: any): OrganizationServices {
        const newOrganizationServices = new OrganizationServices();
        newOrganizationServices.set('id', organizationServicesFromApi.id);
        newOrganizationServices.set('name', organizationServicesFromApi.service.name);
        newOrganizationServices.set('country', organizationServicesFromApi.service.country);
        newOrganizationServices.set('enabled', organizationServicesFromApi.enabled);
        newOrganizationServices.set('parameters', organizationServicesFromApi.parameters_value);

        return newOrganizationServices;
    }

    public modelToApi(): Object {
        return {
            id: this.fields.id.formatForApi(),
            enabled: this.fields.enabled.formatForApi(),
            parameters: this.fields.parameters.formatForApi(),
        };
    }

    public getIdentifyingName() {
        return this.get<string>('name');
    }

    public isPrintable() {
        return true;
    }

}
