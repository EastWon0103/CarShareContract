const Web3 = require('web3');

window.addEventListener('load', async () => {
    if (window.ethereum) {
        console.log('Modern dapp browsers')
        window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
            console.log('Legacy dapp browsers')
    } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    
    
    
    async function btnClicked() {
        // const abi = '{{test}}';
        // alert(abi);
        window.accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        
        // alert(accounts[0]);
        console.log(window.web3.eth.getBalance(accounts[0]));
        alert(web3.eth.getBalance(accounts[0]));
    } 
    loginBtn.addEventListener('click', btnClicked);

});