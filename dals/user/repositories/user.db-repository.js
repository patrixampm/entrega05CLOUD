import { hashPassword } from "#common/helpers/index.js";
import { userContext } from "../user.context.js";
export const dbRepository = {
    getUserByEmailAndPassword: async (email, password) => {
        const user = await userContext.findOne({
            email,
        });
        const hashedPassword = await hashPassword(password, user?.salt);
        return user?.password === hashedPassword
            ? {
                _id: user._id,
                email: user.email,
                role: user.role,
            }
            : null;
    },
};
