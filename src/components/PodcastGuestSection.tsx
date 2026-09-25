import { useEffect } from "react";

const FORM_ID = "5AgyGtZMerQNd0nBeAjR";
const EMBED_SCRIPT = "https://link.endevo.life/js/form_embed.js";

/**
 * Guest sign-up for the podcast, embedded from GoHighLevel.
 *
 * The form is long (contact details, socials, talking points, headshot and
 * file uploads, interview date), so a fixed iframe height would either clip it
 * or leave a large gap. GHL's form_embed.js resizes the iframe to the form's
 * real height — a <script> tag in JSX never runs, so it is loaded here. The
 * inline height is only the fallback if the script is blocked.
 *
 * The footer links here via /videos#be-a-guest.
 */
const PodcastGuestSection = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="be-a-guest"
      className="bg-muted/40 border-t border-border py-20 px-4 scroll-mt-20"
    >
      <div className="container max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Be a guest on the podcast
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Do you work with people planning for the end of life, or have a story
          about what happens to a life online after death? Tell us about
          yourself and what you would like to talk about, and we will be in
          touch.
        </p>
        <div className="bg-card rounded-xl overflow-hidden shadow-lg text-left">
          <iframe
            src={`https://link.endevo.life/widget/form/${FORM_ID}`}
            style={{
              width: "100%",
              height: "1600px",
              border: "none",
              borderRadius: "3px",
            }}
            id={`inline-${FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Podcast Guest Sign Up"
            data-height="1600"
            data-layout-iframe-id={`inline-${FORM_ID}`}
            data-form-id={FORM_ID}
            title="Sign up to be a guest on the Digital Legacy Podcast"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default PodcastGuestSection;
