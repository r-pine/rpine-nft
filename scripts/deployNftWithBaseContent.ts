import { Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftCollectionV3 } from '../wrappers/NftCollectionV3';

const COLLECTION_ADDRESS = Address.parse('')

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollectionV3.createFromAddress(COLLECTION_ADDRESS));
    await nftCollection.sendDeployNftWithBaseContent(provider.sender())
}
