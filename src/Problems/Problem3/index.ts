import testcases from './testcases.json'
import { getTestsCoverage } from '../Utils/utils.js';

const solve = (string) => {
    
    return "None";
}

export const Problem1 = () => {
    const actual: string[] = [];
    const expected: string[] = [];

    testcases.map(({ input: { string }, output }) => {
        actual.push(solve(string));
        expected.push(output);
    });

    return "coverage equal: " + getTestsCoverage<string>(expected, actual);
}