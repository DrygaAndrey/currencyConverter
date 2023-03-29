import { useEffect, useState } from "react";
import './header.scss';

function Header({ currencies }) {
    useEffect(() => {

    }, []);


    return (
        <header>
            <p>1 UAH = {currencies.UAH ? currencies.UAH.EUR.toFixed(3) : null} EUR </p>
            <p>1 UAH = {currencies.UAH ? currencies.UAH.USD.toFixed(3) : null} USD </p>
        </header>
    );
}

export default Header;
