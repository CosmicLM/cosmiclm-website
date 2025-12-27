import { BlochVisualizer } from "./src/shaders/blochsphere/BlochVisualizer";

const canvas = document.getElementById('bloch-sphere');
const visualizer = new BlochVisualizer(canvas); 
visualizer.initializeScene(); 
visualizer.addSphere();
visualizer.update();