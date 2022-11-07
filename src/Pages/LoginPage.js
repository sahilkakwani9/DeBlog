import { useState } from "react";
import Hero from "../components/Hero";
import useStore from "../Store/store";
import Layout from "./Layout";
function LoginPage() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState('');
    const state = useStore();

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Please Install Metamask");
            }
            else {
                const getAccount = await ethereum.request({
                    method: 'eth_requestAccounts'
                });
                setCurrentAccount(getAccount[0]);
                state.setCurrentAccount(getAccount[0]);
                setIsWalletConnected(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        !isWalletConnected ?
            (<Hero connectWallet={connectWallet} />)
            :
            (<Layout />)

    )
}

export default LoginPage