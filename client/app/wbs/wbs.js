"use strict";
var Wbs = (function () {
    function Wbs(id, code, desc, start, parent, index) {
        if (id === void 0) { id = 0; }
        if (code === void 0) { code = ''; }
        if (desc === void 0) { desc = ''; }
        if (start === void 0) { start = 0; }
        if (parent === void 0) { parent = 0; }
        if (index === void 0) { index = 0; }
        this.desc = '';
        this.start = 0;
        this.qty = 0;
        this.uom = '';
        this.index = 0;
        return this;
    }
    return Wbs;
}());
exports.Wbs = Wbs;
//# sourceMappingURL=wbs.js.map