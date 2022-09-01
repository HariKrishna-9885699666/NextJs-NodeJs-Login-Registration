import { useState, useEffect } from "react";

const ProtectedRoute = ({ children, router, isUserLoggedIn, setUserLoggedIn, userInfo, setUserInfo } = props) => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
      // on initial load - run auth check 
      authCheck(router.pathname);

      // on route change start - hide page content by setting authorized to false  
      const hideContent = () => setAuthorized(false);
      router.events.on('routeChangeStart', hideContent);

      // on route change complete - run auth check 
      router.events.on('routeChangeComplete', authCheck)

      // unsubscribe from events in useEffect return function
      return () => {
          router.events.off('routeChangeStart', hideContent);
          router.events.off('routeChangeComplete', authCheck);
      }
  }, []);

  function authCheck(url) {
      // redirect to login page if accessing a private page and not logged in 
      const publicPaths = ['/login', '/register'];
      const userObj = localStorage.getItem("userInfo");
      const userObjLen = userObj && Object.keys(JSON.parse(userObj)).length;
      if (userObj) setUserInfo(JSON.parse(userObj));
      setUserLoggedIn(userObjLen || false);
      if (!userObjLen && !publicPaths.includes(url)) {
          setAuthorized(false);
          router.push({
              pathname: '/login'
          });
      } else {
          setAuthorized(true);
      }
  }
  return authorized && children;
};

export default ProtectedRoute;