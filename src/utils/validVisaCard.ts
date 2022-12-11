class ValidVisaCard {
  number = (value: string): string => {
    const result: string[] = [];
    value.split("").forEach((item) => {
      const validValue = /[^a-z]/gi.test(item);
      if (validValue && result.length < 19) {
        result.push(item);
      }
    });
    return result
      .join("")
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");
  };

  cvv = (value: string): string => {
    const result: string[] = [];
    value.split("").forEach((item) => {
      const validValue = /[^a-z]/gi.test(item);
      if (validValue && result.length < 3) {
        result.push(item);
      }
    });
    return result.join("").replace(/\W/gi, "");
  };

  date = (value: string): string => {
    let result: string[] = [];
    value.split("").forEach((item, index) => {
      const validValue = /[^a-z]/gi.test(item);
      if (validValue && result.length < 5) {
        result.push(item);
      }
    });
    if (result.length === 2) {
      result.push("/");
    }
    if (result[0] + result[1] > 12) {
      result = [];
    }

    if (result[3] + result[4] < 22) {
      result = [];
    }

    return result.join("");
  };
}

const validVisaCard = new ValidVisaCard();

export { validVisaCard };
