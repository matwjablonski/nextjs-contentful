import Link from 'next/link'

const Nav = () => (
    <nav id="appNavbar" className="navbar-menu">
        <div className="navbar-end"> 
            <Link href="/">
                <a className="navbar-item">Home</a> 
            </Link> 
            <Link href="/blog/">
                <a className="navbar-item">Blog</a>
            </Link>
        </div>
    </nav>
)

export default Nav;