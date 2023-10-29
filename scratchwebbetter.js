(function () {
    var extension = {
        // VR Access Block
        vrAccess: function (variable) {
            
          (function () {
              var extension = {
                  // VR Access Block
                  vrAccess: function (variable) {
                      // Check if A-Frame is available
                      if (typeof AFRAME !== 'undefined') {
                          // Access VR elements using A-Frame syntax
                          // For example, create a new VR box
                          var vrBox = document.createElement('a-box');
                          vrBox.setAttribute('position', '0 1.6 -3');
                          vrBox.setAttribute('color', 'red');
                          vrBox.setAttribute('scale', '0.5 0.5 0.5');

                          // Append the VR box to the scene
                          AFRAME.scenes[0].appendChild(vrBox);
                      } else {
                          // A-Frame not available, handle accordingly
                          console.error('A-Frame library is not loaded.');
                      }
                  },
              };

              // Register the extension
              ScratchExtensions.register('VR Extension', extension, {type: 'misc'});

          })();

        },

        // API Access Block
        apiAccess: function (apiUrl) {
          (function () {
              var extension = {
                  // API Access Block
                  apiAccess: function (apiUrl, callback) {
                      // Make a GET request to the specified API URL
                      fetch(apiUrl)
                          .then(function (response) {
                              // Check if the request was successful
                              if (!response.ok) {
                                  throw new Error('Network response was not ok');
                              }
                              // Parse the JSON response
                              return response.json();
                          })
                          .then(function (data) {
                              // Call the callback function with the API response data
                              callback(data);
                          })
                          .catch(function (error) {
                              // Handle errors and call the callback with an error message
                              callback({ error: error.message });
                          });
                  },
              };

              // Register the extension
              ScratchExtensions.register('API Extension', extension, {type: 'misc'});

          })();

        },

        // HTTP Request Block
        httpRequest: function (url, method, data) {
            (function () {
                var extension = {
                    // HTTP Request Block
                    httpRequest: function (url, method, data, callback) {
                        var requestOptions = {
                            method: method, // 'GET', 'POST', 'PUT', etc.
                            headers: {
                                'Content-Type': 'application/json', // specify content type if sending JSON data
                            },
                        };

                        // Add request body for POST and PUT requests
                        if (method === 'POST' || method === 'PUT') {
                            requestOptions.body = JSON.stringify(data);
                        }

                        // Make the HTTP request
                        fetch(url, requestOptions)
                            .then(function (response) {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(function (responseData) {
                                callback(responseData); // Call the callback function with the response data
                            })
                            .catch(function (error) {
                                callback({ error: error.message }); // Handle errors and call the callback with an error message
                            });
                    },
                };

                // Register the extension
                ScratchExtensions.register('HTTP Request Extension', extension, { type: 'misc' });
            })();

        },

        // Ethical Hacking Features
        ethicalHacking: {
            (function () {
                var extension = {
                    // Ethical Hacking Features
                    ethicalHacking: {
                        // Simulate a password check function (for educational purposes)
                        checkPassword: function (password, callback) {
                            // Simulate a password check (replace with real logic)
                            var isPasswordStrong = password.length >= 8;
                            callback(isPasswordStrong);
                        },

                        // Simulate a secure login function (for educational purposes)
                        secureLogin: function (username, password, callback) {
                            // Simulate a secure login (replace with real logic)
                            var isAuthenticated = username === "user" && password === "password123";
                            callback(isAuthenticated);
                        },
                    },
                };

                // Register the extension
                ScratchExtensions.register('Ethical Hacking Extension', extension, { type: 'misc' });
            })();

        },

        // Interactive Shell
        openShell: function () {
            // Code to open an interactive shell
        },

        // Translate Code to Scratch Blocks
        translateCodeToBlocks: function (code) {
            // Code to translate entered code to Scratch blocks
        },
    };

    // Register the extension
    ScratchExtensions.register('ScratchWebBetter', extension, {type: 'misc'});

})();
