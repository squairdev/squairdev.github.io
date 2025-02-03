import { Vector3, EventDispatcher, Camera } from 'three';
export declare class FirstPersonControls extends EventDispatcher {
    object: Camera;
    domElement?: HTMLElement | null;
    enabled: boolean;
    movementSpeed: number;
    lookSpeed: number;
    lookVertical: boolean;
    autoForward: boolean;
    activeLook: boolean;
    heightSpeed: boolean;
    heightCoef: number;
    heightMin: number;
    heightMax: number;
    constrainVertical: boolean;
    verticalMin: number;
    verticalMax: number;
    mouseDragOn: boolean;
    private autoSpeedFactor;
    private mouseX;
    private mouseY;
    private moveForward;
    private moveBackward;
    private moveLeft;
    private moveRight;
    private moveUp;
    private moveDown;
    private viewHalfX;
    private viewHalfY;
    private lat;
    private lon;
    private lookDirection;
    private spherical;
    readonly target: Vector3;
    constructor(object: Camera, domElement?: HTMLElement | null);
    connect: (domElement: HTMLElement) => void;
    dispose: () => void;
    handleResize: () => void;
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
    private onKeyDown;
    private onKeyUp;
    lookAt: (x: Vector3 | number, y?: number, z?: number) => this;
    update: (delta: number) => void;
    private contextmenu;
    private setOrientation;
}
