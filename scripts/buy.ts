import { Address, toNano } from '@ton/core';
import { Proxy } from '../wrappers/Proxy';
import { NetworkProvider } from '@ton/blueprint';

const PROXY_ADDRESS = Address.parse('');
export async function run(provider: NetworkProvider) {
    const proxy = provider.open(
        Proxy.createFromAddress(PROXY_ADDRESS)
    );

    await proxy.sendBuy(provider.sender(), toNano('25'))

    await provider.waitForDeploy(proxy.address);

    // run methods on `proxy`
}