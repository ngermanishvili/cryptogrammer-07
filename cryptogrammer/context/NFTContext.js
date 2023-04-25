import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import {create as ipfsHttpClient} from 'ipfs-http-client';

import { MarketAddress, MarketAddressABI } from './constants';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

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
    const uplpadToIpfs = async (file, setFileUrl) => {
        try{

        } catch (error) {

        }
    }
    return (
        // This value is passed down to any components that are consuming this context for example in the NFT component
        <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount }}>
            {children}
        </NFTContext.Provider>
    )
}

