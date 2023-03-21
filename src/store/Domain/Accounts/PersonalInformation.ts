import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module
} from "vuex-module-decorators";
import store from "@/store/index";
import { Strings } from "@/store/utilities/Strings";
import { General } from "@/store/utilities/General";

export interface PersonalInformationInterface {
    firstName: string,
    middleName: string,
    lastName: string,
    birthDate: {
        month?: string,
        day?: string,
        year?: string
    },
}

export interface PersonalInformationErrorInterface {
    hasError: boolean,
    errorMessage: string
}

@Module({ dynamic: true, store, name: "PersonalInformationInterface", namespaced: true })
export class PersonalInformation extends VuexModule implements PersonalInformationInterface, PersonalInformationErrorInterface {
    firstName= '';
    middleName= '';
    lastName= '';
    birthDate= {
        month: '',
        day: '',
        year: ''
    };
    // Error message for manipulated inputs
    hasError = false;
    errorMessage = '';

    get getFirstName() { return this.firstName; }
    get getErrors() {
        return {
            error: this.hasError,
            message: this.errorMessage
        }
    }

    @Action
    public processInputs(formData:PersonalInformationInterface) {
        this.CLEAR_ERRORS();
        const firstName = formData.firstName;
        const middleName = formData.middleName;
        const lastName = formData.lastName;
        const birthDate = formData.birthDate;

        this.processFirstName(firstName);
        this.processMiddleName(middleName);
        this.processLastName(lastName);
        this.processBirthDate(birthDate);
    }

    @Action
    protected processFirstName(firstName:string) {
        const trimmed = Strings.removeWhiteSpaces(firstName);
        const escapedString = Strings.escapeString(trimmed);
        this.SET_FIRST_NAME(escapedString);
    }

    @Action
    protected processMiddleName(middleName:string) {
        const trimmed = Strings.removeWhiteSpaces(middleName);
        const escapedString = Strings.escapeString(trimmed);
        this.SET_FIRST_NAME(escapedString);
    }

    @Action
    protected processLastName(lastName:string) {
        const trimmed = Strings.removeWhiteSpaces(lastName);
        const escapedString = Strings.escapeString(trimmed);
        this.SET_FIRST_NAME(escapedString);
    }

    @Action
    protected processBirthDate(birthDate:object) {
        const dateOfBirth = Object.values(birthDate);
        dateOfBirth.forEach((value) => {
            if (!General.isNumberOnly(value)) {
                this.SET_ERROR_MESSAGE({
                    error: true,
                    message: 'Something went wrong with this form'
                })
            }
        });
    }

    @Mutation
    public SET_FIRST_NAME(payload:string) {
        this.firstName = payload;
    }

    @Mutation
    public SET_MIDDLE_NAME(payload:string) {
        this.firstName = payload;
    }

    @Mutation
    public SET_LAST_NAME(payload:string) {
        this.firstName = payload;
    }

    @Mutation
    public SET_ERROR_MESSAGE(payload: { error: boolean; message: string }) {
        this.hasError = payload.error;
        this.errorMessage = payload.message;
    }

    @Mutation
    public CLEAR_ERRORS() {
        this.hasError = false;
        this.errorMessage = '';
    }
}
export default getModule(PersonalInformation);
