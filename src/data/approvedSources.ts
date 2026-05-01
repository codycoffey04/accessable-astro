// Citation whitelist for Learn Hub articles.
// Reconciled against domains used by existing canonical articles
// (caregiver, SCI, donning) plus the canonical list in
// docs/learn-hub-article-standards.md §7. Adding a new domain requires
// documenting authority, updating this list, and updating the standards doc.
//
// At build time (PENDING), every article's sources[] array is validated
// against this list. Non-whitelisted URLs error the build.

export interface ApprovedSourceDomain {
  domain: string;
  organization: string;
  category:
    | 'government'
    | 'major-medical'
    | 'sci-mobility'
    | 'stroke-cardiac'
    | 'condition'
    | 'professional-body'
    | 'caregiver-aging'
    | 'standards-industry';
  notes?: string;
}

export const approvedSources: ApprovedSourceDomain[] = [
  // Government / official
  { domain: 'cdc.gov', organization: 'Centers for Disease Control and Prevention', category: 'government' },
  { domain: 'nih.gov', organization: 'National Institutes of Health', category: 'government' },
  { domain: 'nlm.nih.gov', organization: 'National Library of Medicine', category: 'government' },
  { domain: 'medlineplus.gov', organization: 'MedlinePlus', category: 'government' },
  { domain: 'ahrq.gov', organization: 'Agency for Healthcare Research and Quality', category: 'government' },
  { domain: 'cms.gov', organization: 'Centers for Medicare & Medicaid Services', category: 'government' },
  { domain: 'fda.gov', organization: 'U.S. Food and Drug Administration', category: 'government', notes: 'Regulatory citation only — never imply approval' },
  { domain: 'va.gov', organization: 'U.S. Department of Veterans Affairs', category: 'government' },
  { domain: 'hhs.gov', organization: 'U.S. Department of Health and Human Services', category: 'government' },

  // Major medical institutions
  { domain: 'mayoclinic.org', organization: 'Mayo Clinic', category: 'major-medical' },
  { domain: 'clevelandclinic.org', organization: 'Cleveland Clinic', category: 'major-medical' },
  { domain: 'my.clevelandclinic.org', organization: 'Cleveland Clinic', category: 'major-medical' },
  { domain: 'ncbi.nlm.nih.gov', organization: 'National Center for Biotechnology Information', category: 'major-medical' },
  { domain: 'pubmed.ncbi.nlm.nih.gov', organization: 'PubMed', category: 'major-medical' },
  { domain: 'who.int', organization: 'World Health Organization', category: 'major-medical' },
  { domain: 'johnshopkins.edu', organization: 'Johns Hopkins Medicine', category: 'major-medical' },
  { domain: 'health.harvard.edu', organization: 'Harvard Health Publishing', category: 'major-medical' },

  // Disability / SCI / mobility advocacy
  { domain: 'christopherreeve.org', organization: 'Christopher & Dana Reeve Foundation', category: 'sci-mobility' },
  { domain: 'msktc.org', organization: 'Model Systems Knowledge Translation Center', category: 'sci-mobility' },
  { domain: 'unitedspinal.org', organization: 'United Spinal Association', category: 'sci-mobility' },
  { domain: 'pva.org', organization: 'Paralyzed Veterans of America', category: 'sci-mobility' },
  { domain: 'craighospital.org', organization: 'Craig Hospital', category: 'sci-mobility' },

  // Stroke / cardiac
  { domain: 'stroke.org', organization: 'American Stroke Association', category: 'stroke-cardiac' },
  { domain: 'heart.org', organization: 'American Heart Association', category: 'stroke-cardiac' },
  { domain: 'aha.org', organization: 'American Heart Association', category: 'stroke-cardiac' },

  // Conditions
  { domain: 'arthritis.org', organization: 'Arthritis Foundation', category: 'condition' },
  { domain: 'alz.org', organization: "Alzheimer's Association", category: 'condition' },
  { domain: 'kidney.org', organization: 'National Kidney Foundation', category: 'condition' },
  { domain: 'diabetes.org', organization: 'American Diabetes Association', category: 'condition' },

  // Clinical professional bodies
  { domain: 'aota.org', organization: 'American Occupational Therapy Association', category: 'professional-body' },
  { domain: 'apta.org', organization: 'American Physical Therapy Association', category: 'professional-body' },
  { domain: 'aacn.org', organization: 'American Association of Critical-Care Nurses', category: 'professional-body' },
  { domain: 'aaos.org', organization: 'American Academy of Orthopaedic Surgeons', category: 'professional-body' },
  { domain: 'ana.org', organization: 'American Nurses Association', category: 'professional-body' },
  { domain: 'aanp.org', organization: 'American Association of Nurse Practitioners', category: 'professional-body' },
  { domain: 'nahc.org', organization: 'National Association for Home Care', category: 'professional-body' },

  // Caregiver / aging (used by existing canonical caregiver article)
  { domain: 'caregiving.org', organization: 'National Alliance for Caregiving', category: 'caregiver-aging' },
  { domain: 'caregiver.org', organization: 'Family Caregiver Alliance', category: 'caregiver-aging' },
  { domain: 'aarp.org', organization: 'AARP', category: 'caregiver-aging' },
  { domain: 'prb.org', organization: 'Population Reference Bureau', category: 'caregiver-aging' },
  { domain: 'caregiveraction.org', organization: 'Caregiver Action Network', category: 'caregiver-aging' },

  // Standards / industry
  { domain: 'iso.org', organization: 'International Organization for Standardization', category: 'standards-industry' },
  { domain: 'astm.org', organization: 'ASTM International', category: 'standards-industry' },
];

const approvedDomainSet = new Set(approvedSources.map((s) => s.domain));

export function isApprovedSourceUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (approvedDomainSet.has(host)) return true;
    // Allow exact-prefix subdomains for major domains where we whitelisted
    // the apex (e.g., "wwwnc.cdc.gov", "www.mayoclinic.org").
    for (const domain of approvedDomainSet) {
      if (host === `www.${domain}` || host === `wwwnc.${domain}` || host.endsWith(`.${domain}`)) {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

// Build-time validator: throws if any url is not on the whitelist.
// Wire into article registry validation when ready.
export function assertAllSourcesApproved(
  slug: string,
  sources: { url: string; title: string }[],
): void {
  const violations = sources
    .filter((s) => !isApprovedSourceUrl(s.url))
    .map((s) => `${s.title} (${s.url})`);
  if (violations.length > 0) {
    throw new Error(
      `Article "${slug}" cites non-whitelisted sources:\n  - ${violations.join('\n  - ')}\n` +
        `Add the domain to src/data/approvedSources.ts or replace the citation.`,
    );
  }
}
