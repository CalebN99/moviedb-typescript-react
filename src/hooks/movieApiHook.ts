import { useState, useEffect } from 'react';



export type ApiResponse = {
    status: Number,
    statusText: String,
    data: any,
    error: any,
    loading: Boolean,

}

export const useMovieApi = (url: string): ApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const json = await res.json();
            setStatus(res.status);
            setStatusText(res.statusText);
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
      });
    
      return { status, statusText, data, error, loading };

}