// function Charles(constructor: Function) {
//     console.log('got', JSON.stringify(constructor, null, 2));
// }
//
// @Charles
export class MyClass {
    constructor(public something: string) {
        console.log('test');
    }

    public bla() {
        let foo = 1;
        let bar = 2;
        return foo === bar;
    }
}