import React from 'react';
import ShotChart from './ShotChart';
import CountSlider from './CounterSlider';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }
    handleCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }
    handleChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    }
    handleTooltipChange = (displayTooltip) => {
        this.setState({ displayTooltip });
    }
    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}
                />
                <div className="filters">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider handleCountSliderChange={_.debounce(this.handleCountSliderChange, 500)} /> : null}
                    <Row>
                        <Col span={9}>
                            <RadioGroup onChange={this.handleChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={4}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.handleTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;