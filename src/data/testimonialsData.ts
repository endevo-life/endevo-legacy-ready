/**
 * Client testimonials — the single source for every surface that shows them.
 *
 * Collected via the Typeform/GHL testimonial request, where each respondent
 * explicitly granted permission to publish their name and photo. Only entries
 * carrying that consent belong here.
 *
 * `featured` marks the ones the homepage shows. Video testimonials are
 * featured first: a person saying it on camera carries more weight than the
 * same words as text, and only two exist.
 */

export interface Testimonial {
  /** Stable key — also the anchor id on the testimonials page. */
  id: string;
  name: string;
  /** Job title where the respondent gave one. */
  role?: string;
  /** Relationship to ENDevo, e.g. "I am/was a client". */
  relationship?: string;
  quote: string;
  /** Headshot supplied with the response. Text-only entries omit it. */
  photo?: string;
  /** Self-hosted MP4 for the two filmed testimonials. */
  videoUrl?: string;
  /** Poster frame for the video. */
  videoThumbnail?: string;
  /** 1-5; every published response so far is a 5. */
  rating: number;
  /** ISO date the response was submitted. */
  submittedAt: string;
  /** Shown on the homepage. */
  featured?: boolean;
}

const GHL_MEDIA =
  "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media";

export const testimonials: Testimonial[] = [
  // --- Video testimonials (featured on the homepage) -----------------------
  {
    id: "jeff-monger",
    name: "Jeff Monger",
    role: "Realtor",
    quote:
      "As I've gotten older, I've realized how uncomfortable most people are talking about death and dying. That's why I'm so grateful for Niki's openness and her willingness to share her knowledge in such an accessible way. She brings attention to so many aspects of end-of-life planning, including the emotional, financial, and physical components, that most of us haven't even considered. Her mission to educate and support others in this space is truly invaluable. I'm confident that My Final Playbook will be a tremendous success because it's something we all need. Thank you, Niki.",
    photo: `${GHL_MEDIA}/6866bc1c9ca6fb56d8176e44.jpeg`,
    videoUrl: `${GHL_MEDIA}/66f577cf33c02706dbce43d5.mp4`,
    videoThumbnail: `${GHL_MEDIA}/66f578778a8a073a07cf7acd.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
    featured: true,
  },
  {
    id: "mary-cioffi",
    name: "Mary Cioffi",
    role: "Business Coach",
    quote:
      "When I first started working with Niki and My Final Playbook, I didn't know what to expect. But it turned out to be a very positive experience. I was faced with an enormous list of things I hadn't even thought about — tasks that would need to be handled in the event of an accident or my passing. Thanks to Niki, those things are no longer a source of stress for my family. It's hard enough when a loved one is in an accident or passes away. Niki makes it simple to get everything in order so you can feel more at peace with whatever happens, knowing your loved ones have the support they need to figure things out.",
    photo: `${GHL_MEDIA}/6866bbe8a379105ee5b13e6f.jpeg`,
    videoUrl: `${GHL_MEDIA}/66f577cffae5c95204b208b9.mp4`,
    videoThumbnail: `${GHL_MEDIA}/66f5787775b6040ca16ef6e1.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
    featured: true,
  },

  // --- Text testimonials ---------------------------------------------------
  {
    id: "todd-pollock",
    name: "Todd Pollock",
    role: "Ops Technology Consultant",
    relationship: "I am/was a client",
    quote:
      "I always thought I just needed a will — but working with Niki completely changed my perspective. She made legacy planning feel approachable, and her education opened my eyes to everything I hadn't considered. Now, I'm not just preparing for myself, but also for my kids, my parents, and even my in-laws. This experience has been life-changing.",
    photo:
      "https://api.typeform.com/responses/files/7dde2463604053d1dc3ef5275cee3a605bdd3f7801ef8d8c9a5b5f6d0672b5ba/Todd_Pollock.jpeg",
    rating: 5,
    submittedAt: "2025-09-05",
    featured: true,
  },
  {
    id: "jan-watson",
    name: "Jan Watson",
    quote:
      "Working with Niki and building My Final Playbook has been transformative. I'm a true procrastinator, and had been thinking about making needed changes to my will for quite a while. Despite thinking I was well-prepared, the process revealed gaps I hadn't even considered, from my digital and social media legacy to practical green burial options. The platform's intuitive tools and personalized approach helped me organize my documents, clarify my wishes, and gain peace of mind. Niki and her end-of-life planning system provided solutions and a framework to align my end-of-life planning with my values and vision for the future.",
    photo: `${GHL_MEDIA}/6866b8379ca6fb127b1767ec.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
    featured: true,
  },
  {
    id: "sherah-cooney",
    name: "Sherah Cooney",
    quote:
      "After working with Niki in creating a Crucial Doc Box, I feel more prepared and at peace than I ever have. Niki was amazing during the entire process and guided me at a pace that worked for me. This sounds strange, but I actually got excited to put this Crucial Doc Box together. Because now, if anything happens to me or my husband or both of us, we have everything in one place so our executor can access all of our essential documents easily. I highly recommend Niki to anyone who wants to prepare for the inevitable for peace of mind today.",
    photo: `${GHL_MEDIA}/6866b8b0006fa75ceb32edd4.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
    featured: true,
  },
  {
    id: "kristen-mcmahon",
    name: "Kristen McMahon",
    quote:
      "Niki Weiss is a true professional who brings both compassion and expertise to a difficult process. She helped me start the process of organizing all the necessary documents for end-of-life planning, and her guidance made everything much less overwhelming. Niki is incredibly knowledgeable, patient, and kind, answering every question and offering helpful information with care and understanding. Her dedication to making this process as smooth as possible was deeply appreciated, and I feel so much more at ease knowing that everything will be in order. I highly recommend Niki to anyone needing support during this important stage of life planning.",
    photo: `${GHL_MEDIA}/6866b949ec92f431bd02b71f.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
    featured: true,
  },
  {
    id: "jayne-lammers",
    name: "Jayne Lammers",
    quote:
      "Having someone like Niki walk you through end-of-life planning and creating a final playbook is invaluable! I'm embarrassed to say I study digital learning and work for an educational technology company, but I had never given any thought to the digital aspect of end-of-life planning until I worked with Niki. If you know you need a plan that protects your digital and physical assets, but you don't know where to start — I highly recommend you reach out to Niki Weiss to guide you in creating your final playbook!",
    photo: `${GHL_MEDIA}/6866b9c15143a2a67701d00b.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
  },
  {
    id: "lory-pilchik",
    name: "Lory Pilchik",
    quote:
      "After years of procrastination as a single person and, even more urgently and importantly, after I married late in life to a father of two adult children, Niki's support and end-of-life planning system were incredibly valuable and just what I needed. The My Final Playbook framework not only addresses the technical aspects of end-of-life planning but also provides the strategic guidance necessary for making informed decisions about our future. What sets Niki apart is her ability to guide us through the legal, financial, and digital steps in end-of-life planning, transforming them into a clear, actionable roadmap. Critically, her framework and system of accountability prompted the necessary self-reflection, pushed me to stay on track, and is now ensuring that our wishes are properly documented and our loved ones are protected.",
    photo: `${GHL_MEDIA}/6866b7f55143a20cd401cdaf.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
  },
  {
    id: "ellen-fineberg",
    name: "Ellen Fineberg",
    quote:
      "Working with Niki has been invaluable in helping me get my Final Playbook in order. I've been procrastinating on these important tasks for a while, but Niki's guidance has given me the push I needed. She's helped me realize this isn't just a 'final' playbook, but a \"Living Playbook\" evolving document that needs regular attention. From reviewing my legal documents to setting up accounts for my family, Niki has helped provide the structure and accountability I was missing. I'm slowly gaining the peace of mind that comes from getting my affairs in order, and I'm grateful for Niki's expertise and support throughout this process.",
    rating: 5,
    submittedAt: "2025-07-02",
  },
  {
    id: "patty-welsh",
    name: "Patty Welsh",
    quote:
      "The final playbook has helped guide me through a difficult and challenging subject that is unfortunately avoided by most. The tools that the playbook offers help you delve deeper into personal beliefs and desires in a clear and easy to use layout. The process gives peace of mind in a respectful, comfortable, and easy-to-use format. This is a crucial subject that brings peace of mind to you and those you leave behind.",
    photo: `${GHL_MEDIA}/6866be0fc5b220524d7123da.jpeg`,
    rating: 5,
    submittedAt: "2025-07-02",
  },
  {
    id: "julie-esposito",
    name: "Julie Esposito",
    quote:
      "Before working with Niki, end-of-life planning felt overwhelming and scary. I was paralyzed by my fear of death, shaped by losing my parents unexpectedly. Niki didn't just help me create a document — she helped me transform my perspective. Her approach broke down complex concepts into digestible pieces, making me understand the importance of planning. What truly set Niki apart was her compassionate guidance, helping me see that this isn't about dying — it's about living fully and ensuring my family is taken care of.",
    rating: 5,
    submittedAt: "2025-07-07",
  },
];

/** Testimonials with a filmed version, newest submission first. */
export const videoTestimonials = testimonials.filter((t) => t.videoUrl);

/** The homepage subset. */
export const featuredTestimonials = testimonials.filter((t) => t.featured);

/**
 * Initials for the avatar placeholder shown in place of a photo.
 *
 * First and last word only, so a middle name does not produce three letters.
 */
export function initialsFor(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase();
}
