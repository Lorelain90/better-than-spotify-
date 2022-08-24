import {Request,Response} from 'express';
import {config as dotenvConfig} from 'dotenv'
import refreshAccessTokenModel from '../model/refreshAccessTokenModel';

dotenvConfig();

const refreshAccessTokenController = {
    user: async (req: Request, res: Response)=>{
        try{
            const refreshToken = req.body.refreshToken;

            refreshAccessTokenModel.refresgAT(refreshToken)
            .then(data => {
                res.json({
                    accessToken: data.body.accessToken,
                    expiresIn: data.body.expiresIn,
                })
            })
        }catch(error: any){
            res.status(400).send(error.message);
        }
    } 
}
export default refreshAccessTokenController;