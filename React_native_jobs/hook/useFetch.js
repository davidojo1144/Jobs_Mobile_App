import { useState, useEffect } from "react";
import axios from "axios"
import Constants from 'expo-constants';

const rapidApiKey = Constants.expoConfig.extra.RAPID_API_KEY




const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'c215002a4cmshc2e02b81a0e69c3p1cebe4jsnd321d9cbea1e',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request
            (options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            //alert("There was an error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }


    return { data, isLoading, error, refetch }

}


export default useFetch