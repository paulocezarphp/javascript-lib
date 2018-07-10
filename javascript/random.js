function Random(e){
    return Math.floor(Math.random() * e + 1);
}

for(var i = 0; i < 10; i++){
    console.log(Random(100));
}