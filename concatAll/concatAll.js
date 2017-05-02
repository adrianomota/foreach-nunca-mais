const { movieCategories } = require('./concatAllData');
const { log } = require('../helpers');



Array.prototype.concatAll = function(){
    const result = [];

    this.forEach(items =>
            items.forEach(subItem => {
                result.push(subItem);
            })
    );
    return result;
};

const movieIds = movieCategories
                        .map(category => category.videos.map(video => video.id))
                        .concatAll();



 log(movieIds);
