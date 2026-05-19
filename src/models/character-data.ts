export class CharacterData extends foundry.abstract.DataModel<any, any> {
    static override defineSchema() {
        const fields = foundry.data.fields;
        return {
            name: new fields.StringField({ required: true }),

            health: new fields.SchemaField({
                value: new fields.NumberField({ required: true, integer: true }),
                max: new fields.NumberField({ required: true, integer: true }),
            }),
        };
    }    
}