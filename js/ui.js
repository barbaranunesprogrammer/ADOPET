import api from './api.js';

const ui = {
    async renderizarPets() {
        const petsSection = document.getElementById("lista-pets");
        petsSection.innerHTML = ""; // Limpa a seção antes de renderizar

        try {
            const pets = await api.buscarPet();
            pets.forEach(pet => {
                const petItem = document.createElement("li");
                petItem.className = "pet-item";
                petItem.innerHTML = `
                    <div class="pet-details">
                        <h4>${pet.nome}</h4>
                        <p class="species">${pet.especie}</p>
                        <p class="breed">${pet.raca}</p>
                    </div>
                `;
                petsSection.appendChild(petItem);
            });
        } catch (error) {
            petsSection.innerHTML = "<p style='color: red;'>Erro ao carregar pets.</p>";
        }
    }
}
export default ui; // Exporta o objeto ui para que possa ser usado em outros arquivos