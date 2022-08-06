const map = require('lodash/map');
const capitalize = require('./capitalize');

module.exports = function (action:string) {
    const parts = action.split('_');
    return map(parts, (p:string, i:number) => {
        if (i === 0) return '';
        return i > 1 ? capitalize(p) : p.toLowerCase();
    }).join('');
};
