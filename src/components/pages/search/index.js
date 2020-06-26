import React, { Component } from "react";
import moment from "moment";
import { Button, Card, Elevation } from "@blueprintjs/core";

import { flightData } from "../../../services/api";
import PageWrapper from '../../page-wrapper'
import FlightSearchBar from '../../flight-search-bar'

class App extends Component {
    state = {};

    async componentDidMount() {
        const data = await flightData.fetchAll();
        const { flights } = await data.json();
        this.setState({ flights });
    }

    updateDepartureDate(departureDate) {
        this.setState({ departureDate });
    }

    updateReturnDate(returnDate) {
        this.setState({ returnDate });
    }
    render() {
        const { outbound = [], inbound = [] } = this.getMatchingFlights();

        return (
            <PageWrapper>
                <FlightSearchBar onDepartureDateChange={this.updateDepartureDate.bind(this)} onReturnDateChange={this.updateReturnDate.bind(this)} />
                {/* show flight results here */}
            </PageWrapper>
        );
    }
}

export default App;
