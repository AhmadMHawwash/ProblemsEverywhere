import testcases from './testcases.json'

const solve = (array: number[]): number[] => {
    const multiplied = array.reduce((multiplied, num) => {
        return multiplied * num
    }, 1);

    const result: number[] = [];
    array.forEach(num => {
        result.push(multiplied/num);
    });
    return result;
}

const getTestsCoverage = (expected: number[], actual: number[]): number => {
    const coverageArray = expected.map((a, index) => a.toString() === actual[index].toString());
    return coverageArray.filter(coverageItem => coverageItem).length/coverageArray.length;
}

export const Problem2 = () => {
    const actual: any[] = [];
    const expected: any[] = [];
    
    testcases.map(({ input, output }) => {
        actual.push(solve(input));
        expected.push(output);
    });

    return "coverage equal: " + getTestsCoverage(expected, actual);
}
