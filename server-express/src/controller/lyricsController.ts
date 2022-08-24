import {Request,Response} from 'express';
import lyricsFinder from "lyrics-finder";

const lyricsController = {
    song: async (req: Request, res: Response)=>{
        try{
            const lyrics = (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
            res.json({ lyrics })
        }catch(error: any){
            res.status(400).send(error.message);
        }
    }
}

export default lyricsController;