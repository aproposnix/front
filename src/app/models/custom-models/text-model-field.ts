import { CustomModelField } from './custom-model-field';

export class TextModelField extends CustomModelField<string> {
    kindOfField = 'Text';
    /**
     * Is the input a long string ?
     * @type {boolean}
     */
    isLongText: boolean;
    /**
     * Is it a password ?
     * @type {boolean}
     */
    isPassword: boolean;
    /**
     * The value to display (WARNING: can be set only from the api, not a modifiable field)
     * @type {string}
     */
    displayValue: string;

    constructor(properties: any) {
        super(properties);

        this.isLongText             = properties['isLongText'];
        this.isPassword             = properties['isPassword'];
        this.displayValue             = properties['displayValue'];

    }
}