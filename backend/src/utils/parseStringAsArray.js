module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(parse => parse.trim());
};
