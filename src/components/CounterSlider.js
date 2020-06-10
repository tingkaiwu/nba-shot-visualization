import React from 'react';
import {
    Slider, InputNumber, Row, Col,
} from 'antd';

class CountSlider extends React.Component {
    state = {
        inputValue: 1,
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
        this.props.handleCountSliderChange(value);
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

export default CountSlider;