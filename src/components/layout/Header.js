import Link from 'next/link';
export default function Header() {
    return (
        <header>
            <h2 className='logo'><Link href='/'>Daily Life</Link></h2>
            <div className='search'>
                <input />
            </div>
            <div className='usermenu'>
                <ul>
                    <li><Link href='/write'>Write</Link></li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='menu'>Magazine
                <ul className="nav-menu">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/story/all'>All</Link></li>
                    <li><Link href='/story/daily'>Daily</Link></li>
                    <li><Link href='/story/special'>Special</Link></li>
                    <li><Link href='/story/next'>Next.js</Link></li>
                </ul>
            </div>
        </header>
    )
}

