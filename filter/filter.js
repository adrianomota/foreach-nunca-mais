const { movies } = require('./filterData');
const { log } = require('./../helpers.js');

const toVideosWithRatingEqualFive = rating => movie => movie.rating === rating;

const videos = movies.filter(toVideosWithRatingEqualFive(5))
                     .map(video => ({
                                            id:video.id,
                                            title:  video.title,
                                            rating: video.rating
                                    }));

log(videos);