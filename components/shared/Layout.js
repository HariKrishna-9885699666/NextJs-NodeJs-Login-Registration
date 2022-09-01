function Layout({ ... props }) {
    return (
        <>  
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 w-100 text-center">NextJS Signup, Signin, Logout features</span>
            </nav>
            {props.children}
        </>
    );
}

export default Layout;