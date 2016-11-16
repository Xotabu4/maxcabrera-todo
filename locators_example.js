describe('showing various locators', function () {
    browser.get('http://www.protractortest.org/testapp/ng1/#/form')



    it('css', function () {
        
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })

})

let myNote = element(by.cssContainingText('todo-list-render', 'master typescript'))


let locatorsss = `by
Локаторы которые основываются на выполнении JS на странице
addLocator
+ binding
+\- exactBinding
+ model
+ buttonText
+ partialButtonText
+ repeater
+ exactRepeater
+ cssContainingText
+\- options
+\- deepCss
+\- js


Нативные локаторы используют возможности браузера
+ className
+ css
+ id
+ linkText
+ name
+ partialLinkText
+ tagName
+ xpath


`

