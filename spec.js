//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'

describe('TODO site', function () {
    
    it('should have correct title', function () {
        browser.get(URL)
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })

    it('should create new note', function () {
        browser.get(URL)
        let createNoteField = $('input.enter-todo')
        createNoteField.clear()
        createNoteField.sendKeys('hhhhhhhhhhhh')
        browser.sleep(2000)
        createNoteField.submit()

        let notes = $$('todo-list .small-12')

        browser.sleep(2000)
        //expect(notes.getText()).not.toContain('New Shiny note')
        expect(notes.getText()).toContain('hhhhhhhhhhhh')
    })

    it('delete some specific note by index', function () {
        browser.get(URL)
        let lastNote = $$('todo-list-render').last()
        lastNote.$(`input[type='checkbox']`).click()

        //assertion here!
    })

    it('delete some specific note by name', function () {
        browser.get(URL)
        let firstNote = element.all(by.cssContainingText('todo-list-render', 'master')).first()
        firstNote.$(`input[type='checkbox']`).click()
        
        //assertion here!
    })

})