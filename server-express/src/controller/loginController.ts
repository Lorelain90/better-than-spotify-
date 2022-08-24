import {Request,Response} from 'express';
import {config as dotenvConfig} from 'dotenv'
import loginModel from '../model/loginModel';

dotenvConfig();

const loginController = {
    user: async (req: Request, res: Response)=>{
        try{
            const code = await req.body.code;

            loginModel.pLogin(code)
            .then((data) => {
                res.json({
                    accessToken: data.body.access_token,
                    refreshToken: data.body.refresh_token,
                    expiresIn: data.body.expires_in,
                });
            })
        }catch(error: any){
            res.status(400).send(error.message);
        }
    }  
}
export default loginController;