"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getCarrera(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.carreraId;
        const conn = yield database_1.connect();
        const carrera = yield conn.query('select * from Carreras where id = ?', [id]);
        return res.json(carrera[0]);
        return res.json(id);
    });
}
exports.getCarrera = getCarrera;
