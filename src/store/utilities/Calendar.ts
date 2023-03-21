import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module
} from "vuex-module-decorators";
import store from "@/store/index";

export interface CalendarInputsInterface {
    year:number,
    month:number
}

@Module({ dynamic: true, store, name: "CalendarInputs", namespaced: true })
export class CalendarInputs extends VuexModule implements  CalendarInputsInterface{
    year = 0;
    month = 0;

    get getMonthNames() {
        return {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };
    }

    get getYears() {
        const yearList= [];
        const qntYears = 10;
        let currentYear = new Date().getFullYear();

        for (let y = 0; y < qntYears; y++){
            yearList.push(currentYear);
            currentYear--;
        }

        return yearList;
    }

    get getDays() {
        const days = new Date(this.year, this.month, 0);
        return days.getDate();
    }

    @Mutation
    public SET_SELECTED_YEAR(payload:number) {
        this.year = payload;
    }

    @Mutation
    public SET_SELECTED_MONTH(payload:number) {
        this.month = payload;
    }
}

export default getModule(CalendarInputs);
