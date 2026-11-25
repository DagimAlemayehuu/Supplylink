// Conceptual Entity-Relationship Diagram (ERD) Specifications for SupplyLink
// Compact 1800x1160 layout for maximum projector legibility and zero broken lines.

export const erdDiagramData = {
  viewBox: "0 0 1800 1160",
  entities: [
    {
      id: "ent_admin",
      name: "ADMIN",
      x: 750,
      y: 20,
      w: 300,
      h: 200,
      pk: "Admin ID",
      isAssociative: false,
      attributes: ["Full Name", "Email Address", "System Role", "Created Date"]
    },
    {
      id: "ent_merchant",
      name: "MERCHANT",
      x: 20,
      y: 280,
      w: 300,
      h: 260,
      pk: "Merchant ID",
      isAssociative: false,
      attributes: [
        "Business Name",
        "Contact Phone",
        "Street Address",
        "Neighborhood",
        "Account Status"
      ]
    },
    {
      id: "ent_inventory",
      name: "INVENTORY",
      x: 520,
      y: 295,
      w: 300,
      h: 230,
      pk: "Inventory ID",
      isAssociative: false,
      attributes: [
        "Current Stock",
        "Reorder Threshold",
        "Last Restocked At",
        "Stock Audit Date"
      ]
    },
    {
      id: "ent_product",
      name: "PRODUCT",
      x: 1020,
      y: 285,
      w: 300,
      h: 250,
      pk: "Product ID",
      isAssociative: false,
      attributes: [
        "Product Name",
        "Category",
        "Description",
        "Wholesale Price",
        "Packaging Unit"
      ]
    },
    {
      id: "ent_supplier",
      name: "SUPPLIER",
      x: 1480,
      y: 280,
      w: 300,
      h: 260,
      pk: "Supplier ID",
      isAssociative: false,
      attributes: [
        "Company Name",
        "Dispatch Phone",
        "Warehouse Address",
        "Operating Hours",
        "Max Route Capacity"
      ]
    },
    {
      id: "ent_request",
      name: "REQUEST",
      x: 20,
      y: 740,
      w: 310,
      h: 280,
      pk: "Request ID",
      isAssociative: false,
      attributes: [
        "Request Type",
        "Order Status",
        "Decision Remarks",
        "Drop-off Sequence",
        "Order Timestamp",
        "Delivery Confirmed"
      ]
    },
    {
      id: "ent_request_item",
      name: "REQUEST ITEM",
      x: 745,
      y: 760,
      w: 310,
      h: 210,
      pk: "Request Item ID",
      isAssociative: true,
      attributes: [
        "Quantity Requested",
        "Unit Quoted Price",
        "Handling Notes"
      ]
    },
    {
      id: "ent_delivery_batch",
      name: "DELIVERY BATCH",
      x: 1470,
      y: 740,
      w: 310,
      h: 280,
      pk: "Batch ID",
      isAssociative: false,
      attributes: [
        "Batch Code",
        "Route Status",
        "Vehicle Identifier",
        "Driver Contact",
        "Dispatched At",
        "Completed At"
      ]
    }
  ],
  relationships: [
    // 1. ADMIN approves MERCHANT (1 : 0..N)
    {
      id: "rel_admin_merchant",
      name: "approves",
      diamond: { x: 450, y: 120, w: 155, h: 66 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 710, y: 100 },
      card2Pos: { x: 210, y: 245 },
      path: "M 750 120 L 170 120 L 170 280"
    },
    // 2. ADMIN approves SUPPLIER (1 : 0..N)
    {
      id: "rel_admin_supplier",
      name: "approves",
      diamond: { x: 1350, y: 120, w: 155, h: 66 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 1090, y: 100 },
      card2Pos: { x: 1590, y: 245 },
      path: "M 1050 120 L 1630 120 L 1630 280"
    },
    // 3. MERCHANT tracks INVENTORY (1 : 0..N)
    {
      id: "rel_merchant_inventory",
      name: "tracks",
      diamond: { x: 420, y: 410, w: 130, h: 60 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 342, y: 380 },
      card2Pos: { x: 496, y: 380 },
      path: "M 320 410 L 520 410"
    },
    // 4. PRODUCT stocked in INVENTORY (1 : 0..N)
    {
      id: "rel_product_inventory",
      name: "stocked in",
      diamond: { x: 920, y: 410, w: 150, h: 60 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 998, y: 380 },
      card2Pos: { x: 844, y: 380 },
      path: "M 1020 410 L 820 410"
    },
    // 5. SUPPLIER supplies PRODUCT (1 : 0..N)
    {
      id: "rel_supplier_product",
      name: "supplies",
      diamond: { x: 1400, y: 410, w: 130, h: 60 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 1458, y: 380 },
      card2Pos: { x: 1344, y: 380 },
      path: "M 1480 410 L 1320 410"
    },
    // 6. MERCHANT places REQUEST (1 : 0..N)
    {
      id: "rel_merchant_request",
      name: "places",
      diamond: { x: 170, y: 640, w: 145, h: 62 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 210, y: 568 },
      card2Pos: { x: 210, y: 712 },
      path: "M 170 540 L 170 740"
    },
    // 7. REQUEST contains REQUEST ITEM (1 : 1..N)
    {
      id: "rel_request_item",
      name: "contains",
      diamond: { x: 538, y: 865, w: 155, h: 64 },
      card1: "1",
      card2: "1..N",
      card1Pos: { x: 362, y: 836 },
      card2Pos: { x: 712, y: 836 },
      path: "M 330 865 L 745 865"
    },
    // 8. PRODUCT ordered in REQUEST ITEM (1 : 0..N)
    {
      id: "rel_product_item",
      name: "ordered in",
      diamond: { x: 1035, y: 640, w: 165, h: 64 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 1210, y: 565 },
      card2Pos: { x: 940, y: 730 },
      path: "M 1170 535 L 1170 640 L 900 640 L 900 760"
    },
    // 9. SUPPLIER dispatches DELIVERY BATCH (1 : 0..N)
    {
      id: "rel_supplier_batch",
      name: "dispatches",
      diamond: { x: 1630, y: 640, w: 165, h: 64 },
      card1: "1",
      card2: "0..N",
      card1Pos: { x: 1670, y: 568 },
      card2Pos: { x: 1670, y: 712 },
      path: "M 1630 540 L 1630 740"
    },
    // 10. DELIVERY BATCH consolidates REQUEST (0..1 : 1..N) - Clean bottom route
    {
      id: "rel_batch_request",
      name: "consolidates",
      diamond: { x: 900, y: 1100, w: 185, h: 66 },
      card1: "0..1",
      card2: "1..N",
      card1Pos: { x: 1582, y: 1052 },
      card2Pos: { x: 218, y: 1052 },
      path: "M 1625 1020 L 1625 1100 L 175 1100 L 175 1020"
    }
  ]
};

export const erdPhases = [];
