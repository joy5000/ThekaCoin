

const Block = require('./blockchain/block');



const fooBlock = Block.mineBlock(Block.genesis(), 'foo-block');

console.log(fooBlock.toString());
