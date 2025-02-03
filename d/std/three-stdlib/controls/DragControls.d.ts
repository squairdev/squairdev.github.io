import { Camera, EventDispatcher, Object3D, Raycaster } from 'three';
declare class DragControls extends EventDispatcher {
    enabled: boolean;
    transformGroup: boolean;
    private _objects;
    private _camera;
    private _domElement;
    private _plane;
    private _raycaster;
    private _mouse;
    private _offset;
    private _intersection;
    private _worldPosition;
    private _inverseMatrix;
    private _intersections;
    private _selected;
    private _hovered;
    constructor(_objects: Object3D[], _camera: Camera, _domElement: HTMLElement);
    activate: () => void;
    deactivate: () => void;
    dispose: () => void;
    getObjects: () => Object3D[];
    getRaycaster: () => Raycaster;
    private onMouseMove;
    private onMouseDown;
    private onMouseCancel;
    private onPointerMove;
    private onPointerDown;
    private onPointerCancel;
    private onTouchMove;
    private onTouchStart;
    private onTouchEnd;
}
export { DragControls };
