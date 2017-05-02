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

Array.prototype.concatMap = function(modifierFunction){
    return this.map(modifierFunction).concatAll();
};


const toVideos = obj => obj.videos
const bySizeOf200x150 = obj => obj.width === 150 && obj.height === 200
const toIdTitleAndBoxart= movie => obj => ({
                                    id:movie.id,
                                    title:movie.title,
                                    url:obj.url
                                })

const videos = movieCategories
                        .concatMap(toVideos)
                        .concatMap(movie => movie.boxarts
                                .filter(bySizeOf200x150)
                                .map(toIdTitleAndBoxart(movie))
                        );
log(videos);
