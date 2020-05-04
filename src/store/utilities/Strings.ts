import lodash from "lodash"

class StringUtilities {
    public capitalizeFirstLetter(words:any) {
        return lodash.upperFirst(words);
    }
}

export const Strings = new StringUtilities();
