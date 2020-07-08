const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */
const gotDesserts = (arr) => {
    return {
        type: GOT_DESSERTS_DATA,
        desserts: arr
    }
}

const addDessert = (arr) => {
    return {
        type: NEW_DESSERT_DATA,
        newDessert: arr
    }
}

const fetchDesserts = async (arr) => {
    return new Promise(res => {
        if(res){
            return gotDesserts(arr);
        }
    })
}

const postDessert = (arr) => {
}


module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
