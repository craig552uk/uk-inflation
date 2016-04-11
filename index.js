// Inflation Data
exports.data = data = require('./data.json');

/**
 * Returns data for a given year or throws error
 */
function getYearData(year){
    year = (year instanceof Date) ? year.getFullYear() : year;
    if (data[year] === undefined) throw Error("No UK inflation data available for the year "+year);
    return data[year];
}

/**
 * Return inflation-adjusted cost from year to year
 *    cost:     [number]             The cost to be adjusted
 *    year_from [number/string/date] The year to be adjusted from
 *    year_to   [number/string/date] The year to be adjusted to
 *
 * e.g.
 *     > adjustCost(23.60, 1975, 1985)
 *     65.33
 * Throws error if data is not available for either of the specified years
 *
 */
exports.adjustCost = function(cost, year_from, year_to){
    var cpi_from = getYearData(year_from).cpi;
    var cpi_to   = getYearData(year_to).cpi;
    return cost * (cpi_to / cpi_from);
}

/**
 * Returns average inflation between two years
 *    year_from [number/string/date] The year to be adjusted from
 *    year_to   [number/string/date] The year to be adjusted to
 *
 * Throws error if data is not available for either of the specified years
 */
exports.averageInflation = function(year_from, year_to){
    var cpi_from = getYearData(year_from).cpi;
    var cpi_to   = getYearData(year_to).cpi;
    return (Math.pow(cpi_to/cpi_from, 0.1) -1) * 100;
}