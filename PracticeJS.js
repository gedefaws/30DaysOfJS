/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const obj = {
        toBe(val2){
            if(val2 === val){
                return true;
            }          
        },
        notToBe(val2){
            if(val2 !== val){   
                return true;
            }
        }
    };
    return obj;
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
var createCounter = function(init) {
    let val = init;
    const obj = {
        increment(){
            val++;
            return val;
        },
        reset(){
            val = init;
            return val;
        },
        decrement(){
            val--;
            return val;
        }
    };
    return obj;
}
console.log(createCounter(5).increment());
console.log(createCounter(5).reset());
console.log(createCounter(5).decrement());