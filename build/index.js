"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config().parsed;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get("/", (_req, res) => {
    console.log("Hello Equipzilla!");
    res.send("Welcome to Equipzilla");
});
app.listen(`${process.env.PORT}`, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
