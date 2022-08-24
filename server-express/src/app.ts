import express from 'express'
import cors from 'cors'
import {config as dotenvConfig} from 'dotenv'
import { loginRoute, lyricsRoute, refreshAccessTokenRoute } from './route'

dotenvConfig();

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(loginRoute)
app.use(refreshAccessTokenRoute)
app.use(lyricsRoute)

export default app;