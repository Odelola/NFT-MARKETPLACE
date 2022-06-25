import React from 'react'
import Client from '../components/clientsComponents/Client'
import binanceLogo from '../images/clientsImages/binanceLogo.svg'
import ethereumLogo from '../images/clientsImages/ethereumLogo.svg'
import blockchainLogo from '../images/clientsImages/blockchainLogo.svg'
import './Clients.css'


const Clients = () => {
    return(
        <section id="clients">
            <div className="clients-inner">
                <Client src={binanceLogo} alt="Binance's Logo" />
                <Client src={ethereumLogo} alt="Ethereum's Logo" />
                <Client src={blockchainLogo} alt="BlockChain's Logo" />
            </div>
        </section>
    )
}
export default Clients