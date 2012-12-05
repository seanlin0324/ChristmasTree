// a Christmas Tree Maker
// (c) 2012 Sean Lin - http://seanlin0324.blogspot.tw/ 
// License: http://www.opensource.org/licenses/mit-license.php

var leaf_height = 10, 
    leaf = '',
    trunk = '',
    trunk_height = 3,
    trunk_width = 3,// only can use odd number!
    christmas_tree = '\n';
    
for (var i = 0; i < leaf_height; i++) {
    for (var j = 0 ; j < leaf_height-i; j++){
        leaf += ' ';
    }
    for(var k = 0; k < (i * 2) + 1; k++){
        leaf += '*';
    }
    leaf += '\n';
}

for (var l = 0; l < trunk_height; l++) {
    for (var j = 0 ; j < leaf_height - trunk_width + Math.ceil(trunk_width/2); j++){
        trunk += ' ';
    }
    for (var j = 0 ; j < trunk_width; j++){
        trunk += '*';
    }
    trunk += '\n';
}
christmas_tree = leaf + trunk;
console.log("\n Merry Christmas! \n");
console.log(christmas_tree);