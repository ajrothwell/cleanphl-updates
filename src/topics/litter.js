import helpers from '../util/helpers';

export default {
  key: 'litter',
  label: 'Litter',
  components: [
    {
      type: 'tab-group',
      options: {
        getKey: function(item) {
          return item.key;
        },
        getTitle: function(item) {
          return item.value;
        },
        activeItem: function(state) {
          return state.map.selectedOverlay;
        },
        components: [
          // block score badge
          {
            type: 'badge',
            options: {
              titleBackground: function (state, item) {
                console.log('item,', item)
                if (state.sources.litterIndexLine.status === "success") {
                  var data = state.sources.litterIndexLine.data || [],
                  firstItem,
                  props,
                  score

                  for (let datum of data) {
                    if (datum.properties.YEAR === item.year) {
                      firstItem = datum;
                      continue;
                    }
                  }
                  props = firstItem.properties || {},
                  score = props.HUNDRED_BLOCK_SCORE;

                  return helpers.colorForBlockScore(score);
                }
              }
            },
            slots: {
              title: 'Litter Index Block Score',
              value: function (state, item) {
                if (state.sources.litterIndexLine.status === "success") {
                  var data = state.sources.litterIndexLine.data || [],
                  firstItem,
                  props,
                  score

                  for (let datum of data) {
                    if (datum.properties.YEAR === item.year) {
                      firstItem = datum;
                      continue;
                    }
                  }
                  console.log('calculating block score, data:', data, 'data[0].properties.YEAR', data[0]['properties']['YEAR'], 'item.year:', item.year, 'firstItem:', firstItem);
                  props = firstItem.properties || {},
                  score = props.HUNDRED_BLOCK_SCORE;

                  if (!score) {
                    return "No Data Available";
                  } else {
                    return Math.round(score * 100) / 100;
                  }
                } else {
                  return "No Data Available";
                }
              },
              description: function (state, item) {
                if (state.sources.litterIndexLine.status === "success") {
                  var data = state.sources.litterIndexLine.data || [],
                  firstItem,
                  props,
                  score

                  for (let datum of data) {
                    if (datum.properties.YEAR === item.year) {
                      firstItem = datum;
                      continue;
                    }
                  }
                  props = firstItem.properties || {},
                  score = props.HUNDRED_BLOCK_SCORE;

                  if (score) {
                    return 'out of 4.0';
                  }
                }
              },
            }
          },
          // division score badge
          {
            type: 'badge',
            options: {
              titleBackground: function (state, item) {
                if (state.sources.litterIndexLine.status === "success") {
                  var data = state.sources.litterIndexPolygon.data || [],
                  firstItem,
                  props,
                  score

                  for (let datum of data) {
                    if (datum.properties.YEAR.toString() === item.year.toString()) {
                      firstItem = datum;
                      continue;
                    }
                  }
                  props = firstItem.properties || {},
                  score = props.DIVISION_SCORE;
                  return helpers.colorForDivisionScore(score);
                }
              }
            },
            slots: {
              title: 'Litter Index Neighborhood Average',
              value: function (state) {
                if (state.sources.litterIndexLine.status === "success") {
                  var data = state.sources.litterIndexPolygon.data || [],
                  firstItem = data[0] || {},
                  props = firstItem.properties || {},
                  score = props.DIVISION_SCORE;

                  if (!score) {
                    return "No Data Available";
                  } else {
                    return Math.round(score * 100) / 100;
                  }
                }
              },
              description: function (state) {
                var data = state.sources.litterIndexPolygon.data || [],
                firstItem = data[0] || {},
                props = firstItem.properties || {},
                score = props.DIVISION_SCORE;

                if (score) {
                  return 'out of 4.0';
                }
              },
            }
          } // end of badge
        ],
        sort: {
          // this should return the val to sort on
          getValue: function(item) {
            return item.value;
          },
          // asc or desc
          order: 'desc'
        },
        map: {
          tiledOverlayControl: true,
        },
      },
      slots: {
        items: function (state) {
          return [
            {
              year: 2018,
              value: '2018',
              key: 'litterIndex2018'
            },
            {
              year: 2017,
              value: '2017',
              key: 'litterIndex2017'
            }
          ]
        }
      },
    }, // end of tab-group
    {
      type: 'vertical-table',
      options: {
          nullValue: 'None'
      },
      slots: {
        fields: [
          {
            label: '<a href="//philadelphiastreets.com/sanitation/residential/collection-schedules/" target="_blank">Trash & Recycling Day</a>',
            value: function (state) {
              var day = state.geocode.data.properties.rubbish_recycle_day;
              var DAYS_FORMATTED = {
                'MON': 'Monday',
                'TUE': 'Tuesday',
                'WED': 'Wednesday',
                'THU': 'Thursday',
                'FRI': 'Friday'
              };
              return DAYS_FORMATTED[day];
            }
          },
          {
            label: '<a href="//philadelphiastreets.com/recycling/home-base-residential/" target="_blank">Recycling Diversion Rate</a>',
            value: function (state) {
              var rate = state.geocode.data.properties.recycling_diversion_rate;
              var ratePercent = parseInt(rate * 100);
              var ratePercentStr = ratePercent + '%';

              return ratePercentStr;
            },
          },
          {
            label: '<a href="//opendataphilly.org/dataset/sanitation-districts" target="_blank">Sanitation District</a>',
            value: function (state) {
              return state.geocode.data.properties.sanitation_district;
            }
          },
          {
            label: '<a href="//philadelphiastreets.com/sanitation/residential/sanitation-convenience-centers/" target="_blank">Sanitation Convenience Center</a>',
            value: function (state) {
              return state.geocode.data.properties.sanitation_convenience_center;
            }
          },
          {
            label: '<a href="//philadelphiastreets.com/pmbc/" target="_blank">PMBC Block Captain</a>',
            value: function (state) {
              return state.geocode.data.properties.clean_philly_block_captain;
            }
          },
          {
            label: '<a href="//www.phila.gov/ParksandRecreation/getinvolved/friendsgroups/Pages/default.aspx" target="_blank">PPR Friends Group</a>',
            value: function (state) {
              return state.geocode.data.properties.ppr_friends;
            }
          },
          {
            label: '<a href="http://phillywatersheds.org/what_were_doing/community_partnerships" target="_blank">Watershed Group</a>',
            value: function (state) {
              return state.geocode.data.properties.major_phila_watershed;
            }
          },
          {
            label: '<a href="//www.phila.gov/commerce/neighborhoods/Pages/RevitalizingCorridors.aspx" target="_blank">Commercial Corridor Cleaning Program</a>',
            value: function (state) {
              return state.geocode.data.properties.commercial_corridor;
            }
          },
        ],
      }
    },
    {
      type: 'horizontal-table',
      options: {
        topicKey: 'zoning',
        id: 'rco',
        fields: [
          {
            label: 'RCO',
            value: function(state, item) {
              return '<b>' + item.properties.ORGANIZATION_NAME + '</b><br>'
              + item.properties.ORGANIZATION_ADDRESS
            },
          },
          {
            label: 'Primary Contact',
            value: function(state, item) {
              return item.properties.PRIMARY_NAME + '<br>'
              + item.properties.PRIMARY_PHONE + '<br>'
              + item.properties.PRIMARY_EMAIL// + '</a></b>'
            },
            transforms: [
              'rcoPrimaryContact'
            ]
          },
        ],
        externalLink: {
          forceShow: true,
          action: function() {
            return 'See a list of all RCOs in the city [PDF]';
          },
          name: '',
          href: function(state) {
            return '//www.phila.gov/CityPlanning/projectreviews/RCO%20Related/List_of_RCOs.pdf';
          }
        }
      },
      slots: {
        title: 'Registered Community Organizations',
        items: function(state) {
          if (state.sources['rco'].data) {
            var data = state.sources['rco'].data;
            var rows = data.map(function(row){
              var itemRow = row;
              return itemRow;
            });
            return rows;
          }
        },
      },
    },
  ],
  basemap: 'pwd',
  tiledOverlays: [
    'litterIndex2017',
    'litterIndex2018',
  ],
  identifyFeature: 'address-marker',
  parcels: 'pwd',
}
