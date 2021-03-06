import { TextModelField } from './custom-models/text-model-field';
import { NumberModelField } from './custom-models/number-model-field';
import { CustomModel } from './custom-models/custom-model';
import { ObjectModelField } from './custom-models/object-model-field';
import { Address } from './address';
import { CampAddress } from './camp-address';
import { SingleSelectModelField } from './custom-models/single-select-model-field';
import { Location } from './location';
export class HouseholdLocationGroup extends CustomModel {
  public fields = {
    name: new TextModelField({}),
    id: new TextModelField({}),
  };

  constructor(id: string, name: string) {
    super();
    this.set('id', id);
    this.set('name', name);
  }
}

export class HouseholdLocationType extends CustomModel {
  public fields = {
    name: new TextModelField({}),
    id: new TextModelField({}),
  };

  constructor(id: string, name: string) {
    super();
    this.set('id', id);
    this.set('name', name);
  }
}

export class HouseholdLocation extends CustomModel {
  public fields = {
    id: new NumberModelField({
      // Not displayed anywhere
    }),
    locationGroup: new SingleSelectModelField({
      apiLabel: 'id',
      bindField: 'name',
      options: [
        new HouseholdLocationGroup(
          'current',
          this.language.household_location_current_address
        ),
        new HouseholdLocationGroup(
          'resident',
          this.language.household_location_resident_address
        ),
      ],
    }),
    type: new SingleSelectModelField({
      apiLabel: 'id',
      bindField: 'name',
      options: [
        new HouseholdLocationType('camp', this.language.household_location_camp),
        new HouseholdLocationType(
          'residence',
          this.language.household_location_residence
        ),
        new HouseholdLocationType(
          'temporary_settlement',
          this.language.household_location_settlement
        ),
      ],
    }),
    address: new ObjectModelField<Address>({}),
    campAddress: new ObjectModelField<CampAddress>({}),
  };

  public static apiToModel(householdLocationFromApi): HouseholdLocation {
    const newHouseholdLocation = new HouseholdLocation();
    newHouseholdLocation.set('id', householdLocationFromApi.id);
    newHouseholdLocation.set(
      'locationGroup',
      householdLocationFromApi.location_group
        ? newHouseholdLocation
            .getOptions('locationGroup')
            .filter(
              (option: HouseholdLocationGroup) =>
                option.get('id') === householdLocationFromApi.location_group
            )[0]
        : null
    );
    newHouseholdLocation.set(
      'type',
      householdLocationFromApi.type
        ? newHouseholdLocation
            .getOptions('type')
            .filter(
              (option: HouseholdLocationType) =>
                option.get('id') === householdLocationFromApi.type
            )[0]
        : null
    );

    newHouseholdLocation.set(
      'address',
      householdLocationFromApi.address
        ? Address.apiToModel(householdLocationFromApi.address)
        : null
    );
    newHouseholdLocation.set(
      'campAddress',
      householdLocationFromApi.camp_address
        ? CampAddress.apiToModel(householdLocationFromApi.camp_address)
        : null
    );

    return newHouseholdLocation;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.id.formatForApi(),
      location_group: this.fields.locationGroup.formatForApi(),
      type: this.fields.type.formatForApi(),
      address: this.fields.address.formatForApi(),
      camp_address: this.fields.campAddress.formatForApi(),
    };
  }

  getHouseholdLocationName() {
    const location = this.get('address')
      ? this.get<CustomModel>('address').get<Location>('location')
      : this.get<CustomModel>('campAddress')
          .get<CustomModel>('camp')
          .get<Location>('location');
    return location.getLocationName();
  }

  getHouseholdPreciseLocationName() {
    const location = this.get('address')
      ? this.get<CustomModel>('address').get<Location>('location')
      : this.get<CustomModel>('campAddress')
          .get<CustomModel>('camp')
          .get<Location>('location');
    return location.getPreciseLocationName();
  }
}
