function division(num1,num2,callback) {
    if(num2 <=0 ) {
        callback("num2 shouldn't be less than or equal zero");
    }
    callback ("nil2",num1/num2);
}

const result = division (5,4,function(err,result) {
    if(err=="nil") { data = result; console.log(data)};
});

