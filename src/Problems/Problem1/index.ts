import testcases from './testcases.json'

const hashMapArrayBasedOnKey = (array: number[], k: number) => {
    return array.reduce((acc, num) => {
        acc[num] = k - num;
        return acc;
    }, {});
}

const solve = (array: number[], k: number) => {

    const hashMap = hashMapArrayBasedOnKey(array, k);

    let thereAreTwo = false;
    array.forEach(num => {
        if(hashMap[hashMap[num]]){
            thereAreTwo = true;
        }
    });

    return thereAreTwo;
}

const getTestsCoverage = (expected: boolean[], actual: boolean[]): number => {
    const coverageArray = expected.map((a, index) => a === actual[index]);
    return coverageArray.filter(coverageItem => coverageItem).length/coverageArray.length;
}

export const Problem1 = () => {
    const actual: boolean[] = [];
    const expected: boolean[] = [];
    
    testcases.map(({ input: {array, k}, output }) => {
        actual.push(solve(array, k));
        expected.push(output);
    });

    return "coverage equal: " + getTestsCoverage(expected, actual);
}
