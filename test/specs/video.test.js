const webdriverio = require('webdriverio');

global.selenoid_hostname = '192.168.1.11';
global.selenoid_protocol = 'http';
global.sessionId;

it('Sample test case', async function(){
    const options = { 
        hostname: selenoid_hostname,
        port: 4444,
        protocol: selenoid_protocol,
        path: '/wd/hub',
        capabilities: { 
            browserName: 'chrome',
            browserVersion: '125',
            'selenoid:options': {
                enableVideo: true 
            }      
        } 
    };

    const browser = await webdriverio.remote(options);
    global.sessionId = browser.sessionId
    console.log("Created browser; session ID: " + global.sessionId)
    
    await browser.url('https://en.wikipedia.org/wiki/Software_testing');
    await expect(2 + 2).toBe(5);
    await browser.deleteSession()
});
