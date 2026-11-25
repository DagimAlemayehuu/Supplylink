// Standard Data Flow Diagram (DFD) Specifications for SupplyLink
// Notation: Gane & Sarson (Academic Standard)
// Balancing Law: 100% strict 1-to-1 match of all external boundary flows between Context and Level 0

// ============================================================================
// SLIDE 1: CONTEXT DIAGRAM (PROCESS 0 & EXTERNAL BOUNDARY)
// ============================================================================
export const contextDiagramData = {
  viewBox: "0 0 1920 1080",
  nodes: [
    {
      id: "p0",
      type: "process",
      procId: "0",
      name: "SupplyLink System",
      x: 720,
      y: 280,
      w: 480,
      h: 540
    },
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      x: 60,
      y: 260,
      w: 220,
      h: 560
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      x: 1640,
      y: 260,
      w: 220,
      h: 560
    },
    {
      id: "e_admin",
      type: "entity",
      name: "Admin",
      x: 820,
      y: 50,
      w: 280,
      h: 120
    }
  ],
  flows: [
    // --- Merchant <-> Process 0 (4 Inflows, 4 Outflows) ---
    {
      id: "cf_m_in_1",
      source: "e_merchant",
      target: "p0",
      label: "Registration Details",
      path: "M 280 320 L 720 320",
      labelPos: { x: 500, y: 320 }
    },
    {
      id: "cf_m_in_2",
      source: "e_merchant",
      target: "p0",
      label: "Stock Levels",
      path: "M 280 380 L 720 380",
      labelPos: { x: 500, y: 380 }
    },
    {
      id: "cf_m_in_3",
      source: "e_merchant",
      target: "p0",
      label: "Restock Order",
      path: "M 280 440 L 720 440",
      labelPos: { x: 500, y: 440 }
    },
    {
      id: "cf_m_in_4",
      source: "e_merchant",
      target: "p0",
      label: "Delivery Receipt",
      path: "M 280 500 L 720 500",
      labelPos: { x: 500, y: 500 }
    },
    {
      id: "cf_m_out_1",
      source: "p0",
      target: "e_merchant",
      label: "Account Confirmation",
      path: "M 720 570 L 280 570",
      labelPos: { x: 500, y: 570 }
    },
    {
      id: "cf_m_out_2",
      source: "p0",
      target: "e_merchant",
      label: "Low Stock Alert",
      path: "M 720 630 L 280 630",
      labelPos: { x: 500, y: 630 }
    },
    {
      id: "cf_m_out_3",
      source: "p0",
      target: "e_merchant",
      label: "Order Status",
      path: "M 720 690 L 280 690",
      labelPos: { x: 500, y: 690 }
    },
    {
      id: "cf_m_out_4",
      source: "p0",
      target: "e_merchant",
      label: "Delivery Schedule",
      path: "M 720 750 L 280 750",
      labelPos: { x: 500, y: 750 }
    },

    // --- Supplier <-> Process 0 (4 Inflows, 3 Outflows) ---
    {
      id: "cf_s_in_1",
      source: "e_supplier",
      target: "p0",
      label: "Registration Details",
      path: "M 1640 330 L 1200 330",
      labelPos: { x: 1420, y: 330 }
    },
    {
      id: "cf_s_in_2",
      source: "e_supplier",
      target: "p0",
      label: "Product Catalog",
      path: "M 1640 400 L 1200 400",
      labelPos: { x: 1420, y: 400 }
    },
    {
      id: "cf_s_in_3",
      source: "e_supplier",
      target: "p0",
      label: "Order Decision",
      path: "M 1640 470 L 1200 470",
      labelPos: { x: 1420, y: 470 }
    },
    {
      id: "cf_s_in_4",
      source: "e_supplier",
      target: "p0",
      label: "Dispatch Notice",
      path: "M 1640 540 L 1200 540",
      labelPos: { x: 1420, y: 540 }
    },
    {
      id: "cf_s_out_1",
      source: "p0",
      target: "e_supplier",
      label: "Account Confirmation",
      path: "M 1200 620 L 1640 620",
      labelPos: { x: 1420, y: 620 }
    },
    {
      id: "cf_s_out_2",
      source: "p0",
      target: "e_supplier",
      label: "Pending Orders",
      path: "M 1200 690 L 1640 690",
      labelPos: { x: 1420, y: 690 }
    },
    {
      id: "cf_s_out_3",
      source: "p0",
      target: "e_supplier",
      label: "Route Delivery Batch",
      path: "M 1200 760 L 1640 760",
      labelPos: { x: 1420, y: 760 }
    },

    // --- Admin <-> Process 0 (1 Inflow, 2 Outflows) ---
    {
      id: "cf_a_in_1",
      source: "e_admin",
      target: "p0",
      label: "Account Approval",
      path: "M 880 170 L 880 280",
      labelPos: { x: 760, y: 225 }
    },
    {
      id: "cf_a_out_1",
      source: "p0",
      target: "e_admin",
      label: "Pending Accounts",
      path: "M 960 280 L 960 170",
      labelPos: { x: 960, y: 225 }
    },
    {
      id: "cf_a_out_2",
      source: "p0",
      target: "e_admin",
      label: "Operations Report",
      path: "M 1040 280 L 1040 170",
      labelPos: { x: 1150, y: 225 }
    }
  ]
};

// ============================================================================
// SLIDE 2: LEVEL 0 DFD (FUNCTIONAL DECOMPOSITION OF PROCESS 0)
// ============================================================================
export const level0DiagramData = {
  viewBox: "0 0 2200 1200",
  nodes: [
    // External Entities (Same 3 entities as Context Diagram)
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      x: 50,
      y: 180,
      w: 200,
      h: 860
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      x: 1950,
      y: 180,
      w: 200,
      h: 860
    },
    {
      id: "e_admin",
      type: "entity",
      name: "Admin",
      x: 950,
      y: 30,
      w: 300,
      h: 90
    },

    // Processes 1.0 - 6.0 (Decomposed from Process 0)
    {
      id: "p1",
      type: "process",
      procId: "1.0",
      name: "Register Users",
      x: 950,
      y: 180,
      w: 300,
      h: 95
    },
    {
      id: "p2",
      type: "process",
      procId: "2.0",
      name: "Manage Products",
      x: 1400,
      y: 360,
      w: 290,
      h: 95
    },
    {
      id: "p3",
      type: "process",
      procId: "3.0",
      name: "Track Inventory",
      x: 510,
      y: 360,
      w: 290,
      h: 95
    },
    {
      id: "p4",
      type: "process",
      procId: "4.0",
      name: "Process Orders",
      x: 950,
      y: 520,
      w: 300,
      h: 95
    },
    {
      id: "p5",
      type: "process",
      procId: "5.0",
      name: "Schedule Deliveries",
      x: 950,
      y: 830,
      w: 300,
      h: 100
    },
    {
      id: "p6",
      type: "process",
      procId: "6.0",
      name: "Generate Reports",
      x: 1400,
      y: 1010,
      w: 290,
      h: 90
    },

    // Data Stores D1 - D5 (Internal Persistent Storage)
    {
      id: "d1",
      type: "store",
      storeId: "D1",
      name: "User Accounts",
      x: 510,
      y: 185,
      w: 270,
      h: 85
    },
    {
      id: "d2",
      type: "store",
      storeId: "D2",
      name: "Product Catalog",
      x: 1400,
      y: 525,
      w: 270,
      h: 85
    },
    {
      id: "d3",
      type: "store",
      storeId: "D3",
      name: "Inventory Records",
      x: 510,
      y: 525,
      w: 270,
      h: 85
    },
    {
      id: "d4",
      type: "store",
      storeId: "D4",
      name: "Customer Orders",
      x: 965,
      y: 675,
      w: 270,
      h: 85
    },
    {
      id: "d5",
      type: "store",
      storeId: "D5",
      name: "Delivery Routes",
      x: 965,
      y: 1015,
      w: 270,
      h: 85
    }
  ],

  flows: [
    // ------------------------------------------------------------------------
    // PROCESS 1.0 (Register Users) FLOWS
    // ------------------------------------------------------------------------
    // External Inflows
    {
      id: "f_m_reg_1",
      source: "e_merchant",
      target: "p1",
      label: "Registration Details",
      path: "M 250 205 L 950 205",
      labelPos: { x: 380, y: 205 }
    },
    {
      id: "f_s_reg_1",
      source: "e_supplier",
      target: "p1",
      label: "Registration Details",
      path: "M 1950 205 L 1250 205",
      labelPos: { x: 1820, y: 205 }
    },
    {
      id: "f_a_app_1",
      source: "e_admin",
      target: "p1",
      label: "Account Approval",
      path: "M 1030 120 L 1030 180",
      labelPos: { x: 970, y: 150 }
    },
    // External Outflows
    {
      id: "f_1_pend_a",
      source: "p1",
      target: "e_admin",
      label: "Pending Accounts",
      path: "M 1170 180 L 1170 120",
      labelPos: { x: 1235, y: 150 }
    },
    {
      id: "f_1_stat_m",
      source: "p1",
      target: "e_merchant",
      label: "Account Confirmation",
      path: "M 950 250 L 250 250",
      labelPos: { x: 380, y: 250 }
    },
    {
      id: "f_1_stat_s",
      source: "p1",
      target: "e_supplier",
      label: "Account Confirmation",
      path: "M 1250 250 L 1950 250",
      labelPos: { x: 1820, y: 250 }
    },
    // Internal Store Flow
    {
      id: "f_1_d1",
      source: "p1",
      target: "d1",
      label: "Account Record",
      path: "M 950 225 L 780 225",
      labelPos: { x: 865, y: 225 }
    },

    // ------------------------------------------------------------------------
    // PROCESS 2.0 (Manage Products) & PROCESS 3.0 (Track Inventory) FLOWS
    // ------------------------------------------------------------------------
    // Process 2.0
    {
      id: "f_s_cat_2",
      source: "e_supplier",
      target: "p2",
      label: "Product Catalog",
      path: "M 1950 390 L 1690 390",
      labelPos: { x: 1820, y: 390 }
    },
    {
      id: "f_2_d2",
      source: "p2",
      target: "d2",
      label: "Product Record",
      path: "M 1535 455 L 1535 525",
      labelPos: { x: 1535, y: 490 }
    },
    // Process 3.0
    {
      id: "f_m_stock_3",
      source: "e_merchant",
      target: "p3",
      label: "Stock Levels",
      path: "M 250 380 L 510 380",
      labelPos: { x: 380, y: 380 }
    },
    {
      id: "f_3_alert_m",
      source: "p3",
      target: "e_merchant",
      label: "Low Stock Alert",
      path: "M 510 425 L 250 425",
      labelPos: { x: 380, y: 425 }
    },
    {
      id: "f_3_d3",
      source: "p3",
      target: "d3",
      label: "Stock Record",
      path: "M 645 455 L 645 525",
      labelPos: { x: 645, y: 490 }
    },

    // ------------------------------------------------------------------------
    // PROCESS 4.0 (Process Orders) FLOWS
    // ------------------------------------------------------------------------
    {
      id: "f_m_req_4",
      source: "e_merchant",
      target: "p4",
      label: "Restock Order",
      path: "M 250 540 L 950 540",
      labelPos: { x: 380, y: 540 }
    },
    {
      id: "f_s_dec_4",
      source: "e_supplier",
      target: "p4",
      label: "Order Decision",
      path: "M 1950 540 L 1250 540",
      labelPos: { x: 1820, y: 540 }
    },
    {
      id: "f_d2_det_4",
      source: "d2",
      target: "p4",
      label: "Product Price",
      path: "M 1400 565 L 1250 565",
      labelPos: { x: 1325, y: 565 }
    },
    {
      id: "f_4_stat_m",
      source: "p4",
      target: "e_merchant",
      label: "Order Status",
      path: "M 950 585 L 250 585",
      labelPos: { x: 380, y: 585 }
    },
    {
      id: "f_4_new_s",
      source: "p4",
      target: "e_supplier",
      label: "Pending Orders",
      path: "M 1250 585 L 1950 585",
      labelPos: { x: 1820, y: 585 }
    },
    {
      id: "f_4_d4",
      source: "p4",
      target: "d4",
      label: "Order Record",
      path: "M 1100 615 L 1100 675",
      labelPos: { x: 1100, y: 645 }
    },

    // ------------------------------------------------------------------------
    // PROCESS 5.0 (Schedule Deliveries) FLOWS
    // ------------------------------------------------------------------------
    {
      id: "f_d4_acc_5",
      source: "d4",
      target: "p5",
      label: "Approved Orders",
      path: "M 1100 760 L 1100 830",
      labelPos: { x: 1100, y: 795 }
    },
    {
      id: "f_d1_loc_5",
      source: "d1",
      target: "p5",
      label: "Delivery Address",
      path: "M 740 270 L 740 850 L 950 850",
      labelPos: { x: 740, y: 740 }
    },
    {
      id: "f_m_rec_5",
      source: "e_merchant",
      target: "p5",
      label: "Delivery Receipt",
      path: "M 250 870 L 950 870",
      labelPos: { x: 380, y: 870 }
    },
    {
      id: "f_s_disp_5",
      source: "e_supplier",
      target: "p5",
      label: "Dispatch Notice",
      path: "M 1950 870 L 1250 870",
      labelPos: { x: 1820, y: 870 }
    },
    {
      id: "f_5_stat_m",
      source: "p5",
      target: "e_merchant",
      label: "Delivery Schedule",
      path: "M 950 910 L 250 910",
      labelPos: { x: 380, y: 910 }
    },
    {
      id: "f_5_bat_s",
      source: "p5",
      target: "e_supplier",
      label: "Route Delivery Batch",
      path: "M 1250 910 L 1950 910",
      labelPos: { x: 1820, y: 910 }
    },
    {
      id: "f_5_d5",
      source: "p5",
      target: "d5",
      label: "Route Plan",
      path: "M 1100 930 L 1100 1015",
      labelPos: { x: 1100, y: 975 }
    },
    {
      id: "f_5_d3_stock",
      source: "p5",
      target: "d3",
      label: "Stock Deduction",
      path: "M 950 890 L 840 890 L 840 570 L 780 570",
      labelPos: { x: 840, y: 700 }
    },

    // ------------------------------------------------------------------------
    // PROCESS 6.0 (Generate Reports) FLOWS
    // ------------------------------------------------------------------------
    {
      id: "f_d5_rep_6",
      source: "d5",
      target: "p6",
      label: "Route History",
      path: "M 1235 1055 L 1400 1055",
      labelPos: { x: 1315, y: 1055 }
    },
    {
      id: "f_6_rep_a",
      source: "p6",
      target: "e_admin",
      label: "Operations Report",
      path: "M 1690 1055 L 1860 1055 L 1860 75 L 1250 75",
      labelPos: { x: 1550, y: 75 }
    }
  ]
};

// ============================================================================
// LEVEL 0 PRESENTATION PHASES (Clean One-Line Explanations, Zero ASCII)
// ============================================================================
export const level0Phases = [
  {
    id: 0,
    title: "Overview",
    summary: "Full functional decomposition of Process 0 into six processes and five data stores.",
    presenterScript: "Process 0 decomposes into 6 core processes and 5 persistent data stores, maintaining 100% balancing with our context diagram.",
    flowSteps: ["EXTERNAL ENTITIES", "➔", "PROCESSES 1.0–6.0", "➔", "DATA STORES D1–D5"],
    flowLabel: "SYSTEM ARCHITECTURE",
    activeNodes: null,
    activeFlows: null
  },
  {
    id: 1,
    title: "1. Register Users",
    summary: "Merchants and Suppliers submit registration details; Admin reviews pending accounts and grants approvals.",
    presenterScript: "Merchants and Suppliers submit registration details to Process 1.0. Pending accounts route to the Admin for approval, and validated profiles store in D1.",
    flowSteps: ["MERCHANT / SUPPLIER", "➔", "PROCESS 1.0", "➔", "ADMIN APPROVAL"],
    flowLabel: "USER REGISTRATION FLOW",
    activeNodes: ["e_merchant", "e_supplier", "e_admin", "p1", "d1"],
    activeFlows: [
      "f_m_reg_1",
      "f_s_reg_1",
      "f_a_app_1",
      "f_1_pend_a",
      "f_1_stat_m",
      "f_1_stat_s",
      "f_1_d1"
    ]
  },
  {
    id: 2,
    title: "2. Catalog & Stock",
    summary: "Suppliers manage product catalog items; Merchants monitor inventory counts and receive low-stock alerts.",
    presenterScript: "Suppliers publish catalog items to Process 2.0 stored in D2 Products. Merchants send daily counts to Process 3.0, triggering low-stock alerts when levels dip.",
    flowSteps: ["SUPPLIER", "➔", "CATALOG D2", "➔", "INVENTORY D3", "➔", "MERCHANT"],
    flowLabel: "CATALOG & STOCK FLOW",
    activeNodes: ["e_supplier", "p2", "d2", "e_merchant", "p3", "d3"],
    activeFlows: [
      "f_s_cat_2",
      "f_2_d2",
      "f_m_stock_3",
      "f_3_alert_m",
      "f_3_d3"
    ]
  },
  {
    id: 3,
    title: "3. Process Orders",
    summary: "Merchants place restock orders validated against catalog pricing; Suppliers review and accept orders.",
    presenterScript: "Merchants dispatch restock orders to Process 4.0. Orders check against D2 Products, store in D4 Requests, and await Supplier acceptance.",
    flowSteps: ["MERCHANT", "➔", "PROCESS 4.0", "➔", "D4 REQUESTS", "➔", "SUPPLIER"],
    flowLabel: "ORDER PLACEMENT FLOW",
    activeNodes: ["e_merchant", "p4", "d2", "d4", "e_supplier"],
    activeFlows: [
      "f_m_req_4",
      "f_d2_det_4",
      "f_4_new_s",
      "f_s_dec_4",
      "f_4_stat_m",
      "f_4_d4"
    ]
  },
  {
    id: 4,
    title: "4. Schedule Deliveries",
    summary: "Accepted orders are grouped by location into delivery route batches and dispatched to suppliers.",
    presenterScript: "Process 5.0 reads accepted orders from D4 and store locations from D1, clustering them into D5 Delivery Batches for organized route dispatch.",
    flowSteps: ["D4 REQUESTS + D1 LOCATIONS", "➔", "PROCESS 5.0", "➔", "D5 DELIVERY BATCHES"],
    flowLabel: "ROUTE SCHEDULING FLOW",
    activeNodes: ["d4", "d1", "p5", "d5", "e_supplier", "e_merchant"],
    activeFlows: [
      "f_d4_acc_5",
      "f_d1_loc_5",
      "f_s_disp_5",
      "f_5_stat_m",
      "f_5_bat_s",
      "f_5_d5"
    ]
  },
  {
    id: 5,
    title: "5. Generate Reports",
    summary: "Merchant delivery receipts update inventory levels; completed delivery records generate admin reports.",
    presenterScript: "Merchant receipt confirmations update stock in D3 Inventory, while historical batch records in D5 feed Process 6.0 to generate Admin reports.",
    flowSteps: ["RECEIPT CONFIRMATION", "➔", "D3 INVENTORY", "➔", "ADMIN REPORTS"],
    flowLabel: "CLOSING THE LOOP",
    activeNodes: ["e_merchant", "p5", "d3", "d5", "p6", "e_admin"],
    activeFlows: [
      "f_m_rec_5",
      "f_5_d3_stock",
      "f_d5_rep_6",
      "f_6_rep_a"
    ]
  }
];
