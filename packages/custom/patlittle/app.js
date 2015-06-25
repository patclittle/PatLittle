'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Patlittle = new Module('patlittle');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Patlittle.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Patlittle.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Patlittle.menus.add({
    title: 'patlittle example page',
    link: 'patlittle example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Patlittle.aggregateAsset('css', 'patlittle.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Patlittle.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Patlittle.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Patlittle.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Patlittle;
});
