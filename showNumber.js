function showNumber( number){
    if( number <= 10){
        console.log(number);
        number++;
        showNumber(number);
    }
}

