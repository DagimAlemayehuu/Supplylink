// Complete Data Flow Diagram definitions for SupplyLink (Red Noir Wide-Angle Master Edition)
// Notation: Gane & Sarson
// Entities: plain rectangle
// Processes: rounded rectangle with ID box at top
// Data stores: open-ended rectangle with ID box on the left

export const contextDiagramData = {
  viewBox: "0 0 1920 1080",
  nodes: [
    {
      id: "p0",
      type: "process",
      procId: "0",
      name: "SupplyLink System",
      category: "system",
      x: 740,
      y: 350,
      w: 440,
      h: 320,
      description: "Central software platform coordinating on-demand requests, route batching, and inventory monitoring"
    },
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      subtitle: "Source & Sink",
      x: 40,
      y: 280,
      w: 230,
      h: 460,
      description: "Dispatches stock levels & requests; receives deliveries & alerts"
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      subtitle: "Source & Sink",
      x: 1650,
      y: 280,
      w: 230,
      h: 460,
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
      h: 180,
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
      path: "M 270 430 L 740 430",
      labelPos: { x: 505, y: 310 }
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
      path: "M 740 590 L 270 590",
      labelPos: { x: 505, y: 710 }
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
      path: "M 1650 430 L 1180 430",
      labelPos: { x: 1415, y: 310 }
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
      path: "M 1180 590 L 1650 590",
      labelPos: { x: 1415, y: 710 }
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
      path: "M 890 240 L 890 350",
      labelPos: { x: 740, y: 295 }
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
      path: "M 1030 350 L 1030 240",
      labelPos: { x: 1180, y: 295 }
    }
  ]
};

export const level0DiagramData = {
  viewBox: "0 0 1920 1080",
  nodes: [
    // External Entities (Left & Right Margins)
    {
      id: "e_merchant",
      type: "entity",
      name: "Merchant",
      subtitle: "Source & Sink",
      x: 30,
      y: 220,
      w: 180,
      h: 640
    },
    {
      id: "e_supplier",
      type: "entity",
      name: "Supplier",
      subtitle: "Source & Sink",
      x: 1710,
      y: 120,
      w: 180,
      h: 560
    },
    {
      id: "e_admin",
      type: "entity",
      name: "Admin",
      subtitle: "Source & Sink",
      x: 1710,
      y: 760,
      w: 180,
      h: 220
    },

    // Column 1 (Left Lane: D1, P3, D3)
    {
      id: "d1",
      type: "store",
      storeId: "D1",
      name: "Users and profiles",
      desc: "locations, delivery settings",
      x: 460,
      y: 60,
      w: 260,
      h: 90
    },
    {
      id: "p3",
      type: "process",
      procId: "3.0",
      name: "Manage stock",
      x: 460,
      y: 260,
      w: 260,
      h: 95
    },
    {
      id: "d3",
      type: "store",
      storeId: "D3",
      name: "Inventory",
      desc: "merchant inventory",
      x: 460,
      y: 440,
      w: 260,
      h: 90
    },

    // Column 2 (Center Lane: P1, P4, D4, P5, D5)
    {
      id: "p1",
      type: "process",
      procId: "1.0",
      name: "Manage users and profiles",
      x: 830,
      y: 60,
      w: 260,
      h: 95
    },
    {
      id: "p4",
      type: "process",
      procId: "4.0",
      name: "Handle requests",
      x: 830,
      y: 260,
      w: 260,
      h: 95
    },
    {
      id: "d4",
      type: "store",
      storeId: "D4",
      name: "Requests",
      desc: "restock & product orders",
      x: 830,
      y: 440,
      w: 260,
      h: 90
    },
    {
      id: "p5",
      type: "process",
      procId: "5.0",
      name: "Plan and track deliveries",
      x: 810,
      y: 630,
      w: 300,
      h: 105
    },
    {
      id: "d5",
      type: "store",
      storeId: "D5",
      name: "Delivery batches",
      desc: "organized delivery routes",
      x: 810,
      y: 830,
      w: 300,
      h: 90
    },

    // Column 3 (Right Lane: P2, D2, P6)
    {
      id: "p2",
      type: "process",
      procId: "2.0",
      name: "Manage catalog",
      x: 1200,
      y: 260,
      w: 260,
      h: 95
    },
    {
      id: "d2",
      type: "store",
      storeId: "D2",
      name: "Products",
      desc: "product catalog",
      x: 1200,
      y: 440,
      w: 260,
      h: 90
    },
    {
      id: "p6",
      type: "process",
      procId: "6.0",
      name: "Generate reports",
      x: 1200,
      y: 830,
      w: 260,
      h: 95
    }
  ],

  flows: [
    // ----------------- PROCESS 1.0 FLOWS -----------------
    {
      id: "f_m_reg_1",
      source: "e_merchant",
      target: "p1",
      label: "registration details",
      path: "M 210 250 L 260 250 L 260 30 L 880 30 L 880 60",
      labelPos: { x: 570, y: 22 },
      stage: "boundary"
    },
    {
      id: "f_s_reg_1",
      source: "e_supplier",
      target: "p1",
      label: "registration & delivery settings",
      path: "M 1710 150 L 1520 150 L 1520 90 L 1090 90",
      labelPos: { x: 1350, y: 75 },
      stage: "boundary"
    },
    {
      id: "f_a_app_1",
      source: "e_admin",
      target: "p1",
      label: "user approvals",
      path: "M 1710 780 L 1670 780 L 1670 45 L 960 45 L 960 60",
      labelPos: { x: 1315, y: 35 },
      stage: "boundary"
    },
    {
      id: "f_1_pend_a",
      source: "p1",
      target: "e_admin",
      label: "pending registrations",
      path: "M 1030 60 L 1030 18 L 1690 18 L 1690 810 L 1710 810",
      labelPos: { x: 1360, y: 12 },
      stage: "boundary"
    },
    {
      id: "f_1_stat_m",
      source: "p1",
      target: "e_merchant",
      label: "account status",
      path: "M 830 130 L 760 130 L 760 195 L 250 195 L 250 280 L 210 280",
      labelPos: { x: 480, y: 182 },
      stage: "boundary"
    },
    {
      id: "f_1_stat_s",
      source: "p1",
      target: "e_supplier",
      label: "account status",
      path: "M 1090 130 L 1560 130 L 1560 190 L 1710 190",
      labelPos: { x: 1350, y: 145 },
      stage: "boundary"
    },
    {
      id: "f_1_d1",
      source: "p1",
      target: "d1",
      bidirectional: true,
      label: "user profiles / info",
      path: "M 830 105 L 720 105",
      labelPos: { x: 775, y: 88 },
      stage: "internal"
    },

    // ----------------- PROCESS 2.0 FLOWS -----------------
    {
      id: "f_s_cat_2",
      source: "e_supplier",
      target: "p2",
      label: "product catalog",
      path: "M 1710 240 L 1460 240",
      labelPos: { x: 1585, y: 220 },
      stage: "boundary"
    },
    {
      id: "f_2_d2",
      source: "p2",
      target: "d2",
      bidirectional: true,
      label: "catalog data / updates",
      path: "M 1330 355 L 1330 440",
      labelPos: { x: 1330, y: 398 },
      stage: "internal"
    },

    // ----------------- PROCESS 3.0 FLOWS -----------------
    {
      id: "f_m_stock_3",
      source: "e_merchant",
      target: "p3",
      label: "stock levels",
      path: "M 210 330 L 460 330",
      labelPos: { x: 335, y: 312 },
      stage: "boundary"
    },
    {
      id: "f_3_alert_m",
      source: "p3",
      target: "e_merchant",
      label: "low-stock alerts",
      path: "M 460 280 L 210 280",
      labelPos: { x: 335, y: 262 },
      stage: "boundary"
    },
    {
      id: "f_3_d3",
      source: "p3",
      target: "d3",
      bidirectional: true,
      label: "stock data / thresholds",
      path: "M 590 355 L 590 440",
      labelPos: { x: 590, y: 398 },
      stage: "internal"
    },

    // ----------------- PROCESS 4.0 FLOWS -----------------
    {
      id: "f_m_req_4",
      source: "e_merchant",
      target: "p4",
      label: "requests (restock / new product)",
      path: "M 210 370 L 310 370 L 310 230 L 790 230 L 790 290 L 830 290",
      labelPos: { x: 550, y: 215 },
      stage: "boundary"
    },
    {
      id: "f_s_dec_4",
      source: "e_supplier",
      target: "p4",
      label: "request decisions",
      path: "M 1710 360 L 1580 360 L 1580 230 L 1130 230 L 1130 290 L 1090 290",
      labelPos: { x: 1355, y: 215 },
      stage: "boundary"
    },
    {
      id: "f_d2_det_4",
      source: "d2",
      target: "p4",
      label: "product details",
      path: "M 1200 460 L 1150 460 L 1150 320 L 1090 320",
      labelPos: { x: 1150, y: 390 },
      stage: "internal"
    },
    {
      id: "f_4_stat_m",
      source: "p4",
      target: "e_merchant",
      label: "request status",
      path: "M 830 330 L 770 330 L 770 560 L 290 560 L 290 450 L 210 450",
      labelPos: { x: 530, y: 575 },
      stage: "boundary"
    },
    {
      id: "f_4_new_s",
      source: "p4",
      target: "e_supplier",
      label: "new requests",
      path: "M 1090 330 L 1150 330 L 1150 560 L 1600 560 L 1600 420 L 1710 420",
      labelPos: { x: 1375, y: 575 },
      stage: "boundary"
    },
    {
      id: "f_4_d4",
      source: "p4",
      target: "d4",
      bidirectional: true,
      label: "request records & updates",
      path: "M 960 355 L 960 440",
      labelPos: { x: 960, y: 398 },
      stage: "internal"
    },

    // ----------------- PROCESS 5.0 FLOWS -----------------
    {
      id: "f_d4_acc_5",
      source: "d4",
      target: "p5",
      label: "accepted requests",
      path: "M 960 530 L 960 630",
      labelPos: { x: 960, y: 580 },
      stage: "internal"
    },
    {
      id: "f_d1_loc_5",
      source: "d1",
      target: "p5",
      label: "locations & delivery settings",
      path: "M 720 135 L 750 135 L 750 650 L 810 650",
      labelPos: { x: 750, y: 390 },
      stage: "internal"
    },
    {
      id: "f_m_rec_5",
      source: "e_merchant",
      target: "p5",
      label: "receipt confirmation",
      path: "M 210 680 L 810 680",
      labelPos: { x: 510, y: 662 },
      stage: "boundary"
    },
    {
      id: "f_s_disp_5",
      source: "e_supplier",
      target: "p5",
      label: "dispatch confirmation",
      path: "M 1710 630 L 1520 630 L 1520 660 L 1110 660",
      labelPos: { x: 1375, y: 642 },
      stage: "boundary"
    },
    {
      id: "f_5_batch_s",
      source: "p5",
      target: "e_supplier",
      label: "delivery batches",
      path: "M 1110 700 L 1560 700 L 1560 500 L 1710 500",
      labelPos: { x: 1410, y: 685 },
      stage: "boundary"
    },
    {
      id: "f_5_stat_m",
      source: "p5",
      target: "e_merchant",
      label: "delivery status",
      path: "M 810 715 L 210 715",
      labelPos: { x: 510, y: 735 },
      stage: "boundary"
    },
    {
      id: "f_5_d5",
      source: "p5",
      target: "d5",
      label: "batches",
      path: "M 960 735 L 960 830",
      labelPos: { x: 960, y: 782 },
      stage: "internal"
    },
    {
      id: "f_5_d3",
      source: "p5",
      target: "d3",
      label: "stock update",
      path: "M 810 640 L 735 640 L 735 490 L 720 490",
      labelPos: { x: 735, y: 575 },
      stage: "internal"
    },

    // ----------------- PROCESS 6.0 FLOWS -----------------
    {
      id: "f_d4_rep_6",
      source: "d4",
      target: "p6",
      label: "request data",
      path: "M 1090 490 L 1160 490 L 1160 850 L 1200 850",
      labelPos: { x: 1160, y: 675 },
      stage: "internal"
    },
    {
      id: "f_d5_rep_6",
      source: "d5",
      target: "p6",
      label: "batch data",
      path: "M 1110 890 L 1200 890",
      labelPos: { x: 1155, y: 872 },
      stage: "internal"
    },
    {
      id: "f_6_rep_a",
      source: "p6",
      target: "e_admin",
      label: "reports",
      path: "M 1460 875 L 1710 875",
      labelPos: { x: 1585, y: 855 },
      stage: "boundary"
    }
  ]
};

// Scenario steps for Walkthrough Slide (Slide 6)
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
