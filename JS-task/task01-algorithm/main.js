const cityList = [{
    id: 1,
    name: "Cockburn Town",
    population: 15,
    area: 63
}, {
    id: 2,
    name: "Béziers",
    population: 16,
    area: 74
}, {
    id: 3,
    name: "Guaiúba",
    population: 7,
    area: 83
}, {
    id: 4,
    name: "Veliko Tŭrnovo",
    population: 17,
    area: 83
}, {
    id: 5,
    name: "São Pedro",
    population: 9,
    area: 70
}, {
    id: 6,
    name: "Ouadda",
    population: 19,
    area: 52
}, {
    id: 7,
    name: "Sanquan",
    population: 18,
    area: 35
}];

/**
 * 
 * @param {City[]} list 
 * @param {Number} population 
 * @param {Number} area 
 * @returns all cities where population is lower than the specified and the area
 * is greater then the specified.
 */
const cityFilter = (list, population, area) => {
    // const output = [];
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i].population < population && list[i].area > area) {
    //         output.push(list[i].name);
    //     }
    // }
    // return output;

    // knife.sgs
    return list
        .filter(city => city.population < population && city.area > area)
        .map(item => item.name);
};

const citySorter = (list, key) => {
    // petern1953
    // return list.sort( (a, b) => a[key] > b[key] ? 1 : -1 );

    // knife.sgs
    return list.sort((a, b) => {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return a[key] - b[key];
        } else {
            return String(a[key]).toLowerCase().localeCompare(String(b[key]).toLowerCase());
        }
    });
};

const citySlicer = (list, limit) => {
    return citySorter(list, 'name').slice(0, limit);
};

if (typeof module !== 'undefined') {
    module.exports = {
        cityList,
        cityFilter,
        citySorter,
        citySlicer
    };
}
