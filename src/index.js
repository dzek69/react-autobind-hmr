if (process.env.NODE_ENV === "production") {
    module.exports = require("react-autobind");
}
else {
    const autobind = require("react-autobind");

    /**
     * Properly autobinds proxied by react-hmr React component methods
     *
     * @param {Object} context - component instance
     * @returns {void}
     */
    module.exports = function fixedAutobind(context) {
        let _prevContext = context;
        let _context = context;
        while (_context.render && _context.render.name !== "render") {
            _prevContext = _context;
            _context = Object.getPrototypeOf(_context);
        }

        if (!_context.render) { // Something went wrong, we don't know what to do so just autobind like always
            autobind(context);
            return;
        }

        autobind(_prevContext);
    };
}
