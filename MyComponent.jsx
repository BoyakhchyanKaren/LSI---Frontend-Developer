import React, { useEffect } from "react";

const MyComponent = (props) => {
    let fetchDraftTimer;
    const { fetchDrafts, fetchHistory } = props;

    useEffect(() => {
        fetchDrafts();
        fetchHistory();
        fetchDraftTimer = setInterval(() => {
            fetchDrafts();
        }, 120000);
    }, []);

    return null;
};


