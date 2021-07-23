import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ClimbCard from './ClimbCard'

    const ClimbsContainer = (props) => {
      const showClimbs = () => {
          return props.climbs.map(climb => {
              return <ClimbCard climb={climb} key={climb.id}/>
          })
      }

    return (
     <ScrollView style={styles.container}>
             {showClimbs()}
     </ScrollView>
    )
}

export default ClimbsContainer

const styles = StyleSheet.create({
    container: {
    flexGrow: 1
    }
})