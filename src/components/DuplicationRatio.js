import React, { Component } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const RADIUS = 100
const STROKE_WIDTH = 10
const REAL_HALF_WIDTH = RADIUS + STROKE_WIDTH / 2

class DuplicationRatio extends Component {
    getViewBox() {
        return `-${REAL_HALF_WIDTH} -${REAL_HALF_WIDTH} ${2 * REAL_HALF_WIDTH} ${2 * REAL_HALF_WIDTH}`
    }
    getPath() {
        return `M-${Math.sqrt(RADIUS * RADIUS / 2)},${Math.sqrt(RADIUS * RADIUS / 2)} a${RADIUS},${RADIUS} 0 1 1 ${2 * Math.sqrt(RADIUS * RADIUS / 2)},0`
    }
    getDuplicationRatioText() {
        const percentage = " %"
        return this.props.duplicationRatio + percentage
    }
    render() {
        const duplicationRatio = "Duplication Ratio"
        const tooltip = <Tooltip bsStyle="background" id="">{this.props.tooltip}</Tooltip>
        return (
            <svg viewBox={this.getViewBox()} className="duplication-ratio-svg">
                <defs>
                    <linearGradient id="gradientColor">
                        <stop offset="0%" className="duplication-ratio-stop1" />
                        <stop offset="100%" className="duplication-ratio-stop2" />
                    </linearGradient>
                </defs>
                <path className="duplication-ratio-path" style={{ stroke: 'url(#gradientColor)' }} d={this.getPath()} strokeWidth={STROKE_WIDTH - 1} />
                <path className="duplication-ratio-path duplication-ratio-rest-path-color" d={this.getPath()} strokeWidth={STROKE_WIDTH} pathLength="100" strokeDasharray="100" strokeDashoffset={-this.props.duplicationRatio} />
                <text x="0" y="-2em" className="duplication-ratio-caption">{duplicationRatio}</text>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <text x="0" y="0.5em" className="duplication-ratio-percentage">{this.getDuplicationRatioText()}</text>
                </OverlayTrigger>
            </svg>
        )
    }
}

export default DuplicationRatio