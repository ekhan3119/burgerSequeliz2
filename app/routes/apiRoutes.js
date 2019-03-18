module.exports = function (app, db) {
    app.get('/api/all', function (req, res) {
        db.Burger.findAll({

        }).then(function (result) {
            res.json(result);
        });
    });

    app.put('/api/update/:id', function (req, res) {
        db.Burger.update({
            name: req.body.name
        },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            });
    });

    app.post('/api/new', function (req, res) {
        db.Burger.create({
            name: req.body.name,
            //devoured: req.body.devoured
        }).then(function (result) {
            res.json(result);
        });
    });

    app.delete('/api/delete/:id', function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    });
}
