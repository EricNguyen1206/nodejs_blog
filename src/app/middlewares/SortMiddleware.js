module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    };

    if(req.query.hasOwnProperty('_sort')) {
        // res.local.sort.enabled = true;
        // res.local.sort.type = req.query.type;
        // res.local.sort.column = req.query.column;

        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        })
    }


    next();
};