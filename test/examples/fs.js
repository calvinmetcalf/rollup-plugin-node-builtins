import fs from 'fs';

if (
  typeof fs.mkdir !== 'function'
  || typeof fs.writeFile !== 'function'
  || typeof fs.readFile !== 'function'
) {
  done(new Error('not right'));
} else {
  done();
}
