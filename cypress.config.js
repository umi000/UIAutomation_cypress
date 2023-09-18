const { defineConfig } = require("cypress")
const {
  install,
  ensureBrowserFlags
} = require('@neuralegion/cypress-har-generator');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
module.exports = defineConfig({
  projectId: "13k4a2" ,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
    screenshotOnRunFailure:true,
  },
  experimentalMemoryManagement : true ,
  video:false,

    e2e: {
      baseUrl: 'https://staging.recruiting.qlu.ai/auth' ,
      setupNodeEvents(on, config) {
        install(on);
        on('before:browser:launch', (browser = {}, launchOptions) => {
          console.log(launchOptions.args)
          // require('cypress-mochawesome-reporter/plugin')(on);
          if (browser.name == 'chrome') {
            launchOptions.args.push('--disable-gpu')
          }
      
          return launchOptions
        })

        on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);
        });
  
        on('after:run', async () => {
          console.log('override after:run');
          await afterRunHook();
        });
        // implement node event listeners here
        on('before:browser:launch', (browser = {}, launchOptions) => {
          ensureBrowserFlags(browser, launchOptions);
          return launchOptions;
        });
      },
      defaultCommandTimeout: 100000 ,
      requestTimeout: 100000 ,
      ELECTRON_EXTRA_LAUNCH_ARGS: '--disable-gpu' , 
      testIsolation:false,
    }
  })