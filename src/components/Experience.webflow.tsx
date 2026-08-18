import { Experience } from './Experience';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(Experience, {
    name: 'Experience',
    description: 'A full-viewport WebGL model viewer',
    group: '3D',
    props: {
        modelPath: props.Text({
            name: 'Model URL',
            defaultValue: 'https://cdn.jsdelivr.net/gh/onedaybuilder/hero-cc@main/public/models/fixed_new_york_highway_interstate_95.glb',
            tooltip: 'Publicly reachable URL to a .glb/.gltf file (e.g. hosted via jsDelivr on GitHub)',
        }),
    },
    options: {
        ssr: false,
    },
});
