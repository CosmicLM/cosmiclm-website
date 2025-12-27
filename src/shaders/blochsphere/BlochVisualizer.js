import vertexShaderCode from '/src/shaders/vertex.glsl?raw';
import fragmentShaderCode from '/src/shaders/fragment.glsl?raw'
import * as THREE from 'three';

export class BlochVisualizer{
    constructor(canvas) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75,
            window.innerWidth/ window.innerHeight);
        //configure the renderer with transparency (alpha) to blend
        //the 3D scene with the website background
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });

        window.addEventListener('resize', () =>{
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.renderer,setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
        });
        
    }

    initializeScene(){
        //Combine ambient light for base visibility with directional light
        //to create shadows and depth on the sphere
        this.ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.light = new THREE.DirectionalLight(0xffffff,1);

        this.scene.add(this.light);
        this.scene.add(this.ambient);
        this.camera.position.z = 10;
         
    }
    update(){
        //Synchronize the rendering loop with the browser's refresh rate
        //to maintain smooth animation
        requestAnimationFrame(() => this.update());
        this.renderer.render(this.scene, this.camera);
    
    }
    addSphere(){
        // Apply custom Vertex and Fragment shaders to render the
        //grid lines and transparency logic
        this.geometry = new THREE.SphereGeometry(5, 32, 32);
        
        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShaderCode,
            fragmentShader: fragmentShaderCode,
            side: THREE.DoubleSide
        });

        this.sphere = new THREE.Mesh(this.geometry, material);
        this.scene.add(this.sphere);

    }
 
}