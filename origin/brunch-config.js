module.exports = {
  files: {
    javascripts: {
      joinTo: {
          'vendor.js': /^(?!app)/
          , 'app.js': /^app/
        }
      }
    , stylesheets: {
        joinTo: 'app.css'
      }
  }

  , plugins: {
      babel: {
          "presets" : ["es2015"]
        ,"plugins": [
              "transform-class-properties"
            , "pipe-operator"
          ]
        //, "sourceMaps": "inline"
      }

    , blog : {
        site : { 
          url     : "https://i.am.benjaminclos.com"
        , title   : "Journey Through Cyberspace & Realtime"
        , github  : "ondreian"
        , twitter : "benjaminclos"
        , disqus  : "benjaminclos"
      }
    }
    , sass : {
          modules : true
        , options : {
            includePaths : [
              "node_modules/bulma"
            ]
          }  
    }
  }
  , hooks : {
      preCompile (end) {
        const
            fs   = require("fs") 
          , imgs = fs.readdirSync("./app/assets/images")

        fs.writeFileSync( "./app/images.js", "//this file is autogenerated\nmodule.exports = " + JSON.stringify(imgs) )
        end()
      }
  }
};
