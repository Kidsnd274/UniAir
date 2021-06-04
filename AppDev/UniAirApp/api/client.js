export function get_aircon_data(ipAddress, port) {
    var ipWithPort = ipAddress + ":" + port
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    var results_return
    fetch("http://" + ipWithPort + "/api/aircon_data", requestOptions) // IP Address
      .then(response => response.text())
      .then(result => { 
          console.log(result)
          results_return = result
        }) // Results from request stored here (should be a json)
      .catch(error => console.log('ERROR: ', error)); // Error stored here
    return results_return
}

export function send_aircon_data(ipAddress, port, raw) {
    var ipWithPort = ipAddress + ":" + port
    var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: raw,
        redirect: 'follow'
      }
    var results_return
    fetch("http://" + ipWithPort + "/api/aircon_data", requestOptions)
      .then(response => response.text())
      .then(result => {
          console.log(result)
          results_return = result
        })
      .catch(error => console.log('ERROR: ', error));
    return results_return
}

export async function toggle_power(ipAddress, port) {
    var ipWithPort = ipAddress + ":" + port
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    return fetch("http://" + ipWithPort + "/api/toggle_power", requestOptions) // IP Address
    //   .then(response => response.json())
    //   .then(result => { 
    //       console.log(result)
    //       results_return = result
    //     }) // Results from request stored here (should be a json)
    //   .catch(error => console.log('ERROR: ', error)); // Error stored here
}