let arr = [1,2,3,4,5,6,1,1,1,2,3,6,7]

Array.prototype.countElement = function(element){
    var count = 0;
    for(var i=0;i<this.length;i++){
        if(this[i] === element){
            count++
        }
    }

    return count;
}
let count = arr.countElement(1)
console.log("count is :" , count)


Array.prototype.typeOfElements = function(){
    var set = new Set()
    for(var i =0;i<this.length;i++){
        set.add(typeof(this[i]))
    }
    return set
}
var some = [1,2,3,4,5,6,"banana","apple" , {number:"aaa"}]

console.log("This array contains these type of elements",some.typeOfElements())