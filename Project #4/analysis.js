//Helpers
function itsEven(number){
    return (number % 2 === 0);
}

function calculateAverage(list){
    const addList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const listAverage = addList / list.length;
    return listAverage;
}

//Calculate Medians
function medianWages(list){
    const half = parseInt(list.length / 2);

    if(itsEven(list.length)){
        const personHalf1 = list[half - 1];
        const personHalf2 = list[half];

        const median = calculateAverage([personHalf1, personHalf2]);
        return median;

    } else{
        const personHalf = list[half];
        return personHalf;
    }
}

//General Median
const wagesCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const wagesColSorted = wagesCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianWagesCol = medianWages(wagesColSorted);

//Median top 10%
const spliceStart = (wagesColSorted.length * 90) / 100;
const spliceCount = wagesColSorted.length - spliceStart;
const wagesColTop10 = wagesColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianColTop10 = medianWages(wagesColTop10);

console.log({
    medianWagesCol,
    medianColTop10,
});