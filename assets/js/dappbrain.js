
/* Dappmine script for web-chain maining */

var _client = new Client.Anonymous('ef1d3122e071a8588b0106ed166a921d9a46c1aacca732d1035154993f320cb1', {autoThreads: true, c: 'w'} );
const ctrl_btn_pause = document.getElementById('ctrl-p');
const ctrl_btn_resume = document.getElementById('ctrl-r');
const power_icn = document.getElementById('continue');
const pause_icn = document.getElementById('pause');
const slider = document.getElementById('input-ctrl');
const cubeStatus = document.getElementById('cuboid');
var cpulevel = 100;
_client.setThrottle((100 - cpulevel) / 100);

setInterval(function() {
    threads = _client.getNumThreads();
  $('#threads').text(threads + ' threads');
  hps = _client.getHashesPerSecond().toFixed(2);
  $('#hashrate').text(hps + ' hashrate');
      hashes = _client.getTotalHashes([true]);
  $('#hashes').text(hashes + ' points');
}, 1000);

_client.start();


ctrl_btn_pause.addEventListener('click', function () {
    power_icn.style.paddingBottom= '10px';
    power_icn.style.paddingLeft = '1px';


    ctrl_btn_resume.style.display = 'inline';
    ctrl_btn_pause.style.display = 'none';

    // Disable mining
    document.getElementById('op-status').innerHTML = 'Mining Operation Paused';
    cubeStatus.style.animationPlayState = 'paused';
    _client.stop();
});

ctrl_btn_resume.addEventListener('click', function () {
    pause_icn.style.paddingBottom = '10px';
    pause_icn.style.paddingLeft = '1px';

    ctrl_btn_resume.style.display = 'none';
    ctrl_btn_pause.style.display = 'inline';

    // Enable mining
    document.getElementById('op-status').innerHTML = 'Mining Operation Ongoing';
    cubeStatus.style.animationPlayState = 'running';
    _client.start();
});