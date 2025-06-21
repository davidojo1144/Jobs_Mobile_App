import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { cheeckImageURL } from '../../../../utils'



const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={()=> handleNavigate}
    >

      <TouchableOpacity style={styles.logoContainer}>
        <Image
        source={{uri: cheeckImageURL(job.employer_logo)
          ? job.employer_logo
          : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNICW7diNmGXJfMicpY9eXHKV4sgzO5H.jpg'
        }}
        resizeMode='contain'
        style={styles.logImage}        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{job.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName}
        numberOfLines={1}
        >
          {job.job_title}
        </Text>
        <Text styles={styles.location}>{job.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard