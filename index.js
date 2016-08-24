module.exports = function has(object, keyArray) {
  var firstKey = keyArray[0];
  var hasProperty = object.hasOwnProperty(firstKey);
  if (hasProperty) {
    var length = keyArray.length;
    if (length === 1) {
      return hasProperty;
    } else {
      return has(object[firstKey], keyArray.slice(1));
    }
  } else {
    return false;
  }
};

module.exports.version = '0.1.0';
