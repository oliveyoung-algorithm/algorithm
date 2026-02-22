/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr  = path.split("/")
    const stack =[]
    for(let i = 0 ; i < arr.length; i++){
        const val = arr[i]
        if(val === "" || val === ".") continue
        if(val === ".."){
            stack.pop()
            continue
        }
        stack.push(val)
    }
    return "/"+stack.join("/")    
};