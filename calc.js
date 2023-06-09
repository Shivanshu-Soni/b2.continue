//by default member is private
function sum(n1,n2){
    return n1+n2;
}
function subs(n1,n2){
    return n1-n2;
}
function multiplication(n1,n2){
    return n1*n2;
}
// you hav to make it export (public ) manually
export{
    subs, multiplication
}
export default sum;//  to mark if th