
function readFile(_path, _cb){

    console.info('Reading:', _path);

    return fetch(_path, {mode:'same-origin'})   // <-- important

    .then(function(_res) {
        return _res.blob();
    })

    .then(function(_blob) {
        var reader = new FileReader();

        reader.addEventListener("loadend", function() {
            _cb(this.result);
        });

        reader.readAsText(_blob); 
    });
};

readFile('file:///home/saba/Desktop/test.js', function(_res){

    console.log(_res); // <--  result (file content)

});
