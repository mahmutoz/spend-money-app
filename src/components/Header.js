import {moneyFormat} from '../MoneyFormat'
import CountUp from 'react-countup';
/**/

function Header({money, total}) {
    return (
        <>
            { total > 0 && money - total !== 0 && (
                <div className="header">
                    <CountUp
                    start={money}
                    end={money - total}
                    duration={0.7}
                    separator=" "
                    decimals={1}
                    decimal=","
                    prefix="$ "
                /></div>
            )}
            { total === 0 && (
                <div className="header"><span>$ {moneyFormat(money)}</span></div>
            )}
            { money - total === 0 && (
                <div className="header">You're out of money.</div>
            )}
        </>
    );
}

export default Header;