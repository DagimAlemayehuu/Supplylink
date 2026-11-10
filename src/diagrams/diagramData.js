// Complete Data Flow Diagram definitions for SupplyLink (Industrial Noir Edition)
// Notation: Gane & Sarson (Academic Standard)
// Balancing Law: 100% strict 1-to-1 match of all 18 external boundary flows between Context and Level 0

// ============================================================================
// CONTEXT DIAGRAM DATA
// ============================================================================
export const contextDiagramData = {
  viewBox: "0 0 1920 1080",
  nodes: [
    {
      id: "p0",
      type: "process",
      procId: "0",
      name: "SupplyLink System",
      category: "system",
      x: 720,
      y: 340,
      w: 480,
      h: 340,
      description: "Central software platform coordinating on-demand requests, route batching, and inventory monitoring"
    },
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      subtitle: "Source & Sink",
      x: 50,
      y: 260,
      w: 220,
      h: 500,
      description: "Dispatches stock levels & requests; receives deliveries & alerts"
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      subtitle: "Source & Sink",
      x: 1650,
      y: 260,
      w: 220,
      h: 500,
      description: "Manages catalog & decisions; delivers organized route batches"
    },
    {
      id: "e_admin",
      type: "entity",
      name: "Admin",
      subtitle: "Source & Sink",
      x: 820,
      y: 60,
      w: 280,
      h: 170,
      description: "Approves onboarding; reviews audit reports"
    }
  ],
  flows: [
    // Merchant -> System (Inflow)
    {
      id: "cf_m_in",
      source: "e_merchant",
      target: "p0",
      label: "registration details, stock levels, requests, receipt confirmation",
      items: [
        "registration details",
        "stock levels",
        "requests (restock or new product)",
        "receipt confirmation"
      ],
      flowType: "inflow",
      category: "merchant",
      path: "M 270 430 L 720 430",
      labelPos: { x: 495, y: 310 }
    },
    // System -> Merchant (Outflow)
    {
      id: "cf_m_out",
      source: "p0",
      target: "e_merchant",
      label: "account status, low-stock alerts, request status, delivery status",
      items: [
        "account status",
        "low-stock alerts",
        "request status",
        "delivery status"
      ],
      flowType: "outflow",
      category: "merchant",
      path: "M 720 590 L 270 590",
      labelPos: { x: 495, y: 710 }
    },
    // Supplier -> System (Inflow)
    {
      id: "cf_s_in",
      source: "e_supplier",
      target: "p0",
      label: "registration & delivery settings, product catalog, decisions, dispatch confirmation",
      items: [
        "registration and delivery settings",
        "product catalog",
        "request decisions",
        "dispatch confirmation"
      ],
      flowType: "inflow",
      category: "supplier",
      path: "M 1650 430 L 1200 430",
      labelPos: { x: 1425, y: 310 }
    },
    // System -> Supplier (Outflow)
    {
      id: "cf_s_out",
      source: "p0",
      target: "e_supplier",
      label: "account status, new requests, delivery batches",
      items: [
        "account status",
        "new requests",
        "delivery batches"
      ],
      flowType: "outflow",
      category: "supplier",
      path: "M 1200 590 L 1650 590",
      labelPos: { x: 1425, y: 710 }
    },
    // Admin -> System (Inflow)
    {
      id: "cf_a_in",
      source: "e_admin",
      target: "p0",
      label: "user approvals",
      items: ["user approvals"],
      flowType: "inflow",
      category: "admin",
      path: "M 890 230 L 890 340",
      labelPos: { x: 740, y: 285 }
    },
    // System -> Admin (Outflow)
    {
      id: "cf_a_out",
      source: "p0",
      target: "e_admin",
      label: "pending registrations, reports",
      items: ["pending registrations", "reports"],
      flowType: "outflow",
      category: "admin",
      path: "M 1030 340 L 1030 230",
      labelPos: { x: 1180, y: 285 }
    }
  ]
};

// ============================================================================
// LEVEL 0 DFD DATA (100% BALANCED & COLLISION-FREE)
// ============================================================================
export const level0DiagramData = {
  viewBox: "0 0 1920 1080",
  nodes: [
    // External Entities (Left & Right Margins)
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      subtitle: "Source & Sink",
      x: 40,
      y: 220,
      w: 190,
      h: 630
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      subtitle: "Source & Sink",
      x: 1690,
      y: 130,
      w: 190,
      h: 540
    },
    {
      id: "e_admin",
      type: "entity",
      name: "Admin",
      subtitle: "Source & Sink",
      x: 1690,
      y: 730,
      w: 190,
      h: 230
    },

    // Column 1 (Left Lane: D1, P3, D3)
    {
      id: "d1",
      type: "store",
      storeId: "D1",
      name: "Users and profiles",
      desc: "locations, delivery settings",
      x: 410,
      y: 75,
      w: 250,
      h: 88
    },
    {
      id: "p3",
      type: "process",
      procId: "3.0",
      name: "Manage stock",
      x: 410,
      y: 260,
      w: 250,
      h: 92
    },
    {
      id: "d3",
      type: "store",
      storeId: "D3",
      name: "Inventory",
      desc: "merchant inventory",
      x: 410,
      y: 445,
      w: 250,
      h: 88
    },

    // Column 2 (Center Lane: P1, P4, D4, P5, D5)
    {
      id: "p1",
      type: "process",
      procId: "1.0",
      name: "Manage users and profiles",
      x: 840,
      y: 75,
      w: 260,
      h: 92
    },
    {
      id: "p4",
      type: "process",
      procId: "4.0",
      name: "Handle requests",
      x: 840,
      y: 260,
      w: 260,
      h: 92
    },
    {
      id: "d4",
      type: "store",
      storeId: "D4",
      name: "Requests",
      desc: "restock & product orders",
      x: 840,
      y: 445,
      w: 260,
      h: 88
    },
    {
      id: "p5",
      type: "process",
      procId: "5.0",
      name: "Plan and track deliveries",
      x: 820,
      y: 630,
      w: 300,
      h: 100
    },
    {
      id: "d5",
      type: "store",
      storeId: "D5",
      name: "Delivery batches",
      desc: "organized delivery routes",
      x: 820,
      y: 825,
      w: 300,
      h: 88
    },

    // Column 3 (Right Lane: P2, D2, P6)
    {
      id: "p2",
      type: "process",
      procId: "2.0",
      name: "Manage catalog",
      x: 1270,
      y: 260,
      w: 250,
      h: 92
    },
    {
      id: "d2",
      type: "store",
      storeId: "D2",
      name: "Products",
      desc: "product catalog",
      x: 1270,
      y: 445,
      w: 250,
      h: 88
    },
    {
      id: "p6",
      type: "process",
      procId: "6.0",
      name: "Generate reports",
      x: 1270,
      y: 825,
      w: 250,
      h: 92
    }
  ],

  flows: [
    // ----------------- PROCESS 1.0 FLOWS -----------------
    {
      id: "f_m_reg_1",
      source: "e_merchant",
      target: "p1",
      label: "registration details",
      path: "M 230 250 L 320 250 L 320 40 L 880 40 L 880 75",
      labelPos: { x: 490, y: 40 },
      stage: "boundary"
    },
    {
      id: "f_1_stat_m",
      source: "p1",
      target: "e_merchant",
      label: "account status",
      path: "M 840 145 L 750 145 L 750 195 L 290 195 L 290 280 L 230 280",
      labelPos: { x: 480, y: 195 },
      stage: "boundary"
    },
    {
      id: "f_1_d1",
      source: "p1",
      target: "d1",
      bidirectional: true,
      label: "user profiles / info",
      path: "M 840 115 L 660 115",
      labelPos: { x: 750, y: 45 },
      stage: "internal"
    },
    {
      id: "f_s_reg_1",
      source: "e_supplier",
      target: "p1",
      label: "registration & delivery settings",
      path: "M 1690 150 L 1580 150 L 1580 100 L 1100 100",
      labelPos: { x: 1380, y: 100 },
      stage: "boundary"
    },
    {
      id: "f_1_stat_s",
      source: "p1",
      target: "e_supplier",
      label: "account status",
      path: "M 1100 145 L 1610 145 L 1610 190 L 1690 190",
      labelPos: { x: 1380, y: 145 },
      stage: "boundary"
    },
    {
      id: "f_a_app_1",
      source: "e_admin",
      target: "p1",
      label: "user approvals",
      path: "M 1690 760 L 1650 760 L 1650 50 L 980 50 L 980 75",
      labelPos: { x: 1220, y: 50 },
      stage: "boundary"
    },
    {
      id: "f_1_pend_a",
      source: "p1",
      target: "e_admin",
      label: "pending registrations",
      path: "M 1030 75 L 1030 25 L 1670 25 L 1670 800 L 1690 800",
      labelPos: { x: 1480, y: 25 },
      stage: "boundary"
    },

    // ----------------- PROCESS 2.0 FLOWS -----------------
    {
      id: "f_s_cat_2",
      source: "e_supplier",
      target: "p2",
      label: "product catalog",
      path: "M 1690 280 L 1520 280",
      labelPos: { x: 1605, y: 260 },
      stage: "boundary"
    },
    {
      id: "f_2_d2",
      source: "p2",
      target: "d2",
      bidirectional: true,
      label: "catalog data / updates",
      path: "M 1395 352 L 1395 445",
      labelPos: { x: 1395, y: 400 },
      stage: "internal"
    },

    // ----------------- PROCESS 3.0 FLOWS -----------------
    {
      id: "f_m_stock_3",
      source: "e_merchant",
      target: "p3",
      label: "stock levels",
      path: "M 230 335 L 410 335",
      labelPos: { x: 320, y: 335 },
      stage: "boundary"
    },
    {
      id: "f_3_alert_m",
      source: "p3",
      target: "e_merchant",
      label: "low-stock alerts",
      path: "M 410 275 L 230 275",
      labelPos: { x: 320, y: 275 },
      stage: "boundary"
    },
    {
      id: "f_3_d3",
      source: "p3",
      target: "d3",
      bidirectional: true,
      label: "stock data / thresholds",
      path: "M 535 352 L 535 445",
      labelPos: { x: 535, y: 400 },
      stage: "internal"
    },

    // ----------------- PROCESS 4.0 FLOWS -----------------
    {
      id: "f_m_req_4",
      source: "e_merchant",
      target: "p4",
      label: "requests (restock / new product)",
      path: "M 230 380 L 350 380 L 350 230 L 780 230 L 780 280 L 840 280",
      labelPos: { x: 440, y: 230 },
      stage: "boundary"
    },
    {
      id: "f_s_dec_4",
      source: "e_supplier",
      target: "p4",
      label: "request decisions",
      path: "M 1690 350 L 1600 350 L 1600 230 L 1150 230 L 1150 280 L 1100 280",
      labelPos: { x: 1375, y: 230 },
      stage: "boundary"
    },
    {
      id: "f_d2_det_4",
      source: "d2",
      target: "p4",
      label: "product details",
      path: "M 1270 470 L 1180 470 L 1180 320 L 1100 320",
      labelPos: { x: 1180, y: 395 },
      stage: "internal"
    },
    {
      id: "f_4_stat_m",
      source: "p4",
      target: "e_merchant",
      label: "request status",
      path: "M 840 330 L 760 330 L 760 565 L 300 565 L 300 450 L 230 450",
      labelPos: { x: 530, y: 565 },
      stage: "boundary"
    },
    {
      id: "f_4_new_s",
      source: "p4",
      target: "e_supplier",
      label: "new requests",
      path: "M 1100 330 L 1160 330 L 1160 565 L 1620 565 L 1620 420 L 1690 420",
      labelPos: { x: 1390, y: 565 },
      stage: "boundary"
    },
    {
      id: "f_4_d4",
      source: "p4",
      target: "d4",
      bidirectional: true,
      label: "request records & updates",
      path: "M 970 352 L 970 445",
      labelPos: { x: 970, y: 400 },
      stage: "internal"
    },

    // ----------------- PROCESS 5.0 FLOWS -----------------
    {
      id: "f_d4_acc_5",
      source: "d4",
      target: "p5",
      label: "accepted requests",
      path: "M 970 533 L 970 630",
      labelPos: { x: 970, y: 580 },
      stage: "internal"
    },
    {
      id: "f_d1_loc_5",
      source: "d1",
      target: "p5",
      label: "locations & delivery settings",
      path: "M 660 145 L 760 145 L 760 655 L 820 655",
      labelPos: { x: 760, y: 210 },
      stage: "internal"
    },
    {
      id: "f_m_rec_5",
      source: "e_merchant",
      target: "p5",
      label: "receipt confirmation",
      path: "M 230 680 L 820 680",
      labelPos: { x: 520, y: 660 },
      stage: "boundary"
    },
    {
      id: "f_s_disp_5",
      source: "e_supplier",
      target: "p5",
      label: "dispatch confirmation",
      path: "M 1690 640 L 1540 640 L 1540 660 L 1120 660",
      labelPos: { x: 1390, y: 640 },
      stage: "boundary"
    },
    {
      id: "f_5_batch_s",
      source: "p5",
      target: "e_supplier",
      label: "delivery batches",
      path: "M 1120 705 L 1570 705 L 1570 500 L 1690 500",
      labelPos: { x: 1400, y: 705 },
      stage: "boundary"
    },
    {
      id: "f_5_stat_m",
      source: "p5",
      target: "e_merchant",
      label: "delivery status",
      path: "M 820 715 L 230 715",
      labelPos: { x: 520, y: 735 },
      stage: "boundary"
    },
    {
      id: "f_5_d5",
      source: "p5",
      target: "d5",
      label: "batches",
      path: "M 970 730 L 970 825",
      labelPos: { x: 970, y: 780 },
      stage: "internal"
    },
    {
      id: "f_5_d3",
      source: "p5",
      target: "d3",
      label: "stock update",
      path: "M 820 645 L 685 645 L 685 490 L 660 490",
      labelPos: { x: 745, y: 645 },
      stage: "internal"
    },

    // ----------------- PROCESS 6.0 FLOWS -----------------
    {
      id: "f_d4_rep_6",
      source: "d4",
      target: "p6",
      label: "request data",
      path: "M 1100 490 L 1200 490 L 1200 850 L 1270 850",
      labelPos: { x: 1200, y: 670 },
      stage: "internal"
    },
    {
      id: "f_d5_rep_6",
      source: "d5",
      target: "p6",
      label: "batch data",
      path: "M 1120 870 L 1270 870",
      labelPos: { x: 1195, y: 890 },
      stage: "internal"
    },
    {
      id: "f_6_rep_a",
      source: "p6",
      target: "e_admin",
      label: "reports",
      path: "M 1520 875 L 1690 875",
      labelPos: { x: 1605, y: 855 },
      stage: "boundary"
    }
  ]
};

// ============================================================================
// SCENARIO WALKTHROUGH STEPS (SLIDE 6)
// ============================================================================
export const walkthroughSteps = [
  {
    stepId: "a",
    letter: "A",
    title: "Stock Monitoring & Low-Stock Trigger",
    caption: "The merchant periodically reports stock levels to 3.0 Manage stock. When inventory drops below the reorder threshold stored in D3 Inventory, process 3.0 immediately returns a low-stock alert to the merchant.",
    activeNodes: ["e_merchant", "p3", "d3"],
    activeFlows: ["f_m_stock_3", "f_3_d3", "f_3_alert_m"],
    details: [
      "Merchant sends current inventory count to process 3.0",
      "Process 3.0 evaluates threshold limits against D3 Inventory",
      "Automatic low-stock alert dispatched back to Merchant"
    ]
  },
  {
    stepId: "b",
    letter: "B",
    title: "Merchant Request Creation & Supplier Notification",
    caption: "The merchant sends a restock or new-product request to 4.0 Handle requests. Process 4.0 validates product details against D2 Products, logs the pending order into D4 Requests, and pushes a new request notice to the supplier.",
    activeNodes: ["e_merchant", "p4", "d2", "d4", "e_supplier"],
    activeFlows: ["f_m_req_4", "f_d2_det_4", "f_4_d4", "f_4_new_s"],
    details: [
      "Merchant selects supplier and items to request",
      "Process 4.0 looks up D2 Products for verification",
      "Order logged in D4 Requests and routed to Supplier"
    ]
  },
  {
    stepId: "c",
    letter: "C",
    title: "Supplier Decision & Status Propagation",
    caption: "The supplier reviews the incoming request and submits an accept or reject decision back to 4.0. Process 4.0 updates the order record in D4 Requests and transmits real-time request status to the merchant.",
    activeNodes: ["e_supplier", "p4", "d4", "e_merchant"],
    activeFlows: ["f_s_dec_4", "f_4_d4", "f_4_stat_m"],
    details: [
      "Supplier reviews order capacity and decides (accept / reject)",
      "Process 4.0 records decision in D4 Requests",
      "Merchant receives immediate confirmation of request status"
    ]
  },
  {
    stepId: "d",
    letter: "D",
    title: "Automated Geographic Route Batching",
    caption: "5.0 Plan and track deliveries queries D4 for accepted requests and pulls merchant locations and supplier delivery settings from D1 Users and profiles. It groups nearby merchants on common routes, writes the trip to D5 Delivery batches, and sends delivery batches to the supplier.",
    activeNodes: ["d4", "d1", "p5", "d5", "e_supplier"],
    activeFlows: ["f_d4_acc_5", "f_d1_loc_5", "f_5_d5", "f_5_batch_s"],
    details: [
      "5.0 aggregates pending accepted orders from D4",
      "D1 provides merchant GPS/neighborhood locations & vehicle rules",
      "Grouped batch saved to D5 and sent to Supplier for packing"
    ]
  },
  {
    stepId: "e",
    letter: "E",
    title: "Dispatch Confirmation & In-Transit Tracking",
    caption: "The supplier loads the vehicle and submits dispatch confirmation to 5.0. Process 5.0 updates the delivery status, alerting all merchants along the route that their delivery is in transit (dispatched ASAP, not on fixed days).",
    activeNodes: ["e_supplier", "p5", "e_merchant"],
    activeFlows: ["f_s_disp_5", "f_5_stat_m"],
    details: [
      "Supplier confirms driver dispatch for the assigned route",
      "Process 5.0 updates delivery state to active / out-for-delivery",
      "Merchants receive real-time delivery status updates"
    ]
  },
  {
    stepId: "f",
    letter: "F",
    title: "Delivery Receipt & Stock Reconciliation",
    caption: "Upon physical arrival and verification of goods, the merchant sends a receipt confirmation to 5.0. Process 5.0 triggers an automated stock update to D3 Inventory, completing the ordering lifecycle.",
    activeNodes: ["e_merchant", "p5", "d3"],
    activeFlows: ["f_m_rec_5", "f_5_d3"],
    details: [
      "Merchant checks delivery contents and confirms receipt",
      "Process 5.0 initiates stock update flow",
      "D3 Inventory levels incremented to reflect restocked goods"
    ]
  }
];
