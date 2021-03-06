'use strict';

const $ = require('jquery');


module.exports.fetchDogFood= () => {
    return new Promise((resolve, reject) => {
$.ajax({ 
    url: '../data/products.json'})
    .done((dogData) => {
        resolve(dogData);
    })
    .fail((error) => {
        reject(error.statusText);
    });
    });
};
