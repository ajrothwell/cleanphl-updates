export default {
  rcoPrimaryContact: {
    transform: function(value) {
      var PHONE_NUMBER_PAT = /\(?(\d{3})\)?( |-)?(\d{3})(-| )?(\d{4})/g;
      var m = PHONE_NUMBER_PAT.exec(value);

      // check for non-match
      if (!m) {
        return value;
      }

      // standardize phone number
      var std = ['(', m[1], ') ', m[3], '-', m[5]].join('');
      var orig = m[0]
      var valueStd = value.replace(orig, std);

      return valueStd;
    }
  },
}
