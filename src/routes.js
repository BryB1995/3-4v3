"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });






    app.get('/api/:id', async (req, res) => {
        let _id = req.params.id;
        const query = database.query(
            'select * from course where id = ?',
            [_id]
        );
        const report = await query;
        res.status(200).send(JSON.stringify(report)).end();
    });



    app.post('/api/add', async (req, res) => {
        let _id = req.body.id;
        let _name = req.body.name;

        

        const query = database.query(
            'insert into course(id, name) values (?, ?)',
            [_id, _name]
        );
        const report = await query;
        res.status(200).send('Course added successfully!').end();
    });

    app.put('/api/mod', async (req, res) => {
        let _id = req.body.id;
        let _description = req.body.description;
        const query = database.query(
            'update course set description = ? where id = ?;',
            [_description, _id]
        );
        const report = await query;
        res.status(200).send('Course updated successfully').end();
    });



};