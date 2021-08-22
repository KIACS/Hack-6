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
    />
  );
};

export default GooglePlacesInput;
