import lodash from "lodash";

class StringUtilities {
  public capitalizeFirstLetter(words: string) :string {
    return lodash.upperFirst(words);
  }

  public removeWhiteSpaces(string: string) :string {
    return string.replace(/\s+/g, ' ').trim();
  }

  public escapeString(string: string) :string {
    return lodash.escape(string);
  }
}

export const Strings = new StringUtilities();
