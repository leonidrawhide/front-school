interface IDates {
	dt: string;
	quantity: number;
	age: number | null;
  
	temp: {
    temperature: string;
    city: string;
    optional?: boolean;
  }
}

let arrayOfDates: IDates[] = [
    {
      "dt": "01-01-2021",
      "quantity": 100,
      "age": null,
      "temp": {
        "temperature": "100 degrees",
        "city": "Norway"
      }
    },
    {"dt": "02-01-2021",
      "quantity": 150,
      "age": 23,
      "temp": {
        "temperature": "103 degrees",
        "city": "Egypt"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Kypris"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Holland"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    }
]

let datesSet = new Set<String>(arrayOfDates.map(item => item["dt"]));

console.log(datesSet)

let datesMap = new Map<String, IDates[]>()

let iterator = datesSet.values();
for (let i = 0; i < datesSet.size; i++) {
  let currIter = iterator.next().value;
	datesMap.set(currIter, arrayOfDates.filter(item => item["dt"] == currIter))
}

console.log(datesMap)