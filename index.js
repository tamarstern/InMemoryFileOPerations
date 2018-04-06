var fs = require('fs');

var LRU = require("lru-cache");

var mkdirp = require('mkdirp');

var path = require('path');

var sep = path.sep;

var MEMORY_FILE_CONTAINER_SIZE = 500;

var memory_file_contianer = new LRU({
    max: MEMORY_FILE_CONTAINER_SIZE,
    dispose: function (key, value) {
        console.info('removing: ', key, ' from LRU');
    }
});


exports.list = function (dirPath) {
    
}

exports.getFile = (dirPath, filename) => {
}


exports.saveFile = async (dirPath, filename, content) => {

}

exports.reset = function () {

}

exports.deleteFile = async (filePath) => {
}