// Synced Split-Screen Phases (Left: Level 0 DFD | Right: Conceptual ERD)
// Full unclipped diagrams in both panes; click either pane to zoom it huge into the center spotlight.

export const splitPhases = [
  {
    id: 0,
    code: "01",
    title: "ACTOR GOVERNANCE & ONBOARDING",
    subtitle: "D1 User Accounts transforms into Admin, Merchant, and Supplier entities",
    dfdNodes: ["e_merchant", "e_supplier", "e_admin", "p1", "d1"],
    dfdFlows: [
      "f_m_reg_1",
      "f_s_reg_1",
      "f_a_app_1",
      "f_1_pend_a",
      "f_1_stat_m",
      "f_1_stat_s",
      "f_1_d1"
    ],
    erdEntities: ["ent_admin", "ent_merchant", "ent_supplier"],
    erdRelationships: ["rel_admin_merchant", "rel_admin_supplier"],
    flowLabel: "AUTHORIZATION FLOW",
    flowSteps: ["ADMIN", "➔", "MERCHANT & SUPPLIER"]
  },
  {
    id: 1,
    code: "02",
    title: "CATALOG & LOCAL INVENTORY",
    subtitle: "D2 Product Catalog & D3 Inventory Records map to Product and Inventory entities",
    dfdNodes: ["e_supplier", "p2", "d2", "e_merchant", "p3", "d3"],
    dfdFlows: [
      "f_s_cat_2",
      "f_2_d2",
      "f_m_stock_3",
      "f_3_alert_m",
      "f_3_d3"
    ],
    erdEntities: ["ent_supplier", "ent_product", "ent_inventory", "ent_merchant"],
    erdRelationships: ["rel_supplier_product", "rel_product_inventory", "rel_merchant_inventory"],
    flowLabel: "CATALOG & STOCK FLOW",
    flowSteps: ["SUPPLIER", "➔", "PRODUCT", "➔", "INVENTORY", "➔", "MERCHANT"]
  },
  {
    id: 2,
    code: "03",
    title: "DEMAND ORDERS & M:N RESOLUTION",
    subtitle: "D4 Customer Orders decomposes into Request and Request Item associative entity",
    dfdNodes: ["e_merchant", "p4", "d2", "d4", "e_supplier"],
    dfdFlows: [
      "f_m_req_4",
      "f_d2_det_4",
      "f_4_new_s",
      "f_s_dec_4",
      "f_4_stat_m",
      "f_4_d4"
    ],
    erdEntities: ["ent_merchant", "ent_request", "ent_request_item", "ent_product"],
    erdRelationships: ["rel_merchant_request", "rel_request_item", "rel_product_item"],
    flowLabel: "ORDER DEMAND FLOW",
    flowSteps: ["MERCHANT", "➔", "REQUEST", "➔", "REQUEST ITEM", "➔", "PRODUCT"]
  },
  {
    id: 3,
    code: "04",
    title: "ROUTE BATCHING & FULFILLMENT",
    subtitle: "D5 Delivery Routes transforms into Delivery Batch consolidating accepted Requests",
    dfdNodes: ["d1", "d4", "p5", "d5", "d3", "p6", "e_supplier", "e_merchant", "e_admin"],
    dfdFlows: [
      "f_d4_acc_5",
      "f_d1_loc_5",
      "f_s_disp_5",
      "f_5_stat_m",
      "f_5_bat_s",
      "f_5_d5",
      "f_m_rec_5",
      "f_5_d3_stock",
      "f_d5_rep_6",
      "f_6_rep_a"
    ],
    erdEntities: ["ent_supplier", "ent_delivery_batch", "ent_request"],
    erdRelationships: ["rel_supplier_batch", "rel_batch_request"],
    flowLabel: "ROUTE BATCHING FLOW",
    flowSteps: ["REQUEST", "➔", "DELIVERY BATCH", "➔", "SUPPLIER"]
  },
  {
    id: 4,
    code: "05",
    title: "COMPLETE SYSTEM ARCHITECTURE",
    subtitle: "Full 100% balanced mapping from Level 0 DFD to Conceptual ER Diagram",
    dfdNodes: null,
    dfdFlows: null,
    erdEntities: [
      "ent_admin",
      "ent_merchant",
      "ent_supplier",
      "ent_inventory",
      "ent_product",
      "ent_request",
      "ent_request_item",
      "ent_delivery_batch"
    ],
    erdRelationships: [
      "rel_admin_merchant",
      "rel_admin_supplier",
      "rel_merchant_inventory",
      "rel_product_inventory",
      "rel_supplier_product",
      "rel_merchant_request",
      "rel_request_item",
      "rel_product_item",
      "rel_supplier_batch",
      "rel_batch_request"
    ],
    flowLabel: "END-TO-END CYCLE",
    flowSteps: ["MERCHANT", "➔", "REQUEST", "➔", "DELIVERY BATCH", "➔", "SUPPLIER"]
  }
];
