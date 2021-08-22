import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyA9IHDqUT2YtuwTGDxCU4auN3jO1qju-zc',
        language: 'en',
      }}
      requestUrl={{
        useOnPlatform: 'web', // or "all"
        url:
          'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
        headers: {
          Authorization: `an auth token`, // if required for your proxy
        },
      }}
    />
  );
};

export default GooglePlacesInput;
