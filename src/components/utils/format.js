/**
 * exported functions are formatOutput and generateOutput
 * Used in ExportModal component
 */
const joinWithCommaBreak = (arr, tabSpace = "") => {
  return arr.join(`,\n`);
};

const stringifyKeyValue = (key, value) => `"${key}": ${value}`;

//default for checkbox needs to be a boolean
const requiresBoolean = (key, type) => key === "default" && type === "checkbox";
const strToBoolean = (str) => (str === "false" ? false : true);

//create num tab spaces
const createTabSpace = (num) => {
  let result = "";
  while (num > 0) {
    result += `\t`;
    num--;
  }
  return result;
};

//output is array
//convert output into a readable string
export const formatOutput = (output, tabSpace = 0) => {
  let result = "";
  let resultArr = [];

  //add tabspace to braces in obj and brackets in arrays
  const braceSpace = createTabSpace(tabSpace + 1);
  const bracketSpace = createTabSpace(tabSpace);

  output.map((obj) => {
    let store = [];
    for (const key in obj) {
      const value = obj[key];

      //recursive
      if (key === "options")
        //array of objects
        store.push(stringifyKeyValue(key, formatOutput(value, 1)));
      //skip info attribute if its empty, otherwise shopify throws error
      if (key === "info" && value === "");
      else {
        //need to output accept attr in video_url with brackets
        let formattedValue = key === "accept" ? `"[${value}]"` : `"${value}"`;

        //checkbox default attr needs to be bool
        if (requiresBoolean(key, obj.type))
          formattedValue = strToBoolean(formattedValue);
        store.push(stringifyKeyValue(key, formattedValue));
      }
    }

    store = store.map((index) => `${braceSpace}${index}`);

    resultArr.push(
      `\n${braceSpace}{\n${joinWithCommaBreak(store)}\n${braceSpace}}`
    );
  });

  result += joinWithCommaBreak(resultArr, bracketSpace);
  result = `${bracketSpace}[${result}\n${bracketSpace}]`;
  return result;
};

export const generateOutput = (inputs) => {
  let copy = inputs.map((input) => {
    let shallowCopy = { ...input };
    delete shallowCopy.name; //doesnt mutate inputs state
    return shallowCopy;
  });
  return copy;
};
