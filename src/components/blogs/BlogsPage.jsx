import { Timeline } from "@/components/ui/timeline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealLine({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "105%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}


function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-black tracking-[0.2em] uppercase text-[#f55d1b] border border-[#f55d1b]/30 bg-[#f55d1b]/10">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-6 h-px bg-[#f55d1b]" />
      <span className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-[#f55d1b]">
        {children}
      </span>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function GridCard({ title, body }) {
  return (
    <div className="p-4 rounded-xl border border-white/[0.07] bg-[#000435] hover:border-[#f55d1b]/40 transition-colors duration-300 group">
      <h5 className="font-primary font-black text-sm uppercase text-[#f55d1b] mb-2 group-hover:text-[#f55d1b] transition-colors">
        {title}
      </h5>
      <p className="font-sans text-[13px] text-neutral-400 leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function PillList({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.025] font-sans text-xs text-neutral-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Callout({ headline, paras = [], quote = null }) {
  return (
    <div
      className="mt-8 rounded-2xl p-6 border border-[#f55d1b]/30 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#f55d1b14 0%,transparent 65%)" }}
    >
      <h3 className="font-primary font-black text-lg text-white uppercase mb-3">
        {headline}
      </h3>
      {paras.map((p, i) => (
        <p key={i} className="font-sans text-[14.5px] text-neutral-300 leading-relaxed mb-3 last:mb-0">
          {p}
        </p>
      ))}
      {quote && (
        <p
          className="mt-4 pt-4 font-serif italic text-base font-bold border-t border-[#f55d1b]/25"
          style={{ color: "#f55d1b" }}
        >
          {quote}
        </p>
      )}
    </div>
  );
}

function BlogHeroImg({ src, alt, caption }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl group mb-6">
      <img
        src={src}
        alt={alt}
        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between">
        <span className="font-mono text-[10px] font-bold text-[#f55d1b] tracking-widest uppercase">
          {caption}
        </span>
      </div>
    </div>
  );
}

const timelineData = [
  {
    title: "01",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>INFRASTRUCTURE 2026 · 6 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 1: The Future of Infrastructure Construction in India: 6 Trends Shaping 2026
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-1-future-infra.webp"
          alt="Future of Infrastructure Construction India 2026"
          caption="FIG 1.0 — HIGH-SPEED RAIL & EXPRESSWAYS"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              India's infrastructure landscape is undergoing a significant transformation. With continued development across highways, railways, urban infrastructure, industrial facilities and large-scale construction projects, the focus is shifting from simply building faster to building smarter, safer and more sustainably.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              Technology, digitalisation, sustainability and improved project execution are increasingly influencing how infrastructure projects are planned and delivered. Recent industry reports point to growing adoption of BIM, AI, drones, digital monitoring and data-driven project management across major infrastructure projects
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <SectionLabel>6 Key Trends</SectionLabel>
          <div className="space-y-4">
            {[
              {
                n: "01", t: "Digitalisation of Construction",
                b: "Construction is becoming increasingly data-driven. Digital project management platforms, BIM, drone surveys and real-time monitoring are helping project teams improve visibility, coordination and decision-making.",
                b2: "BIM, in particular, is increasingly being adopted for design coordination, clash detection and project planning, especially on large infrastructure projects.",
              },
              {
                n: "02", t: "AI in Project Planning and Execution",
                b: "Artificial intelligence is moving beyond experimentation. Construction companies are exploring AI for planning, scheduling, resource optimisation, risk identification, progress monitoring and predictive decision-making.",
                b2: "The objective is simple: identify potential issues earlier and make project execution more predictable.",
              },
              {
                n: "03", t: "Sustainable Construction",
                b: "Environmental responsibility is becoming an integral part of infrastructure development. Efficient resource utilisation, responsible material management, waste reduction and the use of sustainable construction practices are increasingly important considerations.",
              },
              {
                n: "04", t: "Faster Construction Methods",
                b: "Prefabrication, modular construction and improved construction methodologies are helping contractors reduce on-site time while improving consistency and productivity.",
              },
              {
                n: "05", t: "Greater Focus on Quality and Safety",
                b: "As infrastructure projects become larger and more complex, quality assurance and safety are becoming increasingly important. The recent focus on independent inspection of highway and expressway projects highlights the growing emphasis on construction quality and long-term asset performance.",
              },
              {
                n: "06", t: "Integrated Project Execution",
                b: "Modern infrastructure projects require closer coordination between civil, structural, architectural, MEP, material supply and specialist contractors. Integrated execution can help reduce coordination gaps, rework and delays.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4">
                <span className="mt-0.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-black text-[#f55d1b] border border-[#f55d1b]/40 bg-[#f55d1b]/10">
                  {item.n}
                </span>
                <div>
                  <h4 className="font-primary font-black text-sm text-white uppercase mb-1">{item.t}</h4>
                  <p className="font-sans text-[13.5px] text-neutral-400 leading-relaxed">{item.b}</p>
                  {item.b2 && <p className="font-sans text-[13.5px] text-neutral-400 leading-relaxed mt-1.5">{item.b2}</p>}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <Callout
          headline="Building the Infrastructure of Tomorrow"
          paras={[
            "The future of infrastructure construction will belong to organisations that combine technical expertise, modern technology, disciplined execution and responsible construction practices.",
            "At Trion, our capabilities across civil construction, infrastructure development, excavation, crushing, aggregate supply, building construction and related services enable us to support projects from groundwork to completion.",
          ]}
          quote="The future of construction is not just about building more. It is about building better."
        />
      </div>
    ),
  },
  {
    title: "02",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>AI & INTELLIGENCE · 5 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 2: AI in Construction: How Technology Is Transforming Project Planning & Execution
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-2-ai-construction.webp"
          alt="AI in Construction Project Planning and Execution"
          caption="FIG 2.0 — COMPUTER VISION & REAL-TIME DATA"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              Artificial intelligence is changing the way industries plan, execute and manage complex operations, and construction is no exception.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              India's infrastructure sector is increasingly exploring AI across project planning, design, procurement, construction and operations. Industry analysis indicates that AI can support productivity improvements by enabling faster, data-driven decision-making.
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <SectionLabel>Where Can AI Make a Difference?</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <GridCard title="Project Planning" body="AI can analyse historical project data, timelines and resource requirements to identify potential risks and improve planning." />
            <GridCard title="Progress Monitoring" body="AI-powered systems can analyse site images, drone footage and project data to provide better visibility into construction progress." />
            <GridCard title="Resource Optimisation" body="Equipment, labour and material utilisation can be analysed to identify inefficiencies and improve resource allocation." />
            <GridCard title="Risk Management" body="AI can help identify patterns associated with potential delays, cost overruns and operational risks." />
            <GridCard title="Quality Control" body="Computer vision and digital monitoring can support the identification of construction inconsistencies and quality issues." />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Card className="space-y-3">
            <h4 className="font-primary font-black text-base text-white uppercase">AI + BIM + Real-Time Data</h4>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">
              The real opportunity lies not in using AI as a standalone technology, but in connecting it with BIM, project management platforms, IoT, drone surveys and field data.
            </p>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">
              This creates a more connected project environment where information can move from the site to decision-makers faster. India's infrastructure sector is already moving towards more integrated digital workflows, although adoption remains uneven.
            </p>
          </Card>
        </FadeUp>

        <Callout
          headline="What This Means for Construction Companies"
          paras={[
            "Technology will not replace engineering expertise or on-site experience. Instead, it can give project teams better information to make faster and more informed decisions.",
            "For infrastructure companies, the future lies in combining people, engineering expertise, equipment and digital intelligence.",
          ]}
          quote="Smart construction isn't about replacing experience. It's about making experience more powerful with data."
        />
      </div>
    ),
  },
  {
    title: "03",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>ESG & DURABILITY · 5 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 3: Sustainable Infrastructure: Building for Performance, Not Just Completion
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-3-sustainable-infra.webp"
          alt="Sustainable Infrastructure Building for Performance"
          caption="FIG 3.0 — LIFECYCLE ESG & CIRCULAR MATERIALS"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              Infrastructure has a long lifecycle. A road, building, industrial facility or railway asset may serve communities for decades. That makes the way it is designed, constructed and maintained just as important as the final structure itself.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              Sustainable infrastructure is therefore moving beyond environmental compliance to become a broader approach focused on resource efficiency, durability, operational performance and responsible construction.
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <SectionLabel>What Does Sustainable Construction Mean?</SectionLabel>
          <p className="font-sans text-[13px] text-neutral-500 mb-2">Sustainable construction can involve:</p>
          <PillList items={[
            "Efficient use of construction materials",
            "Responsible management of aggregates and natural resources",
            "Reduction of construction waste",
            "Efficient equipment and energy utilisation",
            "Recycling and reuse wherever practical",
            "Better construction planning to minimise rework",
            "Long-term durability and maintainability",
          ]} />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-4">
            <Card>
              <h4 className="font-primary font-black text-sm text-[#f55d1b] uppercase mb-2">Why Material Management Matters</h4>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Materials form a significant part of infrastructure construction. Efficient sourcing, processing, transportation and utilisation of materials can contribute to better project efficiency while reducing unnecessary waste.</p>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed mt-2">This is particularly relevant for projects involving aggregates, crushing, earthwork and large-scale civil construction.</p>
            </Card>
            <Card>
              <h4 className="font-primary font-black text-sm text-[#f55d1b] uppercase mb-2">Sustainability Meets Technology</h4>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Digital technologies can also support sustainable construction by improving planning and reducing inefficiencies.</p>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed mt-2">BIM, digital monitoring, drones and data analytics can improve coordination and help project teams identify issues earlier.</p>
            </Card>
          </div>
        </FadeUp>

        <Callout
          headline="Building for the Long Term"
          paras={[
            "The true measure of infrastructure is not simply whether it is completed on schedule. It is how effectively it performs over its lifecycle.",
            "That means sustainable infrastructure must consider quality, durability, safety, resource efficiency and environmental responsibility together.",
            "At Trion, responsible execution is integral to our approach to civil construction, infrastructure, mining, crushing and building projects.",
          ]}
        />
      </div>
    ),
  },
  {
    title: "04",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>5D DIGITAL TWIN · 6 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 4: BIM in Civil Construction: From Digital Design to Better Project Execution
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-4-bim-civil.webp"
          alt="BIM in Civil Construction Digital Design to Better Execution"
          caption="FIG 4.0 — 5D DIGITAL TWIN & CLASH COORDINATION"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              Construction projects involve multiple disciplines, teams and stakeholders. When design, engineering and execution are not properly coordinated, even small discrepancies can lead to rework, delays and additional costs.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              This is where Building Information Modelling, or BIM, is becoming increasingly valuable.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              BIM creates a digital representation of a project and enables different stakeholders to collaborate around a common information environment. The technology is increasingly being used across major infrastructure projects in India.
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <SectionLabel>How BIM Supports Construction</SectionLabel>
          <div className="space-y-3">
            <GridCard title="Better Design Coordination" body="Civil, structural, architectural and MEP teams can coordinate their designs within a common digital environment." />
            <GridCard title="Early Clash Detection" body="Potential conflicts between systems can be identified before they reach the construction site." />
            <GridCard title="Improved Planning" body="Teams can visualise construction sequences and better understand how different activities interact." />
            <GridCard title="Reduced Rework" body="Identifying design and coordination issues earlier can reduce avoidable changes during execution." />
            <GridCard title="Better Project Visibility" body="A connected digital model can provide project stakeholders with greater visibility into project information." />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Card className="space-y-3">
            <h4 className="font-primary font-black text-base text-white uppercase">BIM Beyond 3D</h4>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">BIM is increasingly evolving beyond three-dimensional visualisation.</p>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">When integrated with scheduling and cost information, it can support 4D planning and 5D cost management, creating a more comprehensive approach to project delivery.</p>
          </Card>
        </FadeUp>

        <Callout
          headline="The Road Ahead"
          paras={[
            "India's infrastructure sector is gradually moving towards greater digitalisation, with BIM, drones, digital twins and real-time monitoring becoming increasingly relevant to large projects.",
            "For construction companies, the opportunity is to combine digital tools with strong engineering and execution capabilities.",
          ]}
          quote="The best digital model is one that ultimately leads to better construction on the ground."
        />
      </div>
    ),
  },
  {
    title: "05",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>MATERIAL SCIENCE · 5 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 5: Why Quality Aggregates Matter in Infrastructure Construction
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-5-quality-aggregates.webp"
          alt="Why Quality Aggregates Matter in Infrastructure Construction"
          caption="FIG 5.0 — MULTI-DECK SCREENING & HIGH-YIELD SUPPLY"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              Aggregates may appear to be one of the simplest components of construction, but they play a fundamental role in the strength, stability and performance of infrastructure.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              From roads and railway infrastructure to concrete structures, foundations and industrial projects, the quality and suitability of aggregates can directly influence construction performance.
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <Card className="space-y-3">
            <h4 className="font-primary font-black text-base text-white uppercase">What Are Construction Aggregates?</h4>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Construction aggregates are granular materials such as crushed stone, gravel and other processed materials used in concrete, roads, railway applications and various civil works.</p>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Their characteristics including size, grading, strength, durability and cleanliness, need to meet the requirements of the intended application.</p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.1}>
          <SectionLabel>Why Aggregate Quality Matters</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <GridCard title="Strength and Stability" body="Appropriate aggregates contribute to the structural performance of concrete and other construction applications." />
            <GridCard title="Consistent Grading" body="Correct particle size distribution supports efficient mixing, compaction and application." />
            <GridCard title="Durability" body="Infrastructure is exposed to traffic, weather and environmental conditions. Durable materials are therefore essential for long-term performance." />
            <GridCard title="Project Efficiency" body="Consistent material quality can make construction processes more predictable and reduce material-related issues." />
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <Card className="space-y-3">
            <h4 className="font-primary font-black text-base text-white uppercase">The Role of Crushing Operations</h4>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">For large infrastructure projects, crushing plants play an important role in processing boulders and rock into required aggregate sizes.</p>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Efficient crushing and screening operations help produce materials suited to specific project requirements.</p>
            <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">This is particularly important in road, railway and major civil infrastructure projects, where material volumes and specifications can be demanding.</p>
          </Card>
        </FadeUp>

        <Callout
          headline="More Than Material Supply"
          paras={[
            "Reliable aggregate supply is not simply about delivering material. It involves quality control, processing capability, production consistency, logistics and timely availability.",
            "At Trion, our experience in crushing, aggregate supply and infrastructure support enables us to contribute to projects where material quality and dependable supply are critical.",
          ]}
          quote="Strong infrastructure begins with the right materials."
        />
      </div>
    ),
  },
  {
    title: "06",
    content: (
      <div className="space-y-5">
        <FadeUp>
          <Tag>EARTHWORK FLEET · 6 MIN</Tag>
          <h2 className="mt-3 font-primary font-black text-2xl md:text-4xl text-white uppercase leading-[1.08] tracking-tight">
            Blog 6: From Excavation to Execution: The Critical Role of Earthwork in Infrastructure Projects
          </h2>
        </FadeUp>

        <BlogHeroImg
          src="/assets/images/blogs/blog-6-excavation-earthwork.webp"
          alt="From Excavation to Execution The Critical Role of Earthwork"
          caption="FIG 6.0 — PRECISION LASER GRADING & BULK EXCAVATION"
        />

        <FadeUp delay={0.05}>
          <Card>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85] mb-4">
              Before a building rises, a road is constructed or an infrastructure project takes shape, there is one fundamental stage that sets the foundation for everything that follows: earthwork.
            </p>
            <p className="font-sans text-[15px] text-neutral-200 leading-[1.85]">
              Excavation, grading, site preparation and earthmoving are critical activities that establish the physical conditions required for successful construction.
            </p>
          </Card>
        </FadeUp>

        <FadeUp delay={0.08}>
          <SectionLabel>What Does Earthwork Include?</SectionLabel>
          <p className="font-sans text-[13px] text-neutral-500 mb-2">Depending on the project, earthwork can involve:</p>
          <PillList items={[
            "Site clearing and preparation",
            "Excavation",
            "Soil cutting and filling",
            "Earthmoving",
            "Grading and levelling",
            "Embankment construction",
            "Material handling",
            "Foundation excavation",
            "Site development",
          ]} />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-4">
            <Card>
              <h4 className="font-primary font-black text-sm text-[#f55d1b] uppercase mb-2">Why Proper Excavation Matters</h4>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Poorly planned excavation can create challenges throughout the project lifecycle. Effective earthwork planning considers soil conditions, excavation depths, equipment requirements, material movement, drainage and construction sequencing.</p>
            </Card>
            <Card>
              <h4 className="font-primary font-black text-sm text-[#f55d1b] uppercase mb-2">Equipment Makes a Difference</h4>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Large infrastructure projects require the right combination of machinery and equipment to execute earthwork efficiently.</p>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed mt-2">Excavators, loaders, dumpers, graders, compactors and other equipment must be coordinated according to the project's scale and requirements.</p>
            </Card>
            <Card>
              <h4 className="font-primary font-black text-sm text-[#f55d1b] uppercase mb-2">Earthwork and Project Timelines</h4>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed">Earthwork is often one of the earliest major activities on a construction site. Delays at this stage can impact subsequent construction activities.</p>
              <p className="font-sans text-[14.5px] text-neutral-400 leading-relaxed mt-2">Efficient planning, equipment utilisation, material movement and site coordination can therefore have a direct impact on overall project progress.</p>
            </Card>
          </div>
        </FadeUp>

        <Callout
          headline="From Groundwork to Completion"
          paras={[
            "For infrastructure companies, earthwork is not simply about moving soil. It is about preparing the site for everything that comes next.",
            "Trion brings together civil construction, excavation, infrastructure, crushing and material-handling capabilities to support projects from initial site preparation through execution.",
          ]}
          quote="Every landmark begins with the ground beneath it."
        />
      </div>
    ),
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#000435] text-slate-100 antialiased overflow-x-hidden selection:bg-[#f55d1b] selection:text-white">
      <section className="relative pt-24 pb-12 px-6 sm:px-10 md:px-16 max-w-7xl 2xl:max-w-[1580px] mx-auto overflow-hidden">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center,#f55d1b18 0%,transparent 70%)" }}
        />

        <FadeUp delay={0} className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#f55d1b]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-[#f55d1b]">
              Editorial Research · Trion Infrastructure
            </span>
          </div>
        </FadeUp>

        <RevealLine delay={0.1} className="relative z-10">
          <h1 className="font-primary font-black text-[52px] sm:text-[72px] md:text-[96px] text-white leading-[0.93] tracking-[-0.04em] uppercase">
            Engineering<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #f55d1b" }}>
              Intelligence
            </span>
          </h1>
        </RevealLine>

        <FadeUp delay={0.3} className="relative z-10 mt-8 flex flex-wrap items-center gap-8">
          <p className="font-sans text-neutral-400 text-base max-w-md leading-relaxed">
            Six in-depth chapters on India's infrastructure transformation — technology, materials, sustainability, and execution.
          </p>
          <div className="flex items-center gap-6">
            {[
              { v: "06", l: "Chapters" },
              { v: "32+", l: "Min Read" },
              { v: "2026", l: "Focus" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <span className="block font-primary font-black text-2xl text-white">{s.v}</span>
                <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest">{s.l}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 md:px-8 lg:px-10">
        <div
          className="w-full h-px mb-0"
          style={{ background: "linear-gradient(90deg, transparent, #f55d1b40, transparent)" }}
        />
      </div>

      <Timeline data={timelineData} />

      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(to top,#000,#000435)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%,#f55d1b14 0%,transparent 70%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <span className="inline-flex items-center gap-2 mb-5 font-mono text-[11px] tracking-[0.3em] text-[#f55d1b] uppercase font-bold">
              <span className="w-5 h-px bg-[#f55d1b]" />
              Infrastructure Partnership
              <span className="w-5 h-px bg-[#f55d1b]" />
            </span>
          </FadeUp>
          <RevealLine delay={0.1}>
            <h2 className="font-primary font-black text-4xl sm:text-6xl text-white uppercase leading-[1.0] tracking-[-0.03em]">
              BUILD THE FUTURE WITH US
            </h2>
          </RevealLine>
          <FadeUp delay={0.2}>
            <p className="font-sans text-neutral-400 text-base mt-6 mb-10 leading-relaxed max-w-xl mx-auto">
              Connect with our executive engineering specialists for technical consultation, tenders, and turnkey project development across India.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-primary font-black text-sm uppercase tracking-[0.15em] text-white no-underline transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg,#f55d1b,#f55d1b)",
                boxShadow: "0 8px 32px #f55d1b55",
              }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}