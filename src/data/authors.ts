// Author registry for Learn Hub articles.
// Sole author at launch is Cody Coffey. Clinical reviewer slot reserved for
// when budget allows. No founder photo — uses brand mark / wheelchair icon
// avatar per the Cody-in-photos constraint in CLAUDE.md.

export type AuthorBioVariant = 'consumer' | 'pro';

export interface AuthorBio {
  id: string;
  name: string;
  role: string;
  credentials: string;
  // Avatar: brand-mark or icon path. Never a photo of the founder.
  avatar: string;
  avatarAlt: string;
  // Per-variant body copy. Consumer = approachable lived-experience framing.
  // Pro = clinical-tone framing with reviewer-recruitment line.
  body: Record<AuthorBioVariant, string>;
  // Disclosure line included with both variants. Names the absent clinician.
  disclosure: Record<AuthorBioVariant, string>;
  links: { label: string; href: string }[];
}

export interface ClinicalReviewer {
  id: string;
  name: string;
  credential: string;
  role: 'clinical-reviewer';
  reviewedSlugs: string[];
  reviewerStatementUrl?: string;
}

const cody: AuthorBio = {
  id: 'cody-coffey',
  name: 'Cody Coffey',
  role: 'Founder, AccessAble',
  credentials: 'C4 incomplete spinal cord injury, December 2023. Designer of the DonnEase numbered-guide system.',
  avatar: '/images/brand/accessable-author-mark.svg',
  avatarAlt: 'AccessAble brand mark',
  body: {
    consumer:
      "Cody Coffey is the founder of AccessAble. He designs adaptive compression socks based on his own experience after a C4 incomplete spinal cord injury in December 2023. That was the moment he realized he couldn't put his own socks on without help. The DonnEase numbered-guide system is the answer he wished existed.",
    pro:
      "Cody Coffey is the founder of AccessAble and the designer of the DonnEase numbered-guide system. After a C4 incomplete spinal cord injury, Cody worked with occupational therapists and a 12-tester wear program (28 submissions, 4.6★ average) to develop a compression sock that patients with limited dexterity can put on independently. This guide synthesizes published clinical literature with structured feedback from that program.",
  },
  disclosure: {
    consumer:
      "This guide draws from Cody's lived experience, feedback from the AccessAble wear-test program, and the sources cited at the end. Cody is not a clinician. For medical decisions, work with your healthcare provider.",
    pro:
      "Written by AccessAble's founder, not a clinician. Clinical decisions remain the responsibility of the licensed practitioner. AccessAble is actively recruiting an OT or PT clinical reviewer to formally validate this content. Interested? pro@accessablecompression.com.",
  },
  links: [
    { label: 'About Cody', href: '/about' },
    { label: 'Editorial policy', href: '/about/editorial' },
  ],
};

export const authors: Record<string, AuthorBio> = {
  'cody-coffey': cody,
};

// Reserved for when a clinical reviewer joins. Empty until then.
// When populated, articles can set `reviewedBy: '<reviewer-id>'` and the
// MedicalWebPage schema upgrade triggers per-article via the LLC_FORMED-style
// flag in schemaFactory.ts.
export const clinicalReviewers: Record<string, ClinicalReviewer> = {};

export const defaultAuthorId = 'cody-coffey';
