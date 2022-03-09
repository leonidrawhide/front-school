var arrayOfDates = [
    {
        "dt": "01-01-2021",
        "quantity": 100,
        "age": null,
        "temp": {
            "temperature": "100 degrees",
            "city": "Norway"
        }
    },
    { "dt": "02-01-2021",
        "quantity": 150,
        "age": 23,
        "temp": {
            "temperature": "103 degrees",
            "city": "Egypt"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Kypris"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Holland"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    },
    { "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    }
];
var datesSet = new Set(arrayOfDates.map(function (item) { return item["dt"]; }));
console.log(datesSet);
var datesMap = new Map();
var iterator = datesSet.values();
var _loop_1 = function (i) {
    var currIter = iterator.next().value;
    datesMap.set(currIter, arrayOfDates.filter(function (item) { return item["dt"] == currIter; }));
};
for (var i = 0; i < datesSet.size; i++) {
    _loop_1(i);
}
console.log(datesMap);
//# sourceMappingURL=hm1.js.map