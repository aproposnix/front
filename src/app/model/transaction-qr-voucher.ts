import { Beneficiary } from './beneficiary';
import { Booklet } from './booklet';
import { NestedFieldModelField } from './CustomModel/nested-field';
import { ObjectModelField } from './CustomModel/object-model-field';
import { DistributionBeneficiary } from './distribution-beneficiary';

export class TransactionQRVoucher extends DistributionBeneficiary {

    title = this.language.beneficiary;
    matSortActive = 'localFamilyName';

    public fields = {
        // id: new NumberModelField({

        // }),
        beneficiary: new ObjectModelField<Beneficiary>({
            value: []
        }),
        booklet: new ObjectModelField<Booklet>({

        }),
        localGivenName: new NestedFieldModelField({
            title: this.language.model_firstName,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'beneficiary',
            childrenFieldName: 'localGivenName'
        }),
        localFamilyName: new NestedFieldModelField({
            title: this.language.model_familyName,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'beneficiary',
            childrenFieldName: 'localFamilyName'
        }),
        enGivenName: new NestedFieldModelField({
            title: this.language.add_beneficiary_getEnglishGivenName,
            isDisplayedInTable: false,
            isDisplayedInModal: false,
            childrenObject: 'beneficiary',
            childrenFieldName: 'enGivenName'
        }),
        enFamilyName: new NestedFieldModelField({
            title: this.language.add_beneficiary_getEnglishFamilyName,
            isDisplayedInTable: false,
            isDisplayedInModal: false,
            childrenObject: 'beneficiary',
            childrenFieldName: 'enFamilyName'
        }),
        bookletCode: new NestedFieldModelField({
            title: this.language.model_booklet,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'booklet',
            childrenFieldName: 'code',
        }),
        status: new NestedFieldModelField({
            title: this.language.model_state,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'booklet',
            childrenFieldName: 'status',
        }),
        usedAt: new NestedFieldModelField({
            title: this.language.model_used,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'booklet',
            childrenFieldName: 'usedAt',
            nullValue: this.language.null_not_yet
        }),
        value: new NestedFieldModelField({
            title: this.language.model_value,
            isDisplayedInTable: true,
            isDisplayedInModal: true,
            childrenObject: 'booklet',
            childrenFieldName: 'value',
        })
    };

    public static apiToModel(distributionBeneficiaryFromApi: any): TransactionQRVoucher {
        const newQRVoucher = new TransactionQRVoucher();
        newQRVoucher.set('beneficiary', Beneficiary.apiToModel(distributionBeneficiaryFromApi.beneficiary));

        let booklet = null;
        if (distributionBeneficiaryFromApi.booklets.length) {
            booklet = distributionBeneficiaryFromApi.booklets.filter((bookletFromApi: any) => bookletFromApi.status !== 3)[0];
            booklet = booklet ? booklet : distributionBeneficiaryFromApi.booklets[0];
        }
        newQRVoucher.set('booklet', booklet ? Booklet.apiToModel(booklet) : null);
        return newQRVoucher;
    }

    public modelToApi(): Object {
        return {
            local_given_name: this.get('beneficiary').get('localGivenName'),
            local_family_name: this.get('beneficiary').get('localFamilyName'),
            booklet: this.get('booklet').modelToApi(),
        };
    }

    public isAssignable(): boolean {
        if (this.get('booklet') && this.get('booklet').get('status').get<string>('id') !== '3') {
            return false;
          }
          return true;
    }

    public isPrintable(): boolean {
        return this.get('booklet');
    }


}
