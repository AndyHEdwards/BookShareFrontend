"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('book-share-frontend/app', ['exports', 'ember', 'book-share-frontend/resolver', 'ember-load-initializers', 'book-share-frontend/config/environment'], function (exports, _ember, _bookShareFrontendResolver, _emberLoadInitializers, _bookShareFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _bookShareFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookShareFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _bookShareFrontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _bookShareFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('book-share-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'book-share-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _bookShareFrontendConfigEnvironment) {

  var name = _bookShareFrontendConfigEnvironment['default'].APP.name;
  var version = _bookShareFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('book-share-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('book-share-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('book-share-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'book-share-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _bookShareFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_bookShareFrontendConfigEnvironment['default'].APP.name, _bookShareFrontendConfigEnvironment['default'].APP.version)
  };
});
define('book-share-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('book-share-frontend/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('book-share-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('book-share-frontend/initializers/export-application-global', ['exports', 'ember', 'book-share-frontend/config/environment'], function (exports, _ember, _bookShareFrontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_bookShareFrontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _bookShareFrontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_bookShareFrontendConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('book-share-frontend/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('book-share-frontend/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('book-share-frontend/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("book-share-frontend/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('book-share-frontend/instance-initializers/in-app-livereload', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;
  var run = _ember['default'].run;

  function initialize(app) {
    var config = undefined,
        env = undefined;

    if (app.resolveRegistration) {
      config = app.resolveRegistration('config:environment');
    } else {
      config = app.container.lookupFactory('config:environment');
    }
    env = config.environment;

    if (config.cordova && config.cordova.reloadUrl && (env === 'development' || env === 'test')) {
      (function () {

        var url = config.cordova.reloadUrl;
        if (window.location.href.indexOf('file://') > -1) {
          run.later(function () {
            window.location.replace(url);
          }, 50);
        }
      })();
    }
  }

  exports['default'] = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };
});
define('book-share-frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('book-share-frontend/router', ['exports', 'ember', 'book-share-frontend/config/environment'], function (exports, _ember, _bookShareFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _bookShareFrontendConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('book-share-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('book-share-frontend/services/cordova', ['exports', 'ember-cordova/services/cordova'], function (exports, _emberCordovaServicesCordova) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesCordova['default'];
    }
  });
});
define('book-share-frontend/services/device/platform', ['exports', 'ember-cordova/services/device/platform'], function (exports, _emberCordovaServicesDevicePlatform) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDevicePlatform['default'];
    }
  });
});
define('book-share-frontend/services/device/splashscreen', ['exports', 'ember-cordova/services/device/splashscreen'], function (exports, _emberCordovaServicesDeviceSplashscreen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDeviceSplashscreen['default'];
    }
  });
});
define("book-share-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "book-share-frontend/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('book-share-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'book-share-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("book-share-frontend/app")["default"].create({"name":"book-share-frontend","version":"0.0.0+0697eb26"});
}

/* jshint ignore:end */
//# sourceMappingURL=book-share-frontend.map