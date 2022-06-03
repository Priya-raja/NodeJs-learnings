const {writeFileSync, readFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/result-file.txt',
`here is the result of both files : ${first}, ${second}`,
{flag: 'a'}
)
