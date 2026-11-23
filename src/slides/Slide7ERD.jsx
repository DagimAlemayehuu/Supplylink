import React, { useState } from 'react';
import Slide from '../components/Slide';
import { Database, ShieldCheck, Layers, GitBranch, Key, Check } from 'lucide-react';

/**
 * Slide 7: Entity-Relationship Diagram (Industrial Noir Edition)
 * Complete 3NF relational data model derived directly from Gane & Sarson DFD data stores D1–D5.
 * Strictly normalized: zero repeating groups, zero derived attributes, and explicit cardinalities.
 */
export default function Slide7ERD({ currentStep = 0 }) {
  const [selectedStage, setSelectedStage] = useState(currentStep);

  React.useEffect(() => {
    setSelectedStage(currentStep);
  }, [currentStep]);

  const stages = [
    { id: 0, title: "Complete Schema", desc: "Full 3NF Entity-Relationship Model (All 8 Entities)" },
    { id: 1, title: "Identity & Profiles (D1)", desc: "User Base & Subtype Profiles (Merchant, Supplier)" },
    { id: 2, title: "Catalog & Stock (D2, D3)", desc: "Supplier Catalog Products & Merchant Inventory" },
    { id: 3, title: "Orders & Routes (D4, D5)", desc: "Replenishment Requests, Items & Delivery Batches" }
  ];

  // Highlight filters for each stage
  const stageHighlights = {
    0: {
      nodes: ["e_user", "e_merchant", "e_supplier", "e_product", "e_inventory", "e_request", "e_request_item", "e_delivery_batch"],
      flows: ["rel_u_m", "rel_u_s", "rel_u_u", "rel_s_p", "rel_m_i", "rel_p_i", "rel_m_r", "rel_s_r", "rel_r_ri", "rel_p_ri", "rel_s_db", "rel_db_r"]
    },
    1: {
      nodes: ["e_user", "e_merchant", "e_supplier"],
      flows: ["rel_u_m", "rel_u_s", "rel_u_u"]
    },
    2: {
      nodes: ["e_supplier", "e_product", "e_inventory", "e_merchant"],
      flows: ["rel_s_p", "rel_m_i", "rel_p_i"]
    },
    3: {
      nodes: ["e_merchant", "e_supplier", "e_request", "e_request_item", "e_product", "e_delivery_batch"],
      flows: ["rel_m_r", "rel_s_r", "rel_r_ri", "rel_p_ri", "rel_s_db", "rel_db_r"]
    }
  };

  const activeHighlight = stageHighlights[selectedStage] || stageHighlights[0];
  const activeCaption = stages[Math.min(selectedStage, stages.length - 1)];

  return (
    <Slide>
      <div className="flex flex-col h-full justify-between pb-1 relative">
        {/* Floating Stage Selector (Top-Right) */}
        <div className="absolute top-3 right-4 z-20 pointer-events-auto flex items-center gap-1.5 bg-[#101216]/90 backdrop-blur-md border border-white/10 p-1 rounded-lg shadow-industrial-sm">
          {stages.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStage(st.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold transition-all font-headline ${
                selectedStage === st.id
                  ? 'bg-[#dc2626] text-white shadow-industrial-sm'
                  : 'text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className={`w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-mono font-bold ${
                selectedStage === st.id ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-300'
              }`}>
                0{st.id + 1}
              </span>
              <span className="hidden xl:inline">{st.title.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Full-bleed SVG Canvas Container */}
        <div className="flex-1 w-full bg-[#0c0d12] rounded-xl border border-white/10 shadow-industrial-lg relative overflow-hidden flex items-center justify-center p-2">
          <svg
            viewBox="0 0 1920 1020"
            className="w-full h-full select-none"
            style={{ overflow: 'visible' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Crow's Foot Arrowhead (N - Zero or More / One or More) */}
              <marker
                id="erd-crow-foot"
                viewBox="0 0 12 12"
                refX="10"
                refY="6"
                markerWidth="10"
                markerHeight="10"
                orient="auto"
              >
                <path d="M 0 1 L 10 6 L 0 11 M 10 1 L 10 11" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              </marker>

              {/* Active Crow's Foot */}
              <marker
                id="erd-crow-foot-active"
                viewBox="0 0 12 12"
                refX="10"
                refY="6"
                markerWidth="10"
                markerHeight="10"
                orient="auto"
              >
                <path d="M 0 1 L 10 6 L 0 11 M 10 1 L 10 11" fill="none" stroke="#dc2626" strokeWidth="2" />
              </marker>

              {/* Exactly One Marker (||) */}
              <marker
                id="erd-one"
                viewBox="0 0 10 12"
                refX="2"
                refY="6"
                markerWidth="8"
                markerHeight="10"
                orient="auto"
              >
                <path d="M 3 1 L 3 11 M 7 1 L 7 11" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              </marker>

              {/* Zero or One Marker (o|) */}
              <marker
                id="erd-zero-one"
                viewBox="0 0 12 12"
                refX="2"
                refY="6"
                markerWidth="10"
                markerHeight="10"
                orient="auto"
              >
                <circle cx="4" cy="6" r="3" fill="#101216" stroke="#94a3b8" strokeWidth="1.5" />
                <path d="M 9 1 L 9 11" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              </marker>
            </defs>

            {/* ============================================================= */}
            {/* 1. RELATIONSHIP PATHS LAYER (BEHIND ENTITY BOXES)              */}
            {/* ============================================================= */}
            <g id="erd-relationships">
              {/* Rel 1: User -> Merchant (1 : 0..1) */}
              <RelationshipPath
                id="rel_u_m"
                d="M 230 295 L 230 355"
                label="specializes (1:0..1)"
                labelPos={{ x: 230, y: 325 }}
                isActive={activeHighlight.flows.includes("rel_u_m")}
                isDimmed={!activeHighlight.flows.includes("rel_u_m")}
              />

              {/* Rel 2: User -> Supplier (1 : 0..1) - Top Corridor Bypass */}
              <RelationshipPath
                id="rel_u_s"
                d="M 400 65 L 750 65 L 750 20 L 1170 20 L 1170 65 L 1520 65"
                label="specializes (1:0..1)"
                labelPos={{ x: 960, y: 20 }}
                isActive={activeHighlight.flows.includes("rel_u_s")}
                isDimmed={!activeHighlight.flows.includes("rel_u_s")}
              />

              {/* Rel 3: User -> User (0..1 : 0..N) - Self-referencing Admin Approval */}
              <RelationshipPath
                id="rel_u_u"
                d="M 60 140 L 22 140 L 22 210 L 60 210"
                label="approves (admin)"
                labelPos={{ x: 22, y: 175 }}
                badgeWidth={120}
                isActive={activeHighlight.flows.includes("rel_u_u")}
                isDimmed={!activeHighlight.flows.includes("rel_u_u")}
              />

              {/* Rel 4: Merchant -> Inventory (1 : 0..N) */}
              <RelationshipPath
                id="rel_m_i"
                d="M 230 610 L 230 670"
                label="tracks stock (1:N)"
                labelPos={{ x: 230, y: 640 }}
                isActive={activeHighlight.flows.includes("rel_m_i")}
                isDimmed={!activeHighlight.flows.includes("rel_m_i")}
              />

              {/* Rel 5: Merchant -> Request (1 : 0..N) */}
              <RelationshipPath
                id="rel_m_r"
                d="M 400 410 L 590 410 L 590 170 L 780 170"
                label="places orders (1:N)"
                labelPos={{ x: 590, y: 290 }}
                isActive={activeHighlight.flows.includes("rel_m_r")}
                isDimmed={!activeHighlight.flows.includes("rel_m_r")}
              />

              {/* Rel 6: Supplier -> Product (1 : 0..N) */}
              <RelationshipPath
                id="rel_s_p"
                d="M 1690 295 L 1690 355"
                label="supplies (1:N)"
                labelPos={{ x: 1690, y: 325 }}
                isActive={activeHighlight.flows.includes("rel_s_p")}
                isDimmed={!activeHighlight.flows.includes("rel_s_p")}
              />

              {/* Rel 7: Supplier -> Request (1 : 0..N) */}
              <RelationshipPath
                id="rel_s_r"
                d="M 1520 150 L 1140 150"
                label="fulfills (1:N)"
                labelPos={{ x: 1330, y: 150 }}
                isActive={activeHighlight.flows.includes("rel_s_r")}
                isDimmed={!activeHighlight.flows.includes("rel_s_r")}
              />

              {/* Rel 8: Supplier -> DeliveryBatch (1 : 0..N) */}
              <RelationshipPath
                id="rel_s_db"
                d="M 1520 220 L 1450 220 L 1450 635 L 1190 635 L 1190 740 L 1135 740"
                label="operates fleet (1:N)"
                labelPos={{ x: 1320, y: 635 }}
                isActive={activeHighlight.flows.includes("rel_s_db")}
                isDimmed={!activeHighlight.flows.includes("rel_s_db")}
              />

              {/* Rel 9: Request -> RequestItem (1 : 1..N) */}
              <RelationshipPath
                id="rel_r_ri"
                d="M 960 315 L 960 375"
                label="contains items (1:1..N)"
                labelPos={{ x: 960, y: 345 }}
                isActive={activeHighlight.flows.includes("rel_r_ri")}
                isDimmed={!activeHighlight.flows.includes("rel_r_ri")}
              />

              {/* Rel 10: Product -> RequestItem (1 : 0..N) */}
              <RelationshipPath
                id="rel_p_ri"
                d="M 1520 470 L 1125 470"
                label="ordered as (1:N)"
                labelPos={{ x: 1320, y: 470 }}
                isActive={activeHighlight.flows.includes("rel_p_ri")}
                isDimmed={!activeHighlight.flows.includes("rel_p_ri")}
              />

              {/* Rel 11: DeliveryBatch -> Request (0..1 : 1..N) - Left Bypass */}
              <RelationshipPath
                id="rel_db_r"
                d="M 860 670 L 860 625 L 730 625 L 730 250 L 780 250"
                label="consolidates (0..1:N)"
                labelPos={{ x: 730, y: 440 }}
                isActive={activeHighlight.flows.includes("rel_db_r")}
                isDimmed={!activeHighlight.flows.includes("rel_db_r")}
              />

              {/* Rel 12: Product -> Inventory (1 : 0..N) - Bottom Corridor */}
              <RelationshipPath
                id="rel_p_i"
                d="M 1590 615 L 1590 650 L 450 650 L 450 780 L 400 780"
                label="stocked under (1:N)"
                labelPos={{ x: 535, y: 650 }}
                isActive={activeHighlight.flows.includes("rel_p_i")}
                isDimmed={!activeHighlight.flows.includes("rel_p_i")}
              />
            </g>

            {/* ============================================================= */}
            {/* 2. ENTITY BOXES LAYER (HIGH-CONTRAST INDUSTRIAL NOIR)         */}
            {/* ============================================================= */}
            <g id="erd-entities">
              {/* 1. USER (D1 Base Authentication) */}
              <EntityBox
                id="e_user"
                title="User"
                tag="D1: Store / Auth Base"
                accentColor="#38bdf8"
                badgeBg="#082f49"
                x={60}
                y={40}
                w={340}
                h={255}
                isActive={activeHighlight.nodes.includes("e_user")}
                isDimmed={!activeHighlight.nodes.includes("e_user")}
                attributes={[
                  { key: "PK", name: "user_id", type: "INT", isPk: true },
                  { key: "FK", name: "approved_by_id", type: "INT (NULL -> User)", isFk: true },
                  { key: "UK", name: "email", type: "VARCHAR(255)", isUk: true },
                  { key: "", name: "password_hash", type: "VARCHAR(255)" },
                  { key: "", name: "role", type: "ENUM ('MERCHANT', ...)" },
                  { key: "", name: "account_status", type: "ENUM ('PENDING', ...)" },
                  { key: "", name: "approved_at", type: "DATETIME (NULL)" },
                  { key: "", name: "created_at", type: "DATETIME" }
                ]}
              />

              {/* 2. MERCHANT (D1 Subtype Profile) */}
              <EntityBox
                id="e_merchant"
                title="Merchant"
                tag="D1: Store / Profile Subtype"
                accentColor="#38bdf8"
                badgeBg="#082f49"
                x={60}
                y={355}
                w={340}
                h={255}
                isActive={activeHighlight.nodes.includes("e_merchant")}
                isDimmed={!activeHighlight.nodes.includes("e_merchant")}
                attributes={[
                  { key: "PK", name: "merchant_id", type: "INT", isPk: true },
                  { key: "FK", name: "user_id", type: "INT (UK -> User)", isFk: true, isUk: true },
                  { key: "", name: "business_name", type: "VARCHAR(150)" },
                  { key: "", name: "contact_phone", type: "VARCHAR(30)" },
                  { key: "", name: "address", type: "VARCHAR(255)" },
                  { key: "", name: "latitude", type: "DECIMAL(10, 7)" },
                  { key: "", name: "longitude", type: "DECIMAL(10, 7)" },
                  { key: "", name: "neighborhood", type: "VARCHAR(100)" }
                ]}
              />

              {/* 3. INVENTORY (D3 Merchant Inventory Junction) */}
              <EntityBox
                id="e_inventory"
                title="Inventory"
                tag="D3: Store / M:N Junction"
                accentColor="#f59e0b"
                badgeBg="#451a03"
                x={60}
                y={670}
                w={340}
                h={235}
                isActive={activeHighlight.nodes.includes("e_inventory")}
                isDimmed={!activeHighlight.nodes.includes("e_inventory")}
                attributes={[
                  { key: "PK", name: "inventory_id", type: "INT", isPk: true },
                  { key: "FK", name: "merchant_id", type: "INT (-> Merchant)", isFk: true },
                  { key: "FK", name: "product_id", type: "INT (-> Product)", isFk: true },
                  { key: "", name: "current_stock", type: "INT (DEFAULT 0)" },
                  { key: "", name: "reorder_threshold", type: "INT (DEFAULT 10)" },
                  { key: "", name: "last_restocked_at", type: "DATETIME (NULL)" },
                  { key: "", name: "updated_at", type: "DATETIME" }
                ]}
              />

              {/* 4. REQUEST (D4 Requests Header) */}
              <EntityBox
                id="e_request"
                title="Request"
                tag="D4: Store / Order Header"
                accentColor="#ef4444"
                badgeBg="#450a0a"
                x={780}
                y={40}
                w={360}
                h={275}
                isActive={activeHighlight.nodes.includes("e_request")}
                isDimmed={!activeHighlight.nodes.includes("e_request")}
                attributes={[
                  { key: "PK", name: "request_id", type: "INT", isPk: true },
                  { key: "FK", name: "merchant_id", type: "INT (-> Merchant)", isFk: true },
                  { key: "FK", name: "supplier_id", type: "INT (-> Supplier)", isFk: true },
                  { key: "FK", name: "batch_id", type: "INT (NULL -> DeliveryBatch)", isFk: true },
                  { key: "", name: "request_type", type: "ENUM ('RESTOCK', 'NEW')" },
                  { key: "", name: "status", type: "ENUM ('PENDING', 'ACCEPTED', ...)" },
                  { key: "", name: "decision_notes", type: "TEXT (NULL)" },
                  { key: "", name: "stop_sequence", type: "INT (NULL, Route Drop)" },
                  { key: "", name: "requested_at", type: "DATETIME" }
                ]}
              />

              {/* 5. REQUEST_ITEM (D4 3NF Line Item Decomposition) */}
              <EntityBox
                id="e_request_item"
                title="RequestItem"
                tag="D4: 3NF / Order Line Items"
                accentColor="#ef4444"
                badgeBg="#450a0a"
                x={795}
                y={375}
                w={330}
                h={210}
                isActive={activeHighlight.nodes.includes("e_request_item")}
                isDimmed={!activeHighlight.nodes.includes("e_request_item")}
                attributes={[
                  { key: "PK", name: "request_item_id", type: "INT", isPk: true },
                  { key: "FK", name: "request_id", type: "INT (-> Request)", isFk: true },
                  { key: "FK", name: "product_id", type: "INT (-> Product)", isFk: true },
                  { key: "", name: "quantity_requested", type: "INT (> 0)" },
                  { key: "", name: "notes", type: "VARCHAR(255) (NULL)" }
                ]}
              />

              {/* 6. DELIVERY_BATCH (D5 Delivery Batches / Routes) */}
              <EntityBox
                id="e_delivery_batch"
                title="DeliveryBatch"
                tag="D5: Store / Route Logistics"
                accentColor="#a855f7"
                badgeBg="#3b0764"
                x={785}
                y={670}
                w={350}
                h={235}
                isActive={activeHighlight.nodes.includes("e_delivery_batch")}
                isDimmed={!activeHighlight.nodes.includes("e_delivery_batch")}
                attributes={[
                  { key: "PK", name: "batch_id", type: "INT", isPk: true },
                  { key: "FK", name: "supplier_id", type: "INT (-> Supplier)", isFk: true },
                  { key: "UK", name: "batch_code", type: "VARCHAR(50)", isUk: true },
                  { key: "", name: "route_status", type: "ENUM ('PLANNED', 'DISPATCHED', ...)" },
                  { key: "", name: "vehicle_identifier", type: "VARCHAR(100)" },
                  { key: "", name: "dispatched_at", type: "DATETIME (NULL)" },
                  { key: "", name: "completed_at", type: "DATETIME (NULL)" },
                  { key: "", name: "created_at", type: "DATETIME" }
                ]}
              />

              {/* 7. SUPPLIER (D1 Subtype Profile) */}
              <EntityBox
                id="e_supplier"
                title="Supplier"
                tag="D1: Store / Profile Subtype"
                accentColor="#38bdf8"
                badgeBg="#082f49"
                x={1520}
                y={40}
                w={340}
                h={255}
                isActive={activeHighlight.nodes.includes("e_supplier")}
                isDimmed={!activeHighlight.nodes.includes("e_supplier")}
                attributes={[
                  { key: "PK", name: "supplier_id", type: "INT", isPk: true },
                  { key: "FK", name: "user_id", type: "INT (UK -> User)", isFk: true, isUk: true },
                  { key: "", name: "company_name", type: "VARCHAR(150)" },
                  { key: "", name: "contact_phone", type: "VARCHAR(30)" },
                  { key: "", name: "warehouse_address", type: "VARCHAR(255)" },
                  { key: "", name: "operating_hours", type: "VARCHAR(100)" },
                  { key: "", name: "max_route_capacity", type: "INT" }
                ]}
              />

              {/* 8. PRODUCT (D2 Products Catalog) */}
              <EntityBox
                id="e_product"
                title="Product"
                tag="D2: Store / Product Catalog"
                accentColor="#f59e0b"
                badgeBg="#451a03"
                x={1520}
                y={355}
                w={340}
                h={260}
                isActive={activeHighlight.nodes.includes("e_product")}
                isDimmed={!activeHighlight.nodes.includes("e_product")}
                attributes={[
                  { key: "PK", name: "product_id", type: "INT", isPk: true },
                  { key: "FK", name: "supplier_id", type: "INT (-> Supplier)", isFk: true },
                  { key: "", name: "name", type: "VARCHAR(150)" },
                  { key: "", name: "category", type: "VARCHAR(80)" },
                  { key: "", name: "description", type: "TEXT" },
                  { key: "", name: "unit_price", type: "DECIMAL(10, 2)" },
                  { key: "", name: "unit_of_measure", type: "VARCHAR(30)" },
                  { key: "", name: "is_active", type: "BOOLEAN (DEFAULT TRUE)" }
                ]}
              />

              {/* 9. ERD NOTATION & SUBSYSTEM LEGEND (BOTTOM-RIGHT) */}
              <g transform="translate(1220, 740)">
                <rect
                  x="0"
                  y="0"
                  width="640"
                  height="165"
                  rx="10"
                  fill="#101216"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1.5"
                />
                {/* Header */}
                <rect x="0" y="0" width="640" height="38" rx="10" fill="#181b24" />
                <path d="M 0 38 L 640 38" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <text x="20" y="24" className="font-headline font-bold fill-white text-[14px]">
                  ERD Cardinality & Subsystem Architecture Legend
                </text>

                {/* Subsystems */}
                <g transform="translate(20, 52)">
                  <text x="0" y="14" className="font-mono text-[11px] font-bold fill-zinc-400">SUBSYSTEM DOMAINS:</text>
                  <circle cx="6" cy="35" r="5" fill="#38bdf8" />
                  <text x="18" y="39" className="font-inter text-[12px] fill-zinc-200 font-medium">Identity & Profiles (D1: User, Merchant, Supplier)</text>

                  <circle cx="6" cy="60" r="5" fill="#f59e0b" />
                  <text x="18" y="64" className="font-inter text-[12px] fill-zinc-200 font-medium">Catalog & Stock (D2: Products, D3: Inventory Junction)</text>

                  <circle cx="6" cy="85" r="5" fill="#ef4444" />
                  <text x="18" y="89" className="font-inter text-[12px] fill-zinc-200 font-medium">Fulfillment & Routes (D4: Requests/Items, D5: Batches)</text>
                </g>

                {/* Cardinality & Constraints */}
                <g transform="translate(360, 52)">
                  <text x="0" y="14" className="font-mono text-[11px] font-bold fill-zinc-400">KEYS & CARDINALITIES:</text>

                  <g transform="translate(0, 26)">
                    <rect x="0" y="0" width="28" height="16" rx="3" fill="#ef4444" />
                    <text x="14" y="12" textAnchor="middle" className="font-mono text-[10px] font-bold fill-white">PK</text>
                    <text x="36" y="12" className="font-inter text-[12px] fill-zinc-300">Primary Key</text>

                    <rect x="120" y="0" width="28" height="16" rx="3" fill="#0284c7" />
                    <text x="134" y="12" textAnchor="middle" className="font-mono text-[10px] font-bold fill-white">FK</text>
                    <text x="156" y="12" className="font-inter text-[12px] fill-zinc-300">Foreign Key</text>
                  </g>

                  <g transform="translate(0, 52)">
                    <text x="0" y="14" className="font-mono text-[12px] font-bold fill-red-400">1 : N</text>
                    <text x="40" y="14" className="font-inter text-[12px] fill-zinc-300">One-to-Many Crow's Foot</text>
                  </g>
                  <g transform="translate(0, 75)">
                    <text x="0" y="14" className="font-mono text-[12px] font-bold fill-sky-400">1 : 0..1</text>
                    <text x="54" y="14" className="font-inter text-[12px] fill-zinc-300">Subtype Specialization</text>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </Slide>
  );
}

/**
 * High-precision Entity Box component matching Industrial Noir aesthetic.
 */
function EntityBox({
  title,
  tag,
  accentColor,
  badgeBg,
  x,
  y,
  w,
  h,
  attributes = [],
  isActive = true,
  isDimmed = false
}) {
  const headerHeight = 36;
  const rowHeight = 25;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={`transition-opacity duration-200 ${isDimmed ? 'opacity-25' : 'opacity-100'}`}
    >
      {/* Active Focus Halo */}
      {isActive && (
        <rect
          x="-3"
          y="-3"
          width={w + 6}
          height={h + 6}
          rx="10"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      )}

      {/* Main Container */}
      <rect
        x="0"
        y="0"
        width={w}
        height={h}
        rx="8"
        fill="#0f1117"
        stroke={isActive ? accentColor : 'rgba(255, 255, 255, 0.12)'}
        strokeWidth={isActive ? '2' : '1.5'}
      />

      {/* Header Bar */}
      <rect
        x="0"
        y="0"
        width={w}
        height={headerHeight}
        rx="8"
        fill={badgeBg}
      />
      <rect
        x="0"
        y={headerHeight - 8}
        width={w}
        height="8"
        fill={badgeBg}
      />
      <line
        x1="0"
        y1={headerHeight}
        x2={w}
        y2={headerHeight}
        stroke={accentColor}
        strokeWidth="1.5"
      />

      {/* Entity Title */}
      <text
        x="14"
        y="23"
        className="font-headline font-bold fill-white select-none text-[15px]"
        letterSpacing="0.02em"
      >
        {title}
      </text>

      {/* DFD Mapping Pill */}
      <g transform={`translate(${w - 14}, 22)`}>
        <text
          x="0"
          y="0"
          textAnchor="end"
          className="font-mono font-bold select-none text-[10px]"
          fill={accentColor}
        >
          {tag}
        </text>
      </g>

      {/* Attributes List */}
      <g transform={`translate(0, ${headerHeight + 6})`}>
        {attributes.map((attr, idx) => {
          const rowY = idx * rowHeight;
          const isKey = attr.isPk || attr.isFk || attr.isUk;

          return (
            <g key={idx} transform={`translate(0, ${rowY})`}>
              {/* Zebra line divider */}
              {idx > 0 && (
                <line
                  x1="8"
                  y1="0"
                  x2={w - 8}
                  y2="0"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
              )}

              {/* Key Badge */}
              {attr.isPk && (
                <rect x="12" y="4" width="22" height="15" rx="3" fill="#dc2626" />
              )}
              {attr.isFk && !attr.isPk && (
                <rect x="12" y="4" width="22" height="15" rx="3" fill="#0284c7" />
              )}
              {attr.isUk && !attr.isPk && !attr.isFk && (
                <rect x="12" y="4" width="22" height="15" rx="3" fill="#059669" />
              )}

              {isKey && (
                <text
                  x="23"
                  y="15"
                  textAnchor="middle"
                  className="font-mono text-[9px] font-bold fill-white select-none"
                >
                  {attr.key}
                </text>
              )}

              {/* Attribute Name */}
              <text
                x={isKey ? 42 : 16}
                y="15"
                className={`font-mono text-[12px] select-none ${
                  attr.isPk ? 'font-bold fill-red-200' : attr.isFk ? 'font-semibold fill-sky-200' : 'fill-zinc-200'
                }`}
              >
                {attr.name}
              </text>

              {/* Attribute Type / Constraint */}
              <text
                x={w - 14}
                y="15"
                textAnchor="end"
                className="font-mono text-[10.5px] fill-zinc-400 select-none"
              >
                {attr.type}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
}

/**
 * High-visibility Relationship Path with Crow's Foot markers and center label badge.
 */
function RelationshipPath({
  id,
  d,
  label,
  labelPos,
  badgeWidth = 140,
  isActive = true,
  isDimmed = false
}) {
  const badgeHeight = 24;

  return (
    <g
      id={id}
      className={`transition-opacity duration-200 ${isDimmed ? 'opacity-20' : 'opacity-100'}`}
    >
      {/* Connection Path Line */}
      <path
        d={d}
        fill="none"
        stroke={isActive ? '#dc2626' : '#64748b'}
        strokeWidth={isActive ? '2.5' : '1.5'}
        strokeDasharray={isActive ? 'none' : 'none'}
        markerEnd={isActive ? 'url(#erd-crow-foot-active)' : 'url(#erd-crow-foot)'}
      />

      {/* Floating Relationship Verb + Cardinality Badge */}
      {labelPos && (
        <g transform={`translate(${labelPos.x}, ${labelPos.y})`}>
          <rect
            x={-badgeWidth / 2}
            y={-badgeHeight / 2}
            width={badgeWidth}
            height={badgeHeight}
            rx="5"
            fill="#12151e"
            stroke={isActive ? '#dc2626' : 'rgba(255, 255, 255, 0.2)'}
            strokeWidth={isActive ? '2' : '1'}
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            className={`font-mono text-[11px] font-bold select-none ${
              isActive ? 'fill-red-200' : 'fill-zinc-300'
            }`}
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}
