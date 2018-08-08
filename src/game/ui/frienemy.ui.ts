import { IGameObj } from './base.ui';
import { Graphics } from 'pixi.js';
import { Game } from '../game'

export class Frienemy implements IGameObj {

    x: number;
    y: number;
    vx: number;
    vy: number;

    value: number;

    MaxSpeed: number = 25;
    MinSpeed: number = 3;
    PercentSpeedPerRound: number;

    isDestroyed: boolean;
    isEnemy: boolean;
    pixiObject: Graphics;

    constructor (NumofRounds: number, yPos: number, CurrRoundNum: number, isEnemy:boolean) {

        this.pixiObject = new Graphics();
        this.PercentSpeedPerRound = this.MaxSpeed/NumofRounds;


        //Resolved: Note that here we need to access Game.AppWidth

        this.pixiObject.y = yPos;
        this.RoundInit(CurrRoundNum, isEnemy);
    }
    update(dt) {
        this.pixiObject.x -= this.vx;
    }

    RoundInit(CurrRoundNum: number, isEnemy:boolean)
    {
        this.positionReset();
        this.ChangeEnemyStatus(isEnemy);
        this.ChangeSpeed(CurrRoundNum);
    }

    private positionReset() {
        this.pixiObject.x = Game.AppWidth + 10;

    }

    private ChangeEnemyStatus(isEnemy: boolean) {


        var color = isEnemy? 0xFF3300 : 0x66CCFF;//ternary operator    
//??
        this.pixiObject.beginFill(color);
        this.pixiObject.lineStyle(4, color, 1);
        this.pixiObject.drawRect(0, 0, 33, 33);
        this.pixiObject.endFill();
    }
    private ChangeSpeed(CurrRoundNum: number) {

      
    }


}