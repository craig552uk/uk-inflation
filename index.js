// Inflation Data
exports.data = data = require('./data.json');

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
    year_from = (year_from instanceof Date) ? year_from.getFullYear() : year_from;
    year_to   = (year_to   instanceof Date) ? year_to.getFullYear()   : year_to;

    var cpi_from = data[year_from] && data[year_from].CPI;
    var cpi_to   = data[year_to]   && data[year_to].CPI;

    if(cpi_from === undefined) throw Error("No UK inflation data available for the year "+year_from);
    if(cpi_to   === undefined) throw Error("No UK inflation data available for the year "+year_to);

    return cost * (cpi_to / cpi_from);
}