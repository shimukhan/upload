

function currencyCon(amount,type){
    let rate= 0;

    switch(amount,type){

        case "usd" :
            rate = 100;
            break

        case "bd" :
            rate= 30;
            break
        case "india":
            rate= 40
            break

        case "arob" :
            rate = 28

    }

    console.log(`
    ${amount} ${type}= ${amount*rate}


    `);
}