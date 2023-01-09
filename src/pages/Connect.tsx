import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import { contractAddress, defaultChainIdNum, defaultChainIdHex } from 'lib/constants';
import ABI from "abi/ClaimTest.json";
import injected from 'lib/connectors';

import svg00 from "../images/00.svg";
import svg01 from "../images/01.svg";
import svg02 from "../images/02.svg";
import svg03 from "../images/03.svg";
import svg04 from "../images/04.svg";
import svg05 from "../images/05.svg";
import svg06 from "../images/06.svg";
import svg07 from "../images/07.svg";
import svg08 from "../images/08.svg";
import svg09 from "../images/09.svg";
import svg10 from "../images/10.svg";
import svg11 from "../images/11.svg";
import svg12 from "../images/12.svg";
import svg13 from "../images/13.svg";
import svg14 from "../images/14.svg";
import svg15 from "../images/15.svg";
import svg16 from "../images/16.svg";
import svg17 from "../images/17.svg";
import svg18 from "../images/18.svg";
import svg19 from "../images/19.svg";
import svg20 from "../images/20.svg";
import svg21 from "../images/21.svg";
import svg22 from "../images/22.svg";
import svg23 from "../images/23.svg";

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
            params: [{chainId: defaultChainIdHex}]
        });
    }

    const test = async () => {
        try {
            const contract = getContract();
            const tx = await contract.test({value:"100000000000000000"});
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
        let address = contractAddress;
        let abi = ABI;
        return new ethers.Contract(address, abi, library.getSigner());
    }

    return (
        <div>
            <div>
                <img src={svg00} alt="00" width="160px" height="160px" />
                <img src={svg01} alt="01" width="160px" height="160px" />
                <img src={svg02} alt="02" width="160px" height="160px" />
                <img src={svg03} alt="03" width="160px" height="160px" />
                <img src={svg04} alt="04" width="160px" height="160px" />
                <img src={svg05} alt="05" width="160px" height="160px" />
            </div>
            <div>
                <img src={svg06} alt="06" width="160px" height="160px" />
                <img src={svg07} alt="07" width="160px" height="160px" />
                <img src={svg08} alt="08" width="160px" height="160px" />
                <img src={svg09} alt="09" width="160px" height="160px" />
                <img src={svg10} alt="10" width="160px" height="160px" />
                <img src={svg11} alt="11" width="160px" height="160px" />
            </div>
            <div>
                <p>Account: {account}</p>
                <p>ChainId: {chainId}</p>
            </div>
            <div>
                <button type="button" onClick={handleConnect}>{active ? 'disconnect':'connect'}</button>
                <button type="button" onClick={switchChain} disabled={(chainId === defaultChainIdNum) || !active ? true : false} >switch</button>
            </div>
            <div>
                <p>This is for testing.</p>
            </div>
            <div>
                <button type="button" onClick={test} disabled={(chainId !== defaultChainIdNum) || !active ? true : false} >Claim</button>
            </div>
            <div>
                <img src={svg12} alt="12" width="160px" height="160px" />
                <img src={svg13} alt="13" width="160px" height="160px" />
                <img src={svg14} alt="14" width="160px" height="160px" />
                <img src={svg15} alt="15" width="160px" height="160px" />
                <img src={svg16} alt="16" width="160px" height="160px" />
                <img src={svg17} alt="17" width="160px" height="160px" />
            </div>
            <div>
                <img src={svg18} alt="18" width="160px" height="160px" />
                <img src={svg19} alt="19" width="160px" height="160px" />
                <img src={svg20} alt="20" width="160px" height="160px" />
                <img src={svg21} alt="21" width="160px" height="160px" />
                <img src={svg22} alt="22" width="160px" height="160px" />
                <img src={svg23} alt="23" width="160px" height="160px" />
            </div>
        </div>
    );
}

export default Connect;