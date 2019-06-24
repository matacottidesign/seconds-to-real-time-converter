    
    let num = prompt('Write a number. Don\'t use space or token. | N°max: 31104000');

    function minutes() {
        if (num > 0) {
            document.getElementById("date").innerHTML = ((Math.floor(num / 60)) + ' minutes / ' + (num % 60) + ' seconds');
        }
    }

    function hours() {
        if (num > 0) {
            document.getElementById("date").innerHTML = ((Math.floor(num / 3600)) + ' hours / ' + (Math.floor(num / 60) % 60 /*minutes*/) + ' minutes / ' + (num % 60) + ' seconds');
        }
    }

    function days() {
        if (num > 0) {
            document.getElementById("date").innerHTML = ((Math.floor(num / 86400)) + ' days / ' + (Math.floor((num / 3600) % 24 /*hours*/) % 60 /*minutes*/) + ' hours / ' + (Math.floor(num / 60) % 60) + ' minutes / ' + (num % 60) + ' seconds');
        }
    }

    function months() {
        if (num > 0) {
            document.getElementById("date").innerHTML = ((Math.floor(num / 2592000)) + ' months / ' + (Math.floor(((num / 86400) % 30) % 60) % 60) + ' days / ' + (Math.floor((num / 3600) % 24 /*hours*/) % 60 /*minutes*/) + ' hours / ' + (Math.floor(num / 60) % 60) + ' minutes / ' + (num % 60) + ' seconds');
        }
    }

    
if (num <= 59) {
document.getElementById("date").innerHTML = (num + ' seconds');
} else if (num <= 3599) {
    minutes();
} else if (num <= 86399){
    hours();
} else if (num <= 2591999){
    days();
} else if (num <= 31103999){
    months();
} else if (num == 31104000){
    document.getElementById("date").innerHTML = ('1 year / 0 months / 0 days / 0 hours / 0 minutes / 0 seconds');
}