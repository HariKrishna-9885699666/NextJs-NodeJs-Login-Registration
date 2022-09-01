import Link from 'next/link'
import Router from 'next/router';

function Layout({ isUserLoggedIn, children } = props) {
    const logOut = () => {
        localStorage.clear();
        Router.push('/login');
    };
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">NextJS Signup, Signin, Logout features</a>
                    {isUserLoggedIn && (<Link href="/">
                        <a onClick={(e) => logOut()}>Logout</a>
                    </Link>)}
                </div>
            </nav>
            {children}
        </>
    );
}

export default Layout;