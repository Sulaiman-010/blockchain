import { Web3Context } from "components/Web3Provider";
import HashStorageContract from "contracts/HashStorage.json";
import { useContext, useEffect, useState } from "react";
import { EthContract, HashStorageEthContract, RawEthContract } from "types";

//a custom hook useEthAccounts that can be used to get the currently connected Ethereum accounts.
//The useContext hook is used to get the Web3Context that provides the web3 instance.
//The useState hook is used to define a state variable accounts that will hold an array of account addresses.
//The useEffect hook is used to update the accounts state variable when the web3 instance changes. It calls the getAccounts
//function on the web3 instance to get an array of account addresses and sets it as the value of the accounts state variable.
//Finally, the hook returns the accounts state variable.

export const useEthAccounts = () => {
    const web3 = useContext(Web3Context);
    const [accounts, setAccounts] = useState<string[]>();

    useEffect(() => {
        const execute = async () => {
            if (web3) {
                setAccounts(await web3.eth.getAccounts());
            }
        };

        execute();
    }, [web3]);

    return accounts;
};
//The hook takes a rawContract object as input which contains the ABI (Application Binary Interface) and the network deployment information for the contract.
//The hook uses the useContext hook to get the Web3Context that provides the web3 instance.
//The useState hook is used to define a state variable contract that will hold the instance of the contract.
//The useEffect hook is used to update the contract state variable when the rawContract or web3 instances change.
// It first retrieves the network ID from the web3 instance using the getId() function.
//It then uses the network ID to get the deployed contract instance from the rawContract object.
//Finally, it creates an instance of the contract using the ABI and the deployed contract address.
//It casts the instance to the type T and sets it as the value of the contract state variable.
//The hook returns the contract state variable.

const useEthContract = <T extends EthContract>(rawContract: RawEthContract) => {
    const web3 = useContext(Web3Context);
    const [contract, setContract] = useState<T>();

    useEffect(() => {
        const execute = async () => {
            if (web3) {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = rawContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    rawContract.abi,
                    deployedNetwork && deployedNetwork.address
                ) as unknown as T;

                setContract(instance);
            }
        };

        execute();
    }, [rawContract, web3]);

    return contract;
};

export const useHashStorageContract = () =>
    useEthContract<HashStorageEthContract>(HashStorageContract as RawEthContract);
