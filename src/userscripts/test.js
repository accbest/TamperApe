/*global

 */

new class test {
    constructor() {
        this.name = 'test';
        this.version = '1.0';
        // this.run_at = ["document_start", "document_body", "document_domloaded"];
        this.run_at = ["document_start", "document_domloaded"];
        this.includes = ['.*://.*baidu.*'];
    }

    get_Script() {
        return function () {
            function test(type) {
                console.log(type);
                // alert(type);
            }
        }
    }

    run_Script(type) {
        return function () {
            test(type);
        }
    }
}()