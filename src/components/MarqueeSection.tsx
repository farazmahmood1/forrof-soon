import { memo, useEffect, useRef, useState } from "react";

const marqueeItems: { text: string; filled: boolean }[] = [
  { text: "AI Products", filled: true },
  { text: "SaaS Platforms", filled: false },
  { text: "Google Ads", filled: true },
  { text: "Business Systems", filled: false },
  { text: "Meta Ads", filled: true },
  { text: "Automation", filled: false },
  { text: "Internal Tools", filled: true },
  { text: "Email Marketing", filled: false },
  { text: "AI Integrations", filled: true },
  { text: "LinkedIn Outreach", filled: false },
  { text: "Product Engineering", filled: true },
  { text: "Paid Search", filled: false },
  { text: "Platform Architecture", filled: true },
  { text: "PPC Campaigns", filled: false },
  { text: "System Design", filled: true },
  { text: "Lead Generation", filled: false },
  { text: "Technical Strategy", filled: true },
  { text: "Scalable Software", filled: false },
  { text: "Conversion Optimization", filled: true },
  { text: "Data Platforms", filled: false },
  { text: "Workflow Automation", filled: true },
  { text: "ROAS Tracking", filled: false },
  { text: "AI/ML Development", filled: true },
  { text: "SEO", filled: false },
  { text: "Enterprise Software", filled: true },
  { text: "MVP Development", filled: false },
  { text: "Mobile Apps", filled: true },
  { text: "Branding & UI/UX", filled: false },
  { text: "Social Media Marketing", filled: true },
  { text: "Cloud Infrastructure", filled: false },
  { text: "DevOps & CI/CD", filled: true },
  { text: "API Development", filled: false },
  { text: "LLM Agents", filled: true },
  { text: "TikTok Ads", filled: false },
  { text: "RAG Systems", filled: true },
  { text: "React Native", filled: false },
  { text: "Full-Stack Apps", filled: true },
  { text: "CTO-as-a-Service", filled: false },
  { text: "Growth Strategy", filled: true },
];

const reversedItems = [...marqueeItems].reverse();

export const MarqueeSection = memo(() => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
  <section ref={ref} className={`py-8 overflow-hidden relative${visible ? "" : " marquee-paused"}`} style={{ contain: "layout style paint" }}>
    {/* Row 1 - forward */}
    <div className="mq-wrap mb-3 pb-3">
      <div className="mq-track-fwd" aria-hidden>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0 pr-8">
            <span
              className={`${item.filled ? "mq-filled" : "mq-outline"} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter whitespace-nowrap italic`}
            >
              {item.text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full mq-dot shrink-0" />
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 - reverse */}
    <div className="mq-wrap pb-3">
      <div className="mq-track-rev" aria-hidden>
        {[...reversedItems, ...reversedItems].map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0 pr-8">
            <span
              className={`${item.filled ? "mq-filled" : "mq-outline"} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter whitespace-nowrap italic`}
            >
              {item.text}
            </span>
            <span
              className="shrink-0 w-2 h-2 rotate-45 mq-dot"
              style={{ borderRadius: 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
});
MarqueeSection.displayName = "MarqueeSection";
