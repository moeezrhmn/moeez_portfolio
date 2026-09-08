/**
 * The catalogue sync pipeline, drawn. Fills and strokes live in globals.css
 * (the .d-* classes) so the diagram follows the theme rather than hardcoding
 * a palette into the markup.
 */
export function SyncDiagram() {
  return (
    <div className="overflow-x-auto border border-line p-6 sm:p-10 bg-void">
      <svg
        className="min-w-[820px] w-full"
        viewBox="0 0 920 400"
        role="img"
        aria-label="Shopify webhooks feed a sync engine, which enqueues deltas to a worker queue that persists to MySQL, pushes batched updates to eBay, and routes repeated failures to a dead letter queue for human review."
      >
        <defs>
          <marker id="ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="d-arrow" />
          </marker>
          <marker id="ad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="d-arrow-x" />
          </marker>
        </defs>

        <path d="M200 91 H375" className="d-path flow" markerEnd="url(#ab)" />
        <path d="M595 91 H720" className="d-path flow" markerEnd="url(#ab)" />
        <path d="M485 142 V220" className="d-path flow" markerEnd="url(#ab)" />
        <path d="M385 252 H280" className="d-path flow" markerEnd="url(#ab)" />
        <path d="M585 252 H720" className="d-path-x" markerEnd="url(#ad)" />

        <text x="287" y="80" className="d-lbl" fontSize="11" textAnchor="middle">product.update</text>
        <text x="657" y="80" className="d-lbl" fontSize="11" textAnchor="middle">REST, batched</text>
        <text x="497" y="188" className="d-lbl" fontSize="11">enqueue delta</text>
        <text x="332" y="242" className="d-lbl" fontSize="11" textAnchor="middle">persist</text>
        <text x="652" y="242" className="d-sub" fontSize="11" textAnchor="middle">on 3x fail</text>

        <rect x="30" y="58" width="170" height="66" className="d-node" />
        <text x="115" y="86" className="d-txt" fontSize="13" textAnchor="middle">SHOPIFY</text>
        <text x="115" y="105" className="d-sub" fontSize="10.5" textAnchor="middle">source of truth</text>

        <rect x="375" y="40" width="220" height="102" className="d-engine" />
        <text x="485" y="76" className="d-acc" fontSize="14" textAnchor="middle">SYNC ENGINE</text>
        <text x="485" y="98" className="d-lbl" fontSize="10.5" textAnchor="middle">diff, map, idempotent write</text>
        <text x="485" y="116" className="d-sub" fontSize="10.5" textAnchor="middle">Laravel, later Python</text>

        <rect x="720" y="58" width="170" height="66" className="d-node" />
        <text x="805" y="86" className="d-txt" fontSize="13" textAnchor="middle">EBAY</text>
        <text x="805" y="105" className="d-sub" fontSize="10.5" textAnchor="middle">300k+ listings</text>

        <rect x="385" y="220" width="200" height="64" className="d-node" />
        <text x="485" y="247" className="d-txt" fontSize="13" textAnchor="middle">WORKER QUEUE</text>
        <text x="485" y="266" className="d-sub" fontSize="10.5" textAnchor="middle">retry, backoff</text>

        <path d="M100 234 h180 v40 a90 12 0 0 1 -180 0 z" className="d-node" />
        <ellipse cx="190" cy="234" rx="90" ry="12" className="d-node" />
        <text x="190" y="262" className="d-txt" fontSize="12.5" textAnchor="middle">MySQL</text>

        <rect x="720" y="224" width="170" height="56" className="d-dead" />
        <text x="805" y="248" className="d-lbl" fontSize="12" textAnchor="middle">DEAD LETTER</text>
        <text x="805" y="266" className="d-sub" fontSize="10.5" textAnchor="middle">human review</text>

        <path d="M30 344 H890" className="d-dim" markerStart="url(#ab)" markerEnd="url(#ab)" />
        <path d="M30 332 V356 M890 332 V356" className="d-dim" />
        <rect x="352" y="332" width="216" height="24" className="d-mask" />
        <text x="460" y="349" className="d-acc" fontSize="11" textAnchor="middle">0 MANUAL STEPS REMAIN</text>
      </svg>
    </div>
  );
}
