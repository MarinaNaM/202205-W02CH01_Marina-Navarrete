import { strictEquals } from './helper.js';

strictEquals(1, 1);
console.log(strictEquals(1, 1), true);

strictEquals(NaN, NaN);
console.log(strictEquals(NaN, NaN), false);

strictEquals(0, -0);
console.log(strictEquals(0, -0), true);

strictEquals(-0, 0);
console.log(strictEquals(-0, 0), true);

strictEquals(1, '1');
console.log(strictEquals(1, '1'), false);

strictEquals(true, false);
console.log(strictEquals(true, false), false);

strictEquals(false, false);
console.log(strictEquals(false, false), true);

strictEquals('Water', 'oil');
console.log(strictEquals('Water', 'oil'), false);
