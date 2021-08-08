function calculateAverage(list){
    const addList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const listAverage = addList / list.length;
    return listAverage;
}