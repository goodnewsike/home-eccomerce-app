import {useLocation, matchPath} from 'react-router-dom';
// import queryString from 'query-string';

export const useLocationCode = () => {
   const {pathname} = useLocation();

   const house = matchPath(pathname, '/house');
   const interior = matchPath(pathname, '/interior');
   const furniture = matchPath(pathname, '/furniture');

   if (pathname === '/' || furniture?.isExact) {
      return 1;
   } else if (house?.isExact) {
      return 2;
   } else if (interior?.isExact) {
      return 3;
   } else {
      return 4;
   }
};

export const useAuth = () => {
   const {pathname} = useLocation();

   const routes = [
      '/login',
      '/signup',
      // '/users/:email/verify/:token',
      // '/user/reset/token/:token',
      // '/forgot-password',
      // '/change-password',
      // '/user/reset/token/:token',
   ];

   const checker = (route) => routes.indexOf(route) !== -1;

   return checker(pathname);
};

// export const useQueryString = () => {
//    const {search} = useLocation();

//    if (search) {
//       return {...queryString.parse(search)};
//    }

//    return {};
// };
