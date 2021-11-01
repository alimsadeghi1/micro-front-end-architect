// * Import React
import React, { useRef, useEffect } from 'react';

// * Import Components imported from "Micro Front End"
import { mount } from 'dashboard/DashboardApp';

function DashboardMount() {
    const dashboardRef = useRef(null);

    useEffect(() => {
        mount(dashboardRef.current);
    }, []);

    return <div ref={dashboardRef} />;
}

export default DashboardMount;
