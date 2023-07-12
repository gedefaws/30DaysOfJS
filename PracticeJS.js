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
            else{
                throw new Error ("Not Equal");
            }
        },
        notToBe(val2){
            if(val2 !== val){   
                return true;
            }
            else{
                throw new Error ("Equal");
            }
        }
    };
    return obj;
};

console.log(expect(5).toBe(5));
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */