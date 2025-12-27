varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {

    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    
    //Assignments
    vUv = uv;
    vNormal =  normalize(normalMatrix * normal);
    vViewPosition = -modelViewPosition.xyz;

    //Output of Position
    gl_Position = projectionMatrix * modelViewPosition;


}

 