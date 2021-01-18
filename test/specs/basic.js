describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('http://localhost:3000/')
      expect(browser).toHaveTitle('React App');
    browser.saveScreenshot('./some/path/screenshot.png');
  })

  // it('should demonstrate the addValue command', () => {

  //   browser.url('http://localhost:3000/')

  //   let input = $('todo-text')
  //   input.addValue('test')
  //   input.addValue(123)

  //   value = input.getValue()
  //   assert(value === 'test123') // true
  // })
})