import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'

const Tabs = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => {
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearch ={() => setActiveTab(item)}
          />
        }}
      />
    </View>
  )
}

export default Tabs