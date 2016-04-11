UK Inflation
============

Tools for working with inflation-adjusted prices in the UK.

Uses "Composite Price Index" data provided by the [Bank of England][1].

Refer to the Bank of England site for the [methods used to adjust prices against inflation][2] and [caveats in the calculation data and techniques][3].

Usage
-----

Require the module the usual way
```javascript
> var ukinflation = require('ukinflation');
```

To find out what goods and services costing £23.60 in 1975 would have cost in 1985:

```javascript
> ukinflation.adjustCost(23.60, 1975, 1985);
65.33768545994066
```

To get the average inflation between two years:

```javascript
> ukinflation.averageInflation(1975, 1985)
10.719769831985682
```

You can also pass in Date objects if it's more convenient:

```javascript
> var from = new Date('1975');
> var to = new Date('1985');
> ukinflation.adjustCost(23.60, from, to);
65.33768545994066
```

Note that there's no data for the present year, so you can't convert to "present day" prices;

```javascript
> ukinflation.adjustCost(23.60, 1975, new Date());
Error: No UK inflation data available for the year 2016
```

[1]: http://www.bankofengland.co.uk/education/Pages/resources/inflationtools/calculator/index1.aspx
[2]: http://www.bankofengland.co.uk/education/Pages/resources/inflationtools/calculator/how.aspx
[3]: http://www.bankofengland.co.uk/education/Pages/resources/inflationtools/calculator/limitations.aspx