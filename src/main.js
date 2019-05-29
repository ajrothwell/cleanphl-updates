import Vue from 'vue';
Vue.config.devtools = true;

import mapboard from '@philly/mapboard/src/main.js';
var BASE_CONFIG_URL = '//cdn.jsdelivr.net/gh/ajrothwell/cleanphl-base-config@89fe193e30d021814d6e082892351551ddb05849/config.js'
var GATEKEEPER_KEY = '77e78967d0a3e768432f74132f784f42';

var searchInput = window.address || '';
import transforms from './general/transforms';
import rco from './data-sources/rco';
import litterIndexLine from './data-sources/litter-index-line';
import litterIndexPolygon from './data-sources/litter-index-polygon';
import litter from './topics/litter';

mapboard({
  gatekeeperKey: GATEKEEPER_KEY,
  greeting: {
    message: ''
  },
  plugin: {
    enabled: true,
    height: 600
  },
  defaultAddress: searchInput,
  router: {
    enabled: true
  },
  geolocation: {
    enabled: true,
    icon: ['far', 'dot-circle']
  },
  addressInput: {
    width: 415,
    mapWidth: 300,
    position: 'right',
    autocompleteEnabled: false,
    autocompleteMax: 15,
    placeholder: 'Search the map',
  },
  rootStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  transforms,
  map: {
    defaultBasemap: 'pwd',
    defaultIdentifyFeature: 'address-marker',
    overlaySelectControl: {
      shouldShow: true,
      position: 'topright',
      initialSelection: 'litterIndex2018',
    },
    imagery: {
      enabled: false
    },
    tiledLayers: {
      cityBasemapLabels: {
        url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        zIndex: '3',
      },
    },
    tiledOverlays: {
      litterIndex2018: {
        url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/LitterIndexTiles/MapServer',
        label: '2018',
        year: 2018,
        opacity: 1.0,
        zIndex: '4',
      },
      litterIndex2017: {
        url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/LitterIndexTiles/MapServer',
        label: '2017',
        year: 2017,
        opacity: 1.0,
        zIndex: '4',
      },
    },
  },
  baseConfig: BASE_CONFIG_URL,
  parcels: {
    pwd: {
      multipleAllowed: false,
      geocodeFailAttemptParcel: null,
      clearStateOnError: false,
      wipeOutOtherParcelsOnReverseGeocodeOnly: true,
      geocodeField: 'PARCELID',
      parcelIdInGeocoder: 'pwd_parcel_id',
      getByLatLngIfIdFails: false
    },
    dor: {
      multipleAllowed: true,
      geocodeFailAttemptParcel: 'pwd',
      clearStateOnError: true,
      wipeOutOtherParcelsOnReverseGeocodeOnly: false,
      geocodeField: 'MAPREG',
      parcelIdInGeocoder: 'dor_parcel_id',
      getByLatLngIfIdFails: true
    }
  },
  dataSources: {
    litterIndexLine,
    litterIndexPolygon,
    rco
  },
  topics: [
    litter
  ],
  components: [
    {
      type: 'topic-set',
      options: {
        defaultTopic: 'litter'
      }
    },
  ],
});
