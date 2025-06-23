const api = {
    async buscarPet() {
        try {
            const response = await fetch('http://localhost:4000/pets'); //response da API mostra o await que e o que esperamos receber
            return await response.json(); // Converte a resposta em JSON

        } catch (error) { // Se ocorrer um erro, ele será capturado aqui
            console.error("Eu não consegui buscar os pets:", error);
            throw error; // re-lança o erro para que possa ser tratado em outro lugar
        }
    }
}
export default api; // Exporta o objeto api para que possa ser usado em outros arquivos