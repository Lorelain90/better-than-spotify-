import SpotifyWebApi from "spotify-web-api-node";

class refreshAccessTokenModel {   
    async refresgAT (refreshToken: any){
        const spotifyApi = await new SpotifyWebApi({
            redirectUri: process.env.REDIRECT_URI,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken,
        })

        
        return spotifyApi.refreshAccessToken()
    }
}

export default new refreshAccessTokenModel(); 