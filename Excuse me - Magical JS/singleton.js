const initNode = (function() {
    var tripNode = {
        startDate: '',
        endDate: '',
        startCity: '',
        endCity: '',
        ticketaApply: false,
        ticketsList: [{
            type: '0',
            vehicle: '0',
            startTime: '',
            subStartCity: '',
            subEndCity: '',
            flight: '',
            remark: ''
        }]
    };
    var ticketNode = {
        type: '0',
        vehicle: '0',
        startTime: '',
        subStartCity: '',
        subEndCity: '',
        flight: '',
        remark: ''
    };

    return {
        getTripNode: function() {
            return tripNode;
        },
        getTicketNode: function() {
            return ticketNode;
        }
    }
})();