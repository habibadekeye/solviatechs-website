export interface IndustryDetail {
  slug: string;
  name: string;
  heroDescription: string;
  challenges: { title: string; description: string }[];
  capabilities: { title: string; description: string }[];
  safeOpsUseCases: string[];
}

export const industryDetails: IndustryDetail[] = [
  {
    slug: 'oil-gas',
    name: 'Oil & Gas & Energy',
    heroDescription:
      'HSE, compliance, operational performance and field management systems for organizations operating across upstream, midstream and downstream energy environments.',
    challenges: [
      {
        title: 'High-risk operations across distributed assets',
        description:
          'Field operations, rigs, terminals and facilities generate safety and operational data across many locations, often with limited connectivity and inconsistent reporting practices.',
      },
      {
        title: 'Permit-to-work discipline',
        description:
          'High-risk activities such as hot work, confined space entry and isolation require controlled authorization. Paper-based permit systems are slow, hard to audit and difficult to oversee across sites.',
      },
      {
        title: 'Regulatory and client reporting demands',
        description:
          'Operators must produce consistent HSE statistics and compliance evidence for regulators, partners and clients — frequently under tight deadlines and scrutiny.',
      },
      {
        title: 'Contractor and workforce safety',
        description:
          'Large numbers of contractors and rotating crews make training verification, competency tracking and consistent safety standards difficult to maintain.',
      },
    ],
    capabilities: [
      {
        title: 'SafeOps HSE platform',
        description:
          'Integrated incident management, risk assessment, permit-to-work, inspections, PPE, training, HSE statistics and analytics in one connected system.',
      },
      {
        title: 'HSE performance dashboards',
        description:
          'Consolidated leading and lagging indicators across sites and business units, giving HSE and leadership teams a shared, current view of performance.',
      },
      {
        title: 'Digital permit-to-work',
        description:
          'Structured permit workflows with approvals, isolations and audit trails, replacing paper and email-based authorization.',
      },
      {
        title: 'Compliance management',
        description:
          'Centralized tracking of regulatory obligations, inspections and corrective actions with traceable records for audits and client reviews.',
      },
    ],
    safeOpsUseCases: [
      'Incident and near-miss reporting from field locations with structured investigation and corrective-action tracking',
      'Digital permit-to-work for high-risk activities with controlled approval chains',
      'Training and competency tracking for employees and contractors',
      'Company-wide HSE statistics, trends and performance analytics for management and regulatory reporting',
    ],
  },
  {
    slug: 'construction',
    name: 'Construction & Infrastructure',
    heroDescription:
      'Safety management, inspections and multi-site compliance for construction firms, engineering companies and infrastructure operators.',
    challenges: [
      {
        title: 'Constantly changing work sites',
        description:
          'Construction environments change daily. Risk assessments, inspections and permits must keep pace with evolving site conditions and shifting crews.',
      },
      {
        title: 'Multi-site, multi-project visibility',
        description:
          'Head offices struggle to see what is happening across concurrent projects. Safety performance is often compiled manually at month-end, long after events occur.',
      },
      {
        title: 'Subcontractor management',
        description:
          'Principal contractors carry responsibility for subcontractor safety but often lack a practical system for verifying training, documentation and safe work practices.',
      },
      {
        title: 'Paper-based inspections and audits',
        description:
          'Clipboards and spreadsheets produce records that are slow to consolidate, easy to lose and difficult to defend during incident investigations or audits.',
      },
    ],
    capabilities: [
      {
        title: 'Mobile-friendly field reporting',
        description:
          'Site teams capture incidents, hazards and inspections from the field, reducing delays and improving the quality of information reaching management.',
      },
      {
        title: 'Inspection and audit scheduling',
        description:
          'Planned inspections and audits with assigned responsibilities, findings tracking and close-out verification across projects.',
      },
      {
        title: 'Multi-site HSE statistics',
        description:
          'Comparable safety metrics across projects, making it possible to identify sites that need support before lagging indicators deteriorate.',
      },
      {
        title: 'Document and evidence management',
        description:
          'Controlled storage of risk assessments, method statements, permits and audit records with clear ownership and traceability.',
      },
    ],
    safeOpsUseCases: [
      'Daily site inspections and hazard observations recorded digitally with photo and location context',
      'Incident and near-miss reporting with investigation workflows and corrective actions per project',
      'Permit-to-work for high-risk construction activities such as working at height and excavation',
      'Cross-project dashboards giving leadership a consolidated view of site safety performance',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    heroDescription:
      'Integrated HSE, audit and performance management for manufacturing, processing and industrial facilities where safety, quality and output are tightly linked.',
    challenges: [
      {
        title: 'Continuous production pressure',
        description:
          'Production targets can push safety processes into the background. Organizations need systems that make safe work the path of least resistance, not an administrative burden.',
      },
      {
        title: 'Machine, chemical and process hazards',
        description:
          'Manufacturing environments combine machinery, hazardous substances and complex processes. Risk assessments and controls must be specific, current and accessible to the people who need them.',
      },
      {
        title: 'Fragmented data across systems',
        description:
          'Safety data, maintenance records, production data and quality information often live in separate tools, making it difficult to see how operational decisions affect risk and performance.',
      },
      {
        title: 'Audit readiness',
        description:
          'Customer audits, regulatory inspections and certification requirements demand organized, retrievable evidence — which is difficult when records are spread across paper files and shared drives.',
      },
    ],
    capabilities: [
      {
        title: 'Integrated HSE management',
        description:
          'Incident reporting, risk assessments, PPE management, training records and safety statistics connected in one platform rather than separate spreadsheets.',
      },
      {
        title: 'Inspection and audit management',
        description:
          'Scheduled plant inspections, equipment checks and internal audits with findings, actions and verification tracked to completion.',
      },
      {
        title: 'Performance analytics',
        description:
          'Dashboards that connect safety indicators with operational context, helping plant leadership spot trends and act before incidents occur.',
      },
      {
        title: 'ESG and sustainability reporting',
        description:
          'Structured data collection for environmental and social metrics that manufacturers increasingly need for customers, lenders and regulators.',
      },
    ],
    safeOpsUseCases: [
      'Line-side hazard and near-miss reporting that feeds directly into corrective action tracking',
      'PPE issuance, compliance and replacement management across the workforce',
      'Scheduled equipment and facility inspections with digital checklists and follow-up actions',
      'Plant-level and group-level HSE statistics with trend analysis for continuous improvement programs',
    ],
  },
  {
    slug: 'mining',
    name: 'Mining & Extractive Industries',
    heroDescription:
      'Incident, risk and permit-to-work management for remote, high-risk extractive operations where consistent safety discipline protects lives and licenses to operate.',
    challenges: [
      {
        title: 'Remote and harsh operating environments',
        description:
          'Mine sites are often far from head offices with constrained connectivity. Safety systems must work for field teams, not just office staff.',
      },
      {
        title: 'Catastrophic risk profile',
        description:
          'Ground failure, blasting, mobile equipment and confined spaces mean that weak controls can have severe consequences. Risk assessment and critical control verification must be rigorous.',
      },
      {
        title: 'Strict regulatory oversight',
        description:
          'Mining regulators demand detailed incident records, statistics and corrective action evidence. Poor record-keeping creates legal and operational exposure.',
      },
      {
        title: 'Rotating workforces',
        description:
          'Rotate-in, rotate-out rosters and contractor-heavy workforces make it difficult to ensure everyone on site is trained, inducted and fit for their tasks.',
      },
    ],
    capabilities: [
      {
        title: 'Incident and investigation management',
        description:
          'Structured capture of incidents and near misses with investigation workflows, root-cause documentation and corrective action tracking.',
      },
      {
        title: 'Risk assessment and control tracking',
        description:
          'Documented risk assessments with defined controls, responsibility assignment and review cycles for high-consequence activities.',
      },
      {
        title: 'Permit-to-work management',
        description:
          'Digital permits for high-risk tasks with approval chains, validity windows and complete audit trails.',
      },
      {
        title: 'Training and competency records',
        description:
          'Central records of inductions, certifications and competency requirements so supervisors can verify readiness before work begins.',
      },
    ],
    safeOpsUseCases: [
      'Digital incident and hazard reporting for pit, plant and underground teams',
      'Permit-to-work for blasting support activities, hot work and confined space entry',
      'Tracking of safety-critical training and certification across rotating crews and contractors',
      'HSE statistics and trend reporting for regulatory submissions and corporate oversight',
    ],
  },
];
