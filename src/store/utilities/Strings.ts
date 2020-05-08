import lodash from "lodash";

class StringUtilities {
  public capitalizeFirstLetter(words: string) {
    return lodash.upperFirst(words);
  }
}

export const Strings = new StringUtilities();
