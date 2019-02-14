import Problem1Desc from './Problem1/description.json';
import { Problem1 } from './Problem1/index';
import Problem2Desc from './Problem2/description.json';
import { Problem2 } from './Problem2/index';

export default {
  Problems: [
    {desc: Problem1Desc, comp: Problem1},
    {desc: Problem2Desc, comp: Problem2}
  ]
};