import React, { Component } from 'react';
import { useEffect, useState,useRef } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWx3aW5kZXJhbGkiLCJhIjoiY2xoMjNzZXFqMTFhdjNlb3hxczVhcW90OSJ9.jTTim-omdichR_y3n1vLfg';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export function MapContainer({lat,lng,zoom,setLat,setLng,setZoom}){
const mapContainer = useRef(null);
const map = useRef(null);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });
        return (
            <div>
            <div ref={mapContainer} className="map-container" />
            
            </div>
            );
  
}