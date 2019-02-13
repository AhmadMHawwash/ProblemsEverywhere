import Problem1Desc from './Problem1/description.json';
import { Problem1 } from './Problem1/index';
import Problem2Desc from './Problem2/description.json';
import { Problem2 } from './Problem2/index';
import Problem3Desc from './Problem3/description.json';
import { Problem3 } from './Problem3/index';
import Problem4Desc from './Problem4/description.json';
import { Problem4 } from './Problem4/index';

export default {
  Problems: [
    {desc: Problem1Desc, comp: Problem1},
    {desc: Problem2Desc, comp: Problem2},
    {desc: Problem3Desc, comp: Problem3},
    {desc: Problem4Desc, comp: Problem4},
  ]
};