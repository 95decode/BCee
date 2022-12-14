import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import ABI from "abi/abi.json";
import injected from 'lib/connectors';

function Connect() {
    const {
        chainId,
        account,
        active,
        library,
        activate,
        deactivate
    } = useWeb3React();

    const handleConnect = () => {
        if(active) {
            deactivate();
            return;
        }

        activate(injected(), (error) => {
            if(error) {
                console.log(error);
                window.open('https://metamask.io/download.html');
            }
        });
    }

    const switchChain = () => {
        library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{chainId: "0x1"}]
        });
    }

    const test = async () => {
        try {
            const contract = getContract();

            const tx = await contract.A(3);

            const receipt = await tx.wait();
            console.log(receipt);
            return receipt.transactionHash;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    const getContract = () => {
        // test contracts
        let a = "0x44274669d47Ca48b20652a1Da0a9d52B7aa89b92";
        let b = ABI;
        return new ethers.Contract(a, b, library.getSigner());
    }

    return (
        <div>
            <div>
                <p>Account: {account}</p>
                <p>ChainId: {chainId}</p>
            </div>
            <div>
                <button type="button" onClick={handleConnect}>{active ? 'disconnect':'connect'}</button>
                <button type="button" onClick={switchChain} disabled={(chainId == 1) || !active ? true : false} >switch</button>
            </div>
            <div>
                <p>Contract: 0x44274669d47Ca48b20652a1Da0a9d52B7aa89b92</p>
            </div>
            <div>
                <button type="button" onClick={test} disabled={(chainId != 1) || !active ? true : false} >transact</button>
            </div>
        </div>
    );
}

export default Connect;