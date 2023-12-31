import React from "react";
import Metronome from './Metronome.css'

import click1 from './click1.Wav'
import click2 from './click2.Wav'

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };
        this.click1 = new Audio(click1)
        this.click2 = new Audio(click2)
    }

    render() {
        const { playing, bpm } = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="60" max="240" value={bpm} />
                </div>
                <button>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}
export default Metronome;