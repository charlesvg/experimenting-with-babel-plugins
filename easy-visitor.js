module.exports = function({ types: t }) {
    return {
        visitor: {

            ClassMethod(){
                console.log('GOT', path);
            },
            ClassBody(){
                console.log('GOT', path);
            },
            FunctionDeclaration(path) {
                console.log('GOT', JSON.stringify(path));
                if (path.type === 'ClassMethod') {
                    console.log('GOT', path);
                }
            },
        }
    };
};