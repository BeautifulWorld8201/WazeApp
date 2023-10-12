import { StyleSheet, View, Text, TouchableOpacity, Image, useAnimatedValue } from 'react-native'
import MapboxGL from '@rnmapbox/maps';
import { useState, useEffect, useRef } from 'react'
import * as Location from 'expo-location'
import axios from 'axios'

import InputField from '../Components/InputField'

import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

var api_key = 'pk.eyJ1IjoibmF0aXZlbWFwczMiLCJhIjoiY2xuYXR2MjB5MDE5eTJqc204eXppeWd5NCJ9.MJ3B95iarPZ2ZmmReXV9Eg'

MapboxGL.setAccessToken(api_key)
MapboxGL.setConnected(true)

const HomeScreen = ({navigation}) => {
    const [position, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045
    })
    const [destination, setDestination] = useState(null)
    const [routeGeoJSON, setRouteGeoJSON] = useState(null)
    const [lastPoint, setLastPoint] = useState(null)
    const [steps, setSteps] = useState([])
    const [focused, setFocused] = useState(true)

    const camera = useRef(null)
    const mapRef = useRef(null)

    useEffect(() => {
        MapboxGL.setTelemetryEnabled(false) 
        getCurrentLocation()

        const func = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            } else {
                Location.watchPositionAsync(
                    {
                        timeInterval: 3000,
                        accuracy: Location.Accuracy.BestForNavigation,
                    },
                    newLocation => {
                        let { coords } = newLocation
                        let region = {
                            latitude: coords.latitude,
                            longitude: coords.longitude,
                            latitudeDelta: 0.045,
                            longitudeDelta: 0.045
                        }
                        if(region) {
                            setLocation(region)
                        }
                    },
                    error => console.log(error)
                )
            }
        }
        setTimeout(() => {
            func()
        }, 3000)
        
    }, [])

    useEffect(() => {
        if(position !== null && destination !== null) {
            getRoute(position, destination)
        }
    }, [position])

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        console.log('App Get Current Location', location)
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045
        })
    }

    const getRoute = (position, destination) => {
        axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${position.longitude},${position.latitude};${destination.coordinates[0]},${destination.coordinates[1]}?alternatives=true&geometries=geojson&overview=full&steps=true&access_token=${api_key}`)
        .then(result => { 
            const tempValue = result.data.routes[0].legs[0].steps.map((item, index, array) => {
                return item.maneuver.instruction
            })
            setSteps(tempValue)

            let lineStringGeoJSON = {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: result.data?.routes[0]?.geometry,
                  },
                ],
            }
            let length = result.data?.routes[0]?.geometry.coordinates.length
            setLastPoint(result.data?.routes[0]?.geometry.coordinates[length - 1])
            setRouteGeoJSON(lineStringGeoJSON)
        })
        .catch(err => { console.log(err) })
    }

    const onToggleCamera = () => {
        setFocused(e => !e)
        setTimeout(() => {
            setFocused(e => !e)
        }, 500)
    }

    useEffect(() => {
        console.log(steps)
    }, steps)

    return (
        <View style={styles.container}>
            <MapboxGL.MapView 
            projection='globe'
            styleURL={MapboxGL.StyleURL.Street} 
            userTrackingMode={MapboxGL.UserTrackingModes.MGLUserTrackingModeFollow} 
            style={styles.map} ref={mapRef} 
            onPress={(e) => setDestination(e.geometry)} 
            // zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            logoEnabled={false}
            onTouchStart={(e) => setFocused(false)}
            attributionEnabled={false} >

                {focused && (
                    <MapboxGL.Camera
                        ref={camera}
                        followHeading={true}
                        animationMode={'easeTo'}
                        animationDuration={5000}
                        followUserLocation={true}
                        followUserMode="course"
                        followZoomLevel={17}
                        followPitch={60}
                    />
                )}

                {routeGeoJSON && (
                    <MapboxGL.ShapeSource id='routeLine' shape={routeGeoJSON}>
                        <MapboxGL.LineLayer id='lines' style={{lineColor: '#7E7E7E', lineWidth: 10, lineCap: 'round', lineOpacity: 0.8}} />
                    </MapboxGL.ShapeSource>
                )}

                {lastPoint && (
                    <>
                        <MapboxGL.ShapeSource id='circleSource' shape={{ type: 'Point', coordinates: lastPoint }}>
                            <MapboxGL.CircleLayer id='circleLayer' style={{ circleColor: 'red', circleRadius: 20, circleOpacity: 0.2 }} />
                        </MapboxGL.ShapeSource>

                        <MapboxGL.ShapeSource id='circleSource1' shape={{ type: 'Point', coordinates: lastPoint }}>
                            <MapboxGL.CircleLayer id='circleLayer1' style={{ circleColor: 'red', circleRadius: 5 }} />
                        </MapboxGL.ShapeSource>
                    </>
                )}

                {destination && (
                    <MapboxGL.MarkerView
                        coordinate={[destination.coordinates[0], destination.coordinates[1]]}>
                            <Image source={require('../assets/marker.png')} style={{width: 30, height: 30, resizeMode: 'contain'}} />
                    </MapboxGL.MarkerView>
                )}

                <MapboxGL.MarkerView
                    coordinate={[position.longitude, position.latitude]}>
                        <Image source={require('../assets/marker.png')} style={{width: 30, height: 30, resizeMode: 'contain'}} />
                </MapboxGL.MarkerView>
                
            </MapboxGL.MapView>

            <View style={[styles.toolbar]}>
                <View style={[GlobalStyle.BoxShadow, styles.view, GlobalStyle.flex('row', 'space-between', 'center')]}>
                    <View style={[GlobalStyle.flex('row', 'flex-start', 'center')]}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image source={require('../assets/ic_menu.png')} style={[styles.icon]} />
                        </TouchableOpacity>
                        <Text style={[GlobalStyle.h5, GlobalStyle.dark2Label, GlobalStyle.margin(0,0,0,20)]}>Native</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../assets/ic_volume_up.png')} style={[styles.icon]} />
                    </TouchableOpacity>
                </View>
                <View style={[GlobalStyle.BoxShadow, styles.musicBtn]}>
                    <TouchableOpacity>
                        <Image source={require('../assets/ic_music.png')} style={[styles.icon]} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.modal]}>
                <View style={[styles.border]}></View>
                <InputField placeholder='AAA' onClick={() => console.log('12346')} />
            </View>

            <TouchableOpacity style={{position: 'absolute', bottom: 50, left: 50}} onPress={onToggleCamera}>
                <Text>1234</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    map: {
        flex: 1
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    toolbar: {
        position: 'absolute',
        width: '100%',
        marginTop: GlobalStyle.STATUS_BAR_HEIGHT + 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flex: 1
    },
    view: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        paddingHorizontal: 20,
        height: GlobalStyle.SCREEN_WIDTH * 0.13,
    },
    musicBtn: {
        width: GlobalStyle.SCREEN_WIDTH * 0.13,
        height: GlobalStyle.SCREEN_WIDTH * 0.13,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        width: '30%',
        height: 5,
        borderRadius: 20,
        backgroundColor: Colors.gray,
        marginBottom: 10
    }, 
    modal: {
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: GlobalStyle.SCREEN_WIDTH,
        height: 100,
        backgroundColor: 'white',
        zIndex: 5,
        padding: 20,
        paddingTop: 10,
    }
})

export default HomeScreen