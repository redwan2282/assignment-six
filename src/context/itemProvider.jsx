"use client";
import React, { createContext, useState } from 'react';

export const items = createContext({});

const ItemProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);

    const abc = { plan, setPlan, savedPlan, setSavedPlan };

    return <items.Provider value={abc}>{children}</items.Provider>;
};

export default ItemProvider;