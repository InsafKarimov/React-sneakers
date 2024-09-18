function Header() {
    return <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
        <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="d-flex align-center">
        <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/card.svg" className="mr-10" alt="Цена"/>
            <span>1205 руб.</span>
        </li>
        <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/favorite.svg" className="mr-10" alt="Закладки"/>
            <span>Закладки</span>
        </li>
        <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/user.svg" className="mr-10" alt="Профиль" />
            <span>Профиль</span>
        </li>
        </ul>
    </header>
}

export default Header;