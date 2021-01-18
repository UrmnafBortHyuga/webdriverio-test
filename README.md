https://webdriver.io/docs/gettingstarted.html

```
> npx wdio wdio.conf.js
```
```
Execution of 2 spec files started at 2020-10-27T02:04:33.261Z

2020-10-27T02:04:33.363Z INFO @wdio/cli:launcher: Run onPrepare hook

Could not find chromedriver in default path:  C:\src\hubcom\UrmnafBortHyuga\webdriverio-test
ode_modules\chromedriver\lib\chromedriver\chromedriver.exe

Falling back to use global chromedriver bin
events.js:287
      throw er; // Unhandled 'error' event
      ^

Error: spawn chromedriver.exe ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:273:12)
    at onErrorNT (internal/child_process.js:469:16)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  errno: 'ENOENT',
  code: 'ENOENT',
  syscall: 'spawn chromedriver.exe',
  path: 'chromedriver.exe',
  spawnargs: [ '--port=9515', '--url-base=/' ]
}
```
https://qiita.com/higherKindPudding/items/f2b4c11b50b34508b64f

![キャプチャ.PNG](:/192307815301c7ce9d41de495f3907a1)

- https://chromedriver.chromium.org/downloads
- https://chromedriver.storage.googleapis.com/index.html?path=86.0.4240.22/

[chromedriver_win32.zip](https://chromedriver.storage.googleapis.com/86.0.4240.22/chromedriver_win32.zip)
```
mkdir C:\src\hubcom\UrmnafBortHyuga\webdriverio-test
ode_modules\chromedriver\lib\chromedriver

mv chromedriver.exe  **C:\src\hubcom\UrmnafBortHyuga**\webdriverio-test
ode_modules\chromedriver\lib\chromedriver
```
```
describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('http://localhost:3000/')
      expect(browser).toHaveTitle('React App');
    browser.saveScreenshot('./some/path/screenshot.png');
  })
```