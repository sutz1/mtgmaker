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
exports.generateCardImage = void 0;
const Canvas = require("canvas");
function generateCardImage(cardName, strength, toughness, manaCost, cardType, cardDescription, manaType) {
    return __awaiter(this, void 0, void 0, function* () {
        const cardTemplate = yield Canvas.loadImage('../dist/createcard.jpg');
        const canvas = Canvas.createCanvas(cardTemplate.width, cardTemplate.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(cardTemplate, 0, 0, canvas.width, canvas.height);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(cardName, 50, 50);
        ctx.fillText(strength, 50, 80);
        ctx.fillText(toughness, 50, 110);
        ctx.fillText(manaCost, 50, 140);
        ctx.fillText(cardType, 50, 200);
        ctx.fillText(cardDescription, 50, 250);
        ctx.fillText(manaType, 50, 280);
        const generatedImageBuffer = canvas.toBuffer('image/jpeg');
        return generatedImageBuffer;
    });
}
exports.generateCardImage = generateCardImage;
//# sourceMappingURL=generator.js.map