/* Dappmnine script for copy-to-clipboard functionality. */

const clipState = 'Copied!';
const originState = 'Copy address';
const btcAddress = 'bc1qyx08ur3vnqd0m20dk66f03hfjc7xh3s7mlhv98';
const usdtAddress = '0xFB545c50FdE3f3A455BF3eBAE0C586ccd7BBf0A4';
// User copying BTC donation address
function copyBitcoin() {
    const tapBTC = document.getElementById('copyBTC');
    const textBTC = document.getElementById('ccbitcoin');
    tapBTC.addEventListener('click', function() {
        navigator.clipboard.writeText(btcAddress);
        textBTC.innerHTML = clipState;
        setTimeout(function(){
            textBTC.innerHTML = originState;
        }, 4000);
    });
}
// User copying USDT donation address
function copyTether() {
    const tapUSDT = document.getElementById('copyUSDT');
    const textUSDT = document.getElementById('cctether');
    tapUSDT.addEventListener('click', function() {
        navigator.clipboard.writeText(usdtAddress);
        textUSDT.innerHTML = clipState;
        setTimeout(function(){
            textUSDT.innerHTML = originState;
        }, 4000);
    });
}
copyBitcoin();
copyTether();
