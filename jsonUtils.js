function escapeStringForJSON(inputValue) {
  if (typeof inputValue !== 'string') {
    // If the input is not a string, return it as is or handle as an error.
    // For this example, we'll return it as is.
    return inputValue;
  }

  let result = '';
  for (let i = 0; i < inputValue.length; i++) {
    const char = inputValue[i];
    switch (char) {
      case '"':
        result += '\\"'; // In a JS string literal, backslash itself needs escaping
        break;
      case '\'':
        result += "\\'"; // Escaping single quote, backslash needs escaping
        break;
      case '\\':
        result += '\\\\'; // Escaping backslash
        break;
      case '\b':
        result += '\\b';
        break;
      case '\f':
        result += '\\f';
        break;
      case '\n':
        result += '\\n';
        break;
      case '\r':
        result += '\\r';
        break;
      case '\t':
        result += '\\t';
        break;
      default:
        // Check if the character is a control character (U+0000 through U+001F)
        if (char < ' ') {
          const hex = '000' + char.charCodeAt(0).toString(16);
          result += '\\u' + hex.substring(hex.length - 4);
        } else {
          result += char;
        }
        break;
    }
  }
  return result;
}

// Example usage:
const myString = "This is a string with \"double quotes\" and 'single quotes'.";
const escapedString = escapeStringForJSON(myString);
console.log("Original:", myString);
console.log("Escaped for JSON value:", escapedString);
// Expected output for escapedString: This is a string with \\\"double quotes\\\" and \\\'single quotes\\\'.

const jsonObject = {
  "description": "A value with a \"quote\" and a 'single quote'."
};
// Escape the string value before assigning or using it in JSON construction
jsonObject.description = escapeStringForJSON(jsonObject.description);
console.log("Original object description:", "A value with a \"quote\" and a 'single quote'.");
console.log("Object with escaped description for JSON:", JSON.stringify(jsonObject));
// Expected output: {"description":"A value with a \\\"quote\\\" and a \\\'single quote\\\'."}


// More complex example with newlines and other special characters
const complexString = "Here\'s a value:\n\t\"Special\" & 'Simple'.\\ Let\'s test.";
const escapedComplexString = escapeStringForJSON(complexString);
console.log("Original complex string:", complexString);
console.log("Escaped complex string for JSON value:", escapedComplexString);


// Demonstrating how this escaped string would look if manually inserted into a JSON string
const manuallyConstructedJSON = `{"key": "${escapedComplexString}"}`;
console.log("Manually constructed JSON string segment:", manuallyConstructedJSON);

// To check if the manually constructed JSON (using the output of escapeStringForJSON) is valid:
// We need to be careful here. The 'manuallyConstructedJSON' is ALREADY a string.
// If this string represents a complete JSON object, we can parse it.
try {
    JSON.parse(manuallyConstructedJSON);
    console.log("Manually constructed JSON (using the function's output) is valid.");
} catch (e) {
    console.error("Manually constructed JSON (using the function's output) is invalid:", e.message);
    console.error("Problematic string was:", manuallyConstructedJSON);
}

console.log("\n--- Using JSON.stringify for comparison ---");
// If you simply want to ensure a string is safe to be embedded within a JSON string value
// and are building the whole JSON with JavaScript objects, JSON.stringify is the direct way.
const stringToEmbed = "Text with \"quotes\" and 'apostrophes'.\nAnd a backslash: \\";
const safeJsonStringContainer = JSON.stringify({ "embedded": stringToEmbed });
console.log("Object stringified by JSON.stringify:", safeJsonStringContainer);
// Output: {"embedded":"Text with \\\"quotes\\\" and 'apostrophes'.\\nAnd a backslash: \\\\"}

const justTheStringValueStringified = JSON.stringify(stringToEmbed);
console.log("Just the string value processed by JSON.stringify:", justTheStringValueStringified);
// Output: "Text with \\\"quotes\\\" and 'apostrophes'.\\nAnd a backslash: \\\\"
// Note: JSON.stringify on a string adds the outer quotes and escapes what's inside.
// Our function escapeStringForJSON escapes the *content* that goes *inside* the quotes of a JSON string value.

/*
Important considerations for escapeStringForJSON:
1.  Double Quotes (\"): Must be escaped as \\\" in the JS code to produce \" in the string,
    which is the correct JSON escape.
2.  Single Quotes (\'): Escaped as \\\' to produce \' in the string. While not strictly
    required by JSON if the string is double-quoted, this was part of the request.
3.  Backslashes (\\): Must be escaped as \\\\ to produce \\ in the string.
    This is crucial because backslash is the escape character itself.
The function aims to prepare a string so it can be safely embedded *within* the double quotes
of a JSON value.
*/ 