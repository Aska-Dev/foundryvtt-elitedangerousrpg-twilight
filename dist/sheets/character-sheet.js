export class CharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["edrpg-twilight", "sheet", "actor"],
            template: "systems/edrpg-twilight/templates/character-sheet.html",
            width: 600,
            height: 400
        });
    }
    getData() {
        const context = super.getData();
        // Macht die Daten aus unserem Datenmodell (hp, ac, etc.) im HTML-Template verfügbar
        context.system = this.actor.system;
        return context;
    }
}
