import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';

class Pause implements IBaseStage
{
    isSetup :boolean;
    time: number;
    isOver : boolean;
    
    setup(){}
    update(){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}

}