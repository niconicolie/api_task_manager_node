(async () => {
    const database = require('./db');
    const Task = require('./task');

    try {
        const result = await database.sync();
        console.log(result);

        const resultCreate = await Task.create({ // CREATE
            name: '',
            descricao: ''
        })
        console.log(resultCreate);
        
        
        const tasks = await Task.findAll(); // READ
        console.log(tasks)
        
        const task = await Task.findByPk(3); // READ per ID
        task.name = "Trabalho A3"

        const resultSave = await task.save(); // UPDATE
        console.log(resultSave)

        Task.destroy({ where: { id: 2 }}); // DELETE
    }
     catch (error) {
        console.log(error);
    }
    
})();