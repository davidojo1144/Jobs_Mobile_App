import {useState, useCallback} from 'react'
import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'


import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components"
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'


const JobDetails = () => {

    const params = useSearchParams()
    const router = useRouter()

    const { data, isLoading, error, refresh } = useFetch("job-details", {
        job_id: params.id
    })


  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails
