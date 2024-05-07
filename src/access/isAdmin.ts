import { Access } from "payload/config";

export const isAdmin:Access = ({req: {user}}) => {
    if(user.roles === "admin"){
        return true
    }
}