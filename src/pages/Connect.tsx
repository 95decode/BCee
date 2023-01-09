import { useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";
import { contractAddress, defaultChainIdNum, defaultChainIdHex } from 'lib/constants';
import ABI from "abi/ClaimTest.json";
import injected from 'lib/connectors';

import svg00 from "../assets/00.svg";
import svg01 from "../assets/01.svg";
import svg02 from "../assets/02.svg";
import svg03 from "../assets/03.svg";
import svg04 from "../assets/04.svg";
import svg05 from "../assets/05.svg";
import svg06 from "../assets/06.svg";
import svg07 from "../assets/07.svg";
import svg08 from "../assets/08.svg";
import svg09 from "../assets/09.svg";
import svg10 from "../assets/10.svg";
import svg11 from "../assets/11.svg";
import svg12 from "../assets/12.svg";
import svg13 from "../assets/13.svg";
import svg14 from "../assets/14.svg";
import svg15 from "../assets/15.svg";
import svg16 from "../assets/16.svg";
import svg17 from "../assets/17.svg";
import svg18 from "../assets/18.svg";
import svg19 from "../assets/19.svg";
import svg20 from "../assets/20.svg";
import svg21 from "../assets/21.svg";
import svg22 from "../assets/22.svg";
import svg23 from "../assets/23.svg";

import metamask from "../assets/metamaskLogo.png";
import ethereum from "../assets/ethereum.png";
//import claim from "../assets/claim.png";
import opensea from "../assets/opensea.png";
import github from "../assets/github.png";
import etherscan from "../assets/etherscan.png";

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

    const toOpenSea = () => {
        window.open("https://opensea.io/");
    }

    const toGithub = () => {
        window.open("https://github.com/95decode/BCee-contract/");
    }

    const toEtherscan = () => {
        window.open("https://etherscan.io/address/" + contractAddress);
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
                <h1>This page has not been opened yet.</h1>
                <p>{typeof(account) === typeof("") ? `Connected Account : ${account}`: "Connect your wallet using Metamask"}</p>
                <p>{(chainId !== defaultChainIdNum) && (typeof(account) === typeof("")) ? `Switch to the Ethereum main network. (current network : ${chainId})` : ""}</p>
            </div>
            <div>
                <button type="button" onClick={handleConnect} style={{ width: "100px", height: "80px",}}><img src={metamask} style={{ width: "50px", height: "50px",}} alt="metamask"></img>{active ? 'Disconnect':'Connect'}</button>
                <button type="button" onClick={switchChain} disabled={(chainId === defaultChainIdNum) || !active ? true : false} style={{ width: "100px", height: "80px",}}><img src={ethereum} style={{ width: "50px", height: "50px",}} alt="ethereum"></img>Switch</button>
            </div>
            <div>
                <p>Purchasing NFT for 0.1 eth</p>
            </div>
            <div>
                <button type="button" onClick={test} style={{ width: "100px", height: "80px",}} disabled={(chainId !== defaultChainIdNum) || !active ? true : false} ><img src={svg01} style={{ width: "50px", height: "50px",}} alt="purchase"></img>Purchase</button>
                <p></p>
            </div>
            <div>
                <p></p>
                <img src={opensea} style={{ width: "50px", height: "50px",}} alt="opensea" onClick={toOpenSea}></img>
                <img src={github} style={{ width: "50px", height: "50px",}} alt="github" onClick={toGithub}></img>
                <img src={etherscan} style={{ width: "50px", height: "50px",}} alt="etherscan" onClick={toEtherscan}></img>
                <p></p>
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