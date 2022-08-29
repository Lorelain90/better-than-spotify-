import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

export default function useAuth(code: any) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        console.log(code)
        axios.post('http://localhost:3001/login', {
                code, 
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, '', '/')
            })
            .catch(err => {
                window.location = '/' as any
            })
    }, [code])

    useEffect(() => {
        if(!refreshToken || !expiresIn) return

        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            })
            .catch(err => {
                window.location = '/' as any
            })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken
}