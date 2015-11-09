'use strict';

module.exports = function (Firebase , props) {
  return {

    componentWillMount: function(){

    },

    getInitialState: function() {
      return {
        loaded: false
      };
    },

    componentWillUnmount: function(){

    },

    componentDidMount: function() {
      var refs = {}
      Object.keys(props).forEach((prop) => {
        refs[prop] = Firebase.child(props[prop]);
        this.bindFirebaseEvents(refs[prop], prop);
      });

      this.refs = refs;
    },

    bindFirebaseEvents(ref, prop) {
      ref.on('value', (dataSnapshot) => {
        if (typeof this.handleRefValue === 'function') {
          this.handleRefValue(dataSnapshot)
        }
        else {
          this.setState(Object.assign(this.state, {loaded: true, [prop]: dataSnapshot.val()}));
        }
      });

      // ref.on('child_added', function(dataSnapshot) {
      //
      // });
      // ref.on('child_changed', function(dataSnapshot) {
      //
      // });
      //
      // ref.on('child_moved', function(childSnapshot, prevChildKey) {
      //
      // });
    }
  };

};
