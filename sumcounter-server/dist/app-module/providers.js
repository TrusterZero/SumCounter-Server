"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = require("./app.service");
const riot_service_1 = require("../services/riot.service");
const champion_data_service_1 = require("../services/champion-data.service");
const spell_data_service_1 = require("../services/spell-data.service");
const socket_service_1 = require("../services/socket/socket.service");
const api_service_1 = require("../services/api/api.service");
const match_service_1 = require("../services/match/match.service");
exports.PROVIDERS = [
    app_service_1.AppService,
    api_service_1.ApiService,
    riot_service_1.RiotService,
    match_service_1.MatchService,
    champion_data_service_1.ChampionDataService,
    spell_data_service_1.SpellDataService,
    socket_service_1.EventsGateway,
];
//# sourceMappingURL=providers.js.map