// Configuration for SupplyLink Presentation
// Red Noir Edition — System Analysis and Design

export const presentationConfig = {
  title: "SupplyLink",
  subtitle: "Supplier-Merchant Ordering and Delivery Platform",
  highlightLine: "Merchants request. Suppliers deliver in organized routes.",
  course: "System Analysis and Design",
  courseCode: "SE-302",
  department: "Department of Computer Science",
  school: "HiLCoE School of Computer Science and Technology",
  notation: "Gane and Sarson DFD Notation",

  // Core problem and solution statements
  problemStatement: "Suppliers waste valuable time and fuel visiting random merchants on speculative sales trips, while merchants constantly suffer stockouts because they have no reliable, structured channel to request stock.",
  solutionStatement: "A direct web platform connecting suppliers with merchants. Merchants dispatch restock or new-product requests on demand. Suppliers review and accept orders, which are automatically grouped by geographic proximity into organized delivery routes for rapid dispatch.",

  // External entities summary
  entities: [
    {
      name: "Merchant",
      role: "Source & Sink",
      sourceRole: "Sends registration details, stock levels, restock/new-product requests, and receipt confirmation.",
      sinkRole: "Receives account status, automated low-stock alerts, real-time request status, and delivery status."
    },
    {
      name: "Supplier",
      role: "Source & Sink",
      sourceRole: "Submits registration & delivery settings, updates product catalog, issues request decisions, and confirms dispatch.",
      sinkRole: "Receives account status, incoming merchant requests, and organized delivery batches grouped by route."
    },
    {
      name: "Admin",
      role: "Source & Sink",
      sourceRole: "Submits user approval decisions for onboarding merchants and suppliers.",
      sinkRole: "Receives pending user registrations and system-wide operational/batch reports."
    }
  ]
};
