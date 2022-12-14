import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnectorArguments } from "@web3-react/types";

function injected() {
    const chainIds: AbstractConnectorArguments = {
        //supportedChainIds: [1, 11155111]
    };

    return new InjectedConnector(chainIds);
}

export default injected;