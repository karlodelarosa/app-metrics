class GeneralSetting {
    static numberOnlyPattern = /^\d+$/;

    public isNumberOnly(payload: string) :boolean {
        return GeneralSetting.numberOnlyPattern.test(payload);
    }
}

export const General = new GeneralSetting();
