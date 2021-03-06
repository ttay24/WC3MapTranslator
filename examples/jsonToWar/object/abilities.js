const Translator = require('../../../index.js'); // require('wc3maptranslator');
const { WarFile, Write } = require('../writeHelper.js');

const data = {
    "original": {
        "AHhb": [
            { "id": "Hhb1", "column": 1, "level": 1, "value": 1200, "type": "unreal" },
            { "id": "Hhb1", "column": 1, "level": 2, "value": 2400, "type": "unreal" },
            { "id": "Hhb1", "column": 1, "level": 3, "value": 3600, "type": "unreal" },

            { "id": "aart", "value": "ReplaceableTextures\\CommandButtons\\BTNHowlOfTerror.blp" }
        ]
    },
    "custom": {}
};

const objResult = new Translator.Objects.jsonToWar('abilities', data); // Custom abilities -> war3map.w3a
Write(WarFile.Object.Ability, objResult.buffer);
