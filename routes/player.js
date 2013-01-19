var spawn = require('child_process').spawn;
var radioli, mplayer;

exports.index = function(req, res) {
  if (radioli) {
    res.end();
    return;
  }

  if (mplayer) {
    mplayer.kill();
    mplayer = null;
    res.end();
    return;
  }

  radioli = spawn('python', ['./radioli.py']);
  radioli.stdout.on('data', function(uri) {
    mplayer = spawn('mplayer', [uri]);
    radioli = null;
    res.end();
  });
};
