import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { create } from 'ipfs-http-client'
import { MarketAddress, MarketAddressABI } from './constants';




const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: 'Basic ' + Buffer.from('2OxhaN6gjV1EHhaCrXbDX45NQx5' + ':' + '536d703a92ee7178f15bcee947b0d6e6').toString('base64')
    },
    cors: true
});


export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState();
    const nftCurrency = "NGC";

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) {
            return alert('Please install MetaMask');
        }

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        if (accounts.length) {
            const account = accounts[0];
            setCurrentAccount(account);
        } else {
            console.log('No authorized account found');
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    const connectWallet = async () => {
        if (!window.ethereum) {
            return alert('Please install MetaMask');
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        setCurrentAccount(accounts[0]);

        window.location.reload();
    }
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({ content: file });
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            return Promise.resolve(url);
        } catch (error) {
            console.log('Error uploading file to IPFS: ', error);
            return Promise.reject(error);
        }
    }

    return (
        // This value is passed down to any components that are consuming this context for example in the NFT component
        <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS }}>
            {children}
        </NFTContext.Provider>
    )
}
