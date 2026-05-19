import { CharacterData } from "./models/character-data.js";
import { CharacterSheet } from "./sheets/character-sheet.js";
Hooks.once("init", () => {
    console.log("EDRPG Twilight | Initializing Elite Dangerous RPG: Twilight System");
    CONFIG.Actor.dataModels = {
        character: CharacterData
    };
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("edrpg-twilight", CharacterSheet, { makeDefault: true });
});
