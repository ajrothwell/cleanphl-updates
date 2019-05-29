export default {
  id: 'litter-index-line',
  type: 'esri',
  url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LITTER_INDEX_LINE/FeatureServer/0',
  options: {
    relationship: 'where',
  },
  parameters: {
    sourceField: 'seg_id',
    targetField: 'SEG_ID',
  }
}
