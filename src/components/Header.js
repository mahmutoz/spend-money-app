import {moneyFormat} from '../MoneyFormat'

function Header({money, total}) {
    return (
        <>
            { total > 0 && money - total !== 0 && (
                <div className="header"><span>$ {moneyFormat(money - total)}</span> paranız kaldı</div>
            )}
            { total === 0 && (
                <div className="header"><span>$ {moneyFormat(money)}</span> paranız var</div>
            )}
            { money - total === 0 && (
                <div className="header">Paranız bitti.</div>
            )}
        </>
    );
}

export default Header;