const Header = () => <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="container">
        <div className="navbar-brand">
        <a className="navbar-item" href="/">
            My Blog
        </a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="appNavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="appNavbar" className="navbar-menu">
            <div className="navbar-end"> 
                <a className="navbar-item" href="/">Home</a> 
                <a className="navbar-item" href="/blog/">Blog</a>
            </div>
        </div>
    </div>
</nav>;

export default Header;
