'use strict';

const $ = require('jquery');


module.exports.fetchDogFood= () => {
    return new Promise((resolve, reject) => {
$.ajax({ 
    url: '../data/dogfood.json'})
    .done((dogData) => {
        resolve(dogData);
    })
    .fail((error) => {
        reject(error.statusText);
    });
    });
};

module.exports.fetchCatFood = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../data/catfood.json'
        })
            .done((CatData) => {
                resolve(CatData);
            })
            .fail((error) => {
                reject(error.statusText);
            });
    });
};