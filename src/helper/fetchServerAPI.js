import Routes from "../client/Routes"
import { matchPath } from 'react-router-dom'

export default (req, store) =>{
    const activeRoute = Routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(store)
        : Promise.resolve()

    return promise;
}