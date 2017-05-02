const { names, videos } = require('./mapData');
const { log } = require('./../helpers.js');

const toVideoIdAndTitle = video => ({id:video.id,title:video.title});

const videoWithIdAndTitle = videos.map(toVideoIdAndTitle);

log(videoWithIdAndTitle);