// Replace place holder in template with key in object passed into the function
module.exports = (temp, item) => {
  let output = temp.replace(/{%IMAGE%}/g, item.image);
  output = output.replace(/{%NAME%}/g, item.name);
  output = output.replace(/{%ORIGIN%}/g, item.origin);
  output = output.replace(/{%PRICE%}/g, item.price);

  return output;
};
