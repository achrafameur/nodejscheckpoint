// console.log(process.argv)
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });

var result=0;

for(i=2;i<process.argv.length ;i++){
    result+=+process.argv[i];
}

console.log(result)