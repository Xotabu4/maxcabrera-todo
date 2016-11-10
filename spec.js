//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'

describe('TODO site', function () {
    
    it('should have correct title', function () {
        browser.get(URL)
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })

    it('should create new note', function () {
        browser.get(URL)
        let webelement = $('input.enter-todo')
        webelement.sendKeys('New Shiny note')
        webelement.submit()

        let notes = $$('todo-list .small-12')

        //expect(notes.getText()).not.toContain('New Shiny note')
        expect(notes.getText()).toContain('New Shiny note')
    })
})