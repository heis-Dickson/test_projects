const fetchData = require('./functions/apiData.js');

//Mock this global fetch function
global.fetch = jestConfig.fn();

//test suite
describe('fetchData', () => {
    beforeEach(() => {
        fetch.mockClear();
});
        
        
        });
