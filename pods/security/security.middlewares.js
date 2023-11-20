import jwt from "jsonwebtoken";
import { envConstants } from "#core/constants/index.js";
const verify = (token, secret) => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, userSession) => {
        if (error) {
            reject(error);
        }
        if (userSession) {
            resolve(userSession);
        }
        else {
            reject();
        }
    });
});
export const authenticationMiddleware = async (req, res, next) => {
    try {
        const [, token] = req.cookies.authorization?.split(' ') || [];
        const userSession = await verify(token, envConstants.AUTH_SECRET);
        req.userSession = userSession;
        next();
    }
    catch (error) {
        res.sendStatus(401);
    }
};
const isAuthorized = (currentRole, allowedRoles) => Boolean(currentRole) && allowedRoles.some((role) => currentRole === role);
export const authorizationMiddleware = (allowedRoles) => async (req, res, next) => {
    if (isAuthorized(req.userSession?.role, allowedRoles)) {
        next();
    }
    else {
        res.sendStatus(403);
    }
};
