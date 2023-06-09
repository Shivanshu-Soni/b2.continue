// by default every member is private
// export function sum(n1,n2){}
function sum(n1,n2){
    return n1+n2;
}
//how to use other function in this function
 export {sum}; //( indirectly we are making it public maually)

 function substaction(n1,n2){
    return n1-n2;
 }
 export {substaction};