
var os = require('os');

function getUptime(){
	var uptime = os.uptime();
    
    var hour = Math.floor(uptime / 3600);
    
    var minutes = Math.floor((uptime % 3600) / 60);

    var seconds = Math.floor(uptime % 60);

/*
  var hour = Math.floor(uptime/3600);
  var minutes = Math.floor(uptime-(hour*3600)/60);
  var seconds = uptime - (hour * 3600) - (minutes * 60);
*/


console.log('Uptime: '.yellow + hour + ' hours ' + minutes + ' min ' + seconds + ' sec.' );
}



exports.print = getUptime;