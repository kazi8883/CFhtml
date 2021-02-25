//falsy and truthy values and equality operators

//falsy value : undefined, 0, '', Null, NaN
//truthy value : Not falsy value
var height = 20;

if(height || height === 0){
    console.log('variable is defined');
} else{
    console.log('varialbe has not defined');
}

//equality operators

if(height == '20'){
    console.log('The == operator dose type corecion.');
}