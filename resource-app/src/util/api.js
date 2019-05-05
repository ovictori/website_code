const axiosLib = require("axios");
const axios = axiosLib.create({
  baseURL: "http://34.83.168.181/",
  timeout: 10000
  // headers: {'X-Custom-Header': 'foobar'}
});

export default class Api {
  constructor() {}

  postSubscription(actives, email) {
    // http://34.83.168.181/subscribe/<bid>/<emailAddr>

    actives.forEach((active, index) => {
      if (active) {
        axios.get(`subscribe/${index + 1}/${email}`).then(function(response) {
          console.log(index + 1, email, response);
        });
      }
    });
  }

  postDonation(box_id, content_type) {
    // http://34.83.168.181/donate/<bid>/<item>
    // ex: http://34.83.168.181/donate/2/hygene

    axios.get(`donate/${box_id}/${content_type}`).then(function(response) {
      console.log(response);
    });

    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open(
    //   "GET",
    //   "http://34.83.168.181/donate/" + box_id + "/" + content_type,
    //   false
    // ); // false for synchronous request
    // xmlHttp.send(null);
    // // get from api
    // return xmlHttp.responseText;
  }
}
