module.exports = {

  basicInfo: function(session) {
    return new Promise((resolve) => {
      var api = `https://graph.facebook.com/v2.3/${session.credentials.userId}?fields=name,about,email&access_token=${session.credentials.token}`;
      fetch(api)
        .then((response) => response.json())
        .then((response) => {
          resolve(response);
        })
        .done();
    });
  },

  profilePhoto: function(session) {
    return new Promise((resolve) => {
      var api = `https://graph.facebook.com/v2.3/${session.credentials.userId}/picture?type=large&redirect=0&access_token=${session.credentials.token}`;
      fetch(api)
        .then((response) => response.json())
        .then((response) => {
          resolve(response.data.url);
        })
        .done();
    });
  }

};
