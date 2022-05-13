/*Philip Hägg */

import React from 'react';
import ReactDom from 'react-dom';
import CurrentWeatherTile from '../components/currentWeatherTile.js';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';


afterEach(cleanup)

it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<CurrentWeatherTile />, div)
    ReactDom.unmountComponentAtNode(div);
})

it("renders current weather tile correctly with props, date", () => {
    var today = new Date();
    const { getByText } = render(<CurrentWeatherTile date={today.getUTCFullYear() + '-' +today.getMonth()+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()} icon="sunny" temperature="22°C" />);
    
    const date = getByText(today.getUTCFullYear() + '-' +today.getMonth()+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes());
    expect(date).toBeInTheDocument(today.getUTCFullYear() + '-' +today.getMonth()+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes());
})