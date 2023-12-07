const connection = require('./connection');

const getAll = async () => {
    try {
        const result = await connection.query('SELECT * FROM usuarios');
        return result.rows; // Retorna somente as linhas (rows) dos resultados
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        throw error;
    }
};

const createUsuarios = async (usuariosData) => {
    const { id, nome, email, altura, peso } = usuariosData;

    const query = 'INSERT INTO usuarios(id, nome, email, altura, peso) VALUES($1, $2, $3, $4, $5) RETURNING *';

    try {
        const { rows } = await connection.query(query, [id, nome, email, altura, peso]);
        return rows[0]; // Retorna o registro inserido
    } catch (error) {
        console.error('Erro ao criar dados:', error);
        throw error;
    }
};

const deleteUsuarios = async (id) => {
    const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';

    try {
        const { rows } = await connection.query(query, [id]);
        if (rows.length > 0) {
            return rows[0]; // Retorna o registro removido
        } else {
            return null; // Caso nenhum registro tenha sido removido
        }
    } catch (error) {
        console.error('Erro ao excluir registro:', error);
        throw error;
    }
};


const updateUsuarios = async (id, usuarios) => {
    const { id, nome, email, altura, peso } = usuarios;

    const query = 'UPDATE usuarios SET id = $1, nome = $2, email = $3, altura = $4, peso = $5 WHERE id = $15 RETURNING *';

    try {
        const { rows } = await connection.query(query, [id, nome, email, altura, peso, id]);
        return rows[0]; // Retorna o registro atualizado
    } catch (error) {
        console.error('Erro ao atualizar registro:', error);
        throw error;
    }
};



module.exports = {
    getAll,
    createUsuarios,
    deleteUsuarios,
    updateUsuarios,

};