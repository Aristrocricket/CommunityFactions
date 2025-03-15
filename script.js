document.addEventListener("DOMContentLoaded", () => {
    fetch("factions.json")
        .then(response => response.json())
        .then(data => displayFactions(data))
        .catch(error => console.error("Error loading factions:", error));
});

function createFactionHTML(faction) {
    const createList = (title, items) => 
        items && items.length ? `<p><strong>${title}:</strong> ${items.join(", ")}</p>` : "";

    return `
        <div class="faction-card">
            <h2>${faction.name}</h2>
            
            <div class="faction-images">
                <img src="${faction.logo || 'default-logo.png'}" alt="${faction.name} Logo" class="faction-logo">
            </div>

            <p><strong>Type:</strong> ${faction.type || "Unknown"}</p>
            <p><strong>Motto:</strong> "${faction.motto || "No motto available"}"</p>
            <p><strong>Description:</strong> "${faction.description || "No description available"}"</p>
            <p><strong>Homeworld:</strong> ${faction.homeworld || "Unknown"}</p>
            ${createList("Armor", faction.armor)}
            

            ${faction.propaganda ? `<img src="${faction.propaganda}" alt="Faction Propaganda" class="faction-propaganda">` : ""}
        </div>
    `;
}

function displayFactions(factions) {
    const container = document.getElementById("faction-container");
    container.innerHTML = ""; // Clear previous content

    factions.forEach(faction => {
        const factionElement = document.createElement("div");
        factionElement.innerHTML = createFactionHTML(faction);
        container.appendChild(factionElement);
    });
}
