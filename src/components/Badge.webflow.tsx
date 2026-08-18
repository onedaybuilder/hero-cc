import { Badge } from './Badge';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(Badge, {
    name: 'Badge',
    description: 'A badge with variants',
    group: 'Info',
    props: {
        text: props.Text({
            name: "Text",
            defaultValue: "Hello World",
        }),
        image: props.Image({
            name: "Image"
        }),
        showImage: props.Boolean({
            name: 'showImage',
            defaultValue: false
        }),
        variant: props.Variant({
            name: "Variant",
            options: ["Light", "Dark"],
            defaultValue: "Light",
        }),
    },
});
