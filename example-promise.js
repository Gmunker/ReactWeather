/*
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback ('New Jersey', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp)
    }
});

function getTempPromise (location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('79');
            reject('City Not Found');
        }, 1000);        
    });
}

getTempPromise('New Jersey').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});

*/ 
//Challange Area

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof a == "number" && typeof b == "number") {
            resolve(a + b);
        } else {
            reject('One or Both are not numbers... Please try again')
        }
        }, 4000);
    });
}

addPromise(200, 500).then(function(sum) {
    console.log('promise pass', sum);
}, function(rej) {
    console.log(rej);
})