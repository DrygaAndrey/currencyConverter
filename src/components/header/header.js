import { useEffect, useState } from "react";
import './header.scss';

function Header({ currencies }) {
    useEffect(() => {

    }, []);


    return (
        <header>
            <p>1 UAH = {currencies.UAH ? currencies.UAH.EUR : null} EUR </p>
            <p>1 UAH = {currencies.UAH ? currencies.UAH.USD : null} USD </p>
        </header>
    );
}

export default Header;
